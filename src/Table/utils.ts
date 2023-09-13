import { isFunction } from 'lighting-design/_utils';
import XLSX from 'xlsx-js-style';

type Json2ExcelOptions = {
  /** 文件名称 */
  fileName: string;
  /** excel中是否展示文件的名称及表格的标题 ( 会在excel最上方格 )*/
  hasFileName?: boolean;
  /** excel中是否展示表格标题 */
  hasColumnTitle?: boolean;
  /** 最小列宽 , 默认两个汉字宽度 */
  minColWidth?: number;
  /** 表格数据 */
  data: Record<string, any>[];
  /** 表格列 */
  columns: Array<{
    title: string;
    dataIndex: string;
    hiddenInExcel: boolean;
    exportRender: (row: any) => string | number;
    [k: string]: any;
  }>;

  /** 自定义节点 title、dataIndex 的字段  配合 columns 使用*/
  fieldNames?: {
    title: string;
    dataIndex: string;
  };
  /** 自定义表格标题内容样式 */
  renderFileNameStyle?: (cellValue: string) => string | { [k: string]: any };
  /** 自定义表格表头内容样式 */
  renderColumnTitleStyle?: (
    cellValue: string,
    colIndex: number,
  ) => string | { [k: string]: any };

  /** 自定义表格数据单元格内容样式 */
  renderCellStyle?: (
    cellValue: string,
    rowIndex: number,
    colIndex: number,
  ) => string | { [k: string]: any };
};

/**
 * 生成Excel
 * @param XLSX
 * @param options
 * @returns
 */
// response.setContentType("application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"); //设置文件类型，这里以.xlsx为例
// 设置文件的原文件名，若文件名中含有中文则需要解码，否则会出现乱码
// response.setHeader("Content-Disposition", "attachment;fileName=" + URLEncoder.encode(fileName, "utf-8"));
// 这步很关键，需要在给前端返回的请求头中添加Content-Disposition字段
// response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
export const jsonToExcel = (options: Json2ExcelOptions) => {
  const {
    fieldNames = {
      title: 'title',
      dataIndex: 'dataIndex',
    },
    columns,
    data,

    fileName = '附件',
    hasColumnTitle = true,
    hasFileName = false,
    minColWidth = 8,

    renderFileNameStyle,
    renderColumnTitleStyle,
    renderCellStyle,
  } = options;

  if (!Array.isArray(columns)) {
    // eslint-disable-next-line no-console
    console.error('参数 columns 必须是数组');
    return;
  }
  if (!Array.isArray(data)) {
    // eslint-disable-next-line no-console
    console.error('参数 data 必须是数组');
    return;
  }

  const { title: titleKey, dataIndex: dataIndexKey } = fieldNames;

  // 筛选columns
  const newColumns = columns.filter((cs) => cs.hiddenInExcel !== true);

  // 表格数据
  const rows = [];

  // 文件名在excel中
  if (hasFileName) {
    const firstRow = [];
    if (isFunction(renderFileNameStyle)) {
      const renderStyleObj = renderFileNameStyle?.(fileName);
      firstRow.push(renderStyleObj || fileName);
    } else {
      firstRow.push({
        v: fileName,
        s: {
          alignment: { horizontal: 'center' },
          font: {
            bold: true, // 加粗
            sz: 14, // 字号14
          },
        },
      });
    }
    firstRow.push(...Array.from({ length: newColumns.length - 1 }).fill(null));
    rows.push(firstRow);
  }

  // 表头在excel中
  if (hasColumnTitle) {
    const columnsTitle = newColumns.map((column: any, index: number) => {
      if (typeof renderColumnTitleStyle === 'function') {
        const renderStyleObj = renderColumnTitleStyle(column[titleKey], index);
        return renderStyleObj || column[titleKey];
      }
      return {
        v: column[titleKey],
        s: {
          alignment: { horizontal: 'center' },
          font: {
            bold: true, // 加粗
            sz: 12, // 字号14
          },
        },
      };
    });
    rows.push(columnsTitle);
  }

  // 列宽
  const colsWidth: any = [];

  // 处理列宽和表格数据
  data.forEach((item: any, rowIndex: number) => {
    const row = newColumns.map((column, index: number) => {
      // 设置单元格自动宽度
      let value = isFunction(column?.exportRender)
        ? column.exportRender?.(item)?.toString()
        : item[column[dataIndexKey]]?.toString();

      if (value) {
        let curColWidth = minColWidth;
        if (value.charCodeAt(0) > 255) {
          // 中文 (value.length * 2 + 1)留出2个汉字半的宽度
          curColWidth = Math.max(
            value.length * 4 + 2,
            colsWidth[index]?.wch ? colsWidth[index].wch : minColWidth,
          );
        } else {
          // 英文和数字，留出2个汉字的宽度
          curColWidth = Math.max(
            value.length + 4,
            colsWidth[index]?.wch ? colsWidth[index].wch : minColWidth,
          );
        }

        if (!colsWidth[index]?.wch) {
          colsWidth.push({ wch: curColWidth });
        } else {
          colsWidth[index].wch = curColWidth;
        }
      }

      if (isFunction(renderCellStyle)) {
        return renderCellStyle?.(value, rowIndex, index);
      }
      return {
        v: value,
        s: { alignment: { horizontal: 'center' } },
      };
    });

    rows.push(row);
  });

  // 创建worksheet
  const ws: any = XLSX.utils.aoa_to_sheet(rows);

  if (hasFileName) {
    // 合并单元格
    ws['!merges'] = [
      // 设置单元格合并
      {
        // 开始
        s: {
          r: 0, // 开始row
          c: 0, // 开始cOl
        },
        // 结束
        e: {
          r: 0,
          c: newColumns.length - 1,
        },
      },
    ];
  }
  // 设置列宽
  ws['!cols'] = colsWidth;
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, fileName);

  // 生成xlsx文件
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
