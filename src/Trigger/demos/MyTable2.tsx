import { type FormInstance } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';

const originData = [
  { key: '1', name: 'John Brown', age: 10 },
  { key: '2', name: 'Jim Green', age: 42 },
  { key: '3', name: 'Joe Black1', age: 32 },
  { key: '4', name: 'Joe Black2', age: 32 },
  { key: '5', name: 'Joe Black3', age: 32 },
];
const columns: ColumnsType<any> = [
  { title: '姓名', dataIndex: 'name', key: 'name', align: 'center' },
  { title: '年龄', dataIndex: 'age', key: 'age', align: 'center' },
];

const formItems = [<LFormItemInput key="0" name="username" label="输入框" />];

const MyTable: FC = (props) => {
  const { value: outValue, onChange: outChange, open, setOpen } = props;

  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      outChange({
        label: selectedRows.map((row) => row.name),
        value: selectedRowKeys,
      });
    },
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
  };

  return (
    <LTable
      showToolbar={false}
      size="small"
      columns={columns}
      tableRef={tableRef}
      formRef={formRef}
      queryFormProps={{ size: 'small', isSpace: true }}
      tableCardProps={{
        style: {
          borderRadius: 0,
        },
        bodyStyle: {
          paddingTop: 0,
        },
      }}
      formCardProps={{
        style: {
          marginBottom: 0,
          borderRadius: 0,
        },
      }}
      formItems={formItems}
      request={async (params, requestType) => {
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
      rowSelection={{
        selectedRowKeys: outValue,
        type: 'checkbox',
        ...rowSelection,
      }}
    />
  );
};

export default MyTable;
