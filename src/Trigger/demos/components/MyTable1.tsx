import { type FormInstance } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import Mock from 'better-mock';
import type { LTableInstance, LTriggerMode, LValueType } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import type { FC } from 'react';
import { useRef } from 'react';

interface LTriggerChildProps {
  value?: any;
  onChange?: (value: any) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  labelInValue?: boolean;
  mode?: LTriggerMode;
  fieldNames?: {
    label: string;
    value: string;
  };
  [key: string]: any;
}
interface DataType {
  key: React.Key;
  name: string;
  age: number;
}

const columns: ColumnsType<any> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
];

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" style={{ marginBottom: 0 }} />,
];

const MyTable: FC<LTriggerChildProps> = (props) => {
  const {
    value: outValue,
    onChange: outOnChange,
    open,
    setOpen,
    labelInValue,
    mode,
    fieldNames,
  } = props;

  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  function getValue() {
    if (!outValue) return [];
    let innerVal = outValue;
    if (labelInValue) {
      innerVal = outValue?.[fieldNames?.value as string];
    }
    if (mode === 'radio' || mode === 'radioTag') {
      return [innerVal];
    }
    return innerVal;
  }

  const rowSelection = {
    type: mode?.includes('radio') ? 'radio' : 'checkbox',
    preserveSelectedRowKeys: true,
    selectedRowKeys: getValue(),
    onChange: (selectedRowKeys: (string | number)[], selectedRows: DataType[]) => {
      let selectedNames: LValueType = selectedRows?.map((item) => item?.name);
      let selectedKeys: LValueType = selectedRowKeys;

      if (mode === 'radio' || mode === 'radioTag') {
        selectedNames = selectedNames[0];
        selectedKeys = selectedKeys[0];
      }

      outOnChange!({
        [fieldNames!.label]: selectedNames,
        [fieldNames!.value]: selectedKeys,
      });

      if (mode?.includes('radio')) setOpen!(false);
    },
  };

  return (
    <LTable
      tableCardProps={{ style: { borderRadius: 0 }, styles: { body: { padding: 0 } } }}
      formCardProps={{
        style: { marginBottom: 0, borderRadius: 0 },
        styles: { body: { padding: 16 } },
      }}
      showToolbar={false}
      size="small"
      columns={columns}
      pagination={{ defaultPageSize: 5, simple: true, showSizeChanger: false }}
      tableRef={tableRef}
      formRef={formRef}
      queryFormProps={{ isSpace: true, submitter: { style: { marginBottom: 0 } } }}
      formItems={formItems}
      request={async (params, requestType) => {
        await awaitTime(500);
        const originData: DataType[] = Mock.mock({
          'list|25': [{ 'key|+1': 1, name: '@cname', 'age|10-30': 10 }],
        }).list;
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
      rowSelection={rowSelection as TableRowSelection<DataType>}
    />
  );
};

export default MyTable;
