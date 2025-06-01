import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { json2Excel, LTable } from 'lighting-design';
import React, { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const App: React.FC = () => {
  const tableRef = useRef<LTableInstance>();

  const handleUploadChange = () => {
    const data = tableRef.current?.tableData as Record<string, any>[];
    json2Excel({
      columns,
      data,
      fileName: '用户列表',
      hasFileName: true,
      // 设置文件名称标题样式 (如果 hasFileName 为false 可不配置此项)
      renderFileNameStyle: (v: string) => {
        return {
          v,
          s: {
            alignment: { horizontal: 'center' },
            font: {
              bold: true, // 加粗
              sz: 12, // 字号14
              color: {
                rgb: 'f81d22', // 字体颜色
              },
            },
            fill: {
              fgColor: {
                rgb: 'e2e2e2',
              },
            },
          },
        };
      },

      // 设置表头样式
      renderColumnTitleStyle: (v: string) => {
        return {
          v,
          s: {
            alignment: { horizontal: 'center' },
            font: {
              bold: true, // 加粗
              sz: 12, // 字号14
              color: {
                rgb: 'ad2102', // 字体颜色
              },
            },
            fill: {
              fgColor: {
                rgb: 'ffffb8',
              },
              underline: true,
            },
            border: {
              top: { style: 'dashDotDot', color: { rgb: '4b0082' } },
              right: { style: 'thick', color: { rgb: '4b0082' } },
              bottom: { style: 'thick', color: { rgb: '4b0082' } },
              left: { style: 'thick', color: { rgb: '4b0082' } },
            },
          },
        };
      },
      // 设置数据单元格样式
      renderCellStyle: (v: string, rowIndex: number, colIndex: number) => {
        return {
          v,
          s: {
            alignment: { horizontal: colIndex % 2 === 0 ? 'left' : 'right' },
            font: {
              color: {
                rgb: '000000', // 字体颜色
              },
            },
            fill: {
              fgColor: {
                rgb: colIndex % 2 === 0 ? '69c0ff' : '8c8c8c',
              },
            },
            border: {
              top: { style: 'thin', color: { rgb: '1890ff' } },
              right: { style: 'thin', color: { rgb: '1890ff' } },
              bottom: { style: 'thin', color: { rgb: '1890ff' } },
              left: { style: 'thin', color: { rgb: '1890ff' } },
            },
          },
        };
      },
    });
  };

  return (
    <>
      <LTable
        toolbarLeft={
          <Button type="primary" onClick={handleUploadChange}>
            导出 Excel
          </Button>
        }
        rowKey="key"
        tableRef={tableRef}
        columns={columns}
        request={async (params, requestType) => {
          const res: Record<string, any> = await apiGetUserList();
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />
    </>
  );
};

export default App;
