import { isFunction } from 'lighting-design/_utils';
import XLSX from 'xlsx-js-style';

type Columns = {
  title: string;
  dataIndex: string;
  /** 表格导出时隐藏是否隐藏该列 */
  hiddenInExcel?: boolean;
  /** 表格导出时自定义导出内容 */
  exportRender?: (val: any, row: Record<string, any>, i: number) => string | number;
  [k: string]: any;
};

type FieldNames = {
  title: string;
  dataIndex: string;
};

type Excel = {
  [key: string]: any;
  s: Record<string, any>;
};

export type Json2ExcelOptions = {
  /** 文件名称 */
  fileName?: string;
  /** excel中是否展示文件的名称及表格的标题 ( 会在excel最上方格 )*/
  hasFileName?: boolean;
  /** excel中是否展示表格标题 */
  hasColumnTitle?: boolean;
  /** 最小列宽 , 默认两个汉字宽度 */
  minColWidth?: number;
  /** 表格数据 */
  data: Record<string, any>[];
  /** 表格列 */
  columns: Array<Columns>;
  /** 自定义节点 title、dataIndex 的字段  配合 columns 使用*/
  fieldNames?: FieldNames;
  /** 自定义表格标题内容样式 */
  renderFileNameStyle?: (cellValue: string) => Excel;
  /** 自定义表格表头内容样式 */
  renderColumnTitleStyle?: (cellValue: string, colIndex: number) => Excel;

  /** 自定义表格数据单元格内容样式 */
  renderCellStyle?: (cellValue: string, rowIndex: number, colIndex: number) => Excel;
};
/**
 * 与 LTable 配合把 JSON 数据转成 Excel 并生成 Excel 到本地
 * @param {Json2ExcelOptions} options 配置对象
 * @return 无返回值
 */
export const json2Excel = (options: Json2ExcelOptions) => {
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
    console.error('参数 columns 必须是数组!');
    return;
  }
  if (!Array.isArray(data)) {
    // eslint-disable-next-line no-console
    console.error('参数 data 必须是数组!');
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
      if (isFunction(renderColumnTitleStyle)) {
        const renderStyleObj = renderColumnTitleStyle?.(column[titleKey], index);
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
      const curVal = item[column[dataIndexKey]];
      const value = isFunction(column?.exportRender)
        ? column.exportRender?.(curVal, item, rowIndex)?.toString()
        : curVal?.toString();

      if (value) {
        // 设置单元格自动宽度
        let curColWidth = minColWidth;
        if (value.charCodeAt(0) > 255) {
          // 中文 (value.length * 2 + 1)留出2个汉字半的宽度
          curColWidth = Math.max(value.length * 4 + 2, colsWidth[index]?.wch ? colsWidth[index].wch : minColWidth);
        } else {
          // 英文和数字，留出2个汉字的宽度
          curColWidth = Math.max(value.length + 4, colsWidth[index]?.wch ? colsWidth[index].wch : minColWidth);
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

export type Excel2JsonOptions = {
  /** 原始文件或者 Blob */
  file: Blob;
  /** 自定义节点 title、dataIndex 的字段  配合 columns 使用*/
  fieldNames?: FieldNames;
  /** 表格的列 */
  columns: Array<Omit<Columns, 'hiddenInExcel' | 'exportRender'>>;
};

/**
 * 与 LTable 配合把 Excel 转 Json 数据
 * @version 2.1.29
 * @param {Excel2JsonOptions} options 配置对象
 * @return 返回JSON形式的表格数据
 */
export const excel2Json = (options: Excel2JsonOptions): Promise<Record<string, any>[]> => {
  return new Promise((resolve, reject) => {
    const {
      file,
      columns,
      fieldNames = {
        title: 'title',
        dataIndex: 'dataIndex',
      },
    } = options;

    const { title: titleKey, dataIndex: dataIndexKey } = fieldNames;

    if (!file) {
      reject('缺少excel文件');
      return;
    }
    if (!columns) {
      reject('缺少 columns 参数');
      return;
    }
    const reader = new FileReader();
    // 文件加载完成后调用
    reader.onload = function (e: any) {
      const data = e.target.result;

      const workbook = XLSX.read(data, {
        type: 'binary', // 手动转化
      });
      // 获取json格式的Excel数据
      const result: Record<string, any>[] = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
        defval: 'null', // 单元格为空时的默认值
      });

      if (Array.isArray(result) && result.length) {
        result.forEach((item: any, i) => {
          columns.forEach((col: any) => {
            item.key = `${i}`; // 生成唯一索引
            item[col[dataIndexKey]] = item[col[titleKey]];
            delete item[col[titleKey]];
          });
        });
      }
      resolve(result);
    };
    // 加载文件
    reader.readAsArrayBuffer(file);
  });
};

const getExcelHeaderRow = (sheet: XLSX.WorkSheet | any) => {
  const headers = [];
  const range = XLSX.utils.decode_range(sheet['!ref']);
  let C;
  const R = range.s.r;
  for (C = range.s.c; C <= range.e.c; ++C) {
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
    if (cell && cell.t) headers.push(XLSX.utils.format_cell(cell));
  }
  return headers;
};

/**
 * 解析 Excel 的数据 转成JSON
 * @param {Blob} rawFile 原始文件对象或 Blob
 * @return 包含excel头的数组 以及内容数据的body
 */
export const getExcelData = (rawFile: Blob): Promise<{ header: string[]; body: Record<string, any>[] }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(rawFile);
    reader.onload = (e) => {
      const result = e.target?.result;
      const workbook = XLSX.read(result, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet: XLSX.WorkSheet = workbook.Sheets[firstSheetName];
      const header = getExcelHeaderRow(worksheet);
      const body: Record<string, any>[] = XLSX.utils.sheet_to_json(worksheet);
      resolve({ header, body });
    };
  });
};

// response.setContentType("application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"); //设置文件类型，这里以.xlsx为例
// 设置文件的原文件名，若文件名中含有中文则需要解码，否则会出现乱码
// response.setHeader("Content-Disposition", "attachment;fileName=" + URLEncoder.encode(fileName, "utf-8"));
// 这步很关键，需要在给前端返回的请求头中添加Content-Disposition字段
// response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
