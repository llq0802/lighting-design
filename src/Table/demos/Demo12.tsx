import { Switch, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { columns, originData } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
  <LFormItemInput key="3" name="input7" label="输入框4" />,
  <LFormItemInput key="4" name="input8" label="输入框5" />,
];
const publicCardProps = {
  style: {
    borderRadius: 0,
  },
};
const data = originData.slice(6);

const Demo12: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const [fillSpace, setFillSpace] = useState(false);

  return (
    <>
      <div>
        <span>是否占满视口剩余空间：</span>
        <Switch checked={fillSpace} onChange={(b) => setFillSpace(b)} />
      </div>
      <LTable
        queryFormProps={{
          size: 'small',
        }}
        size="small"
        fillSpace={fillSpace}
        rowKey="key"
        tableRef={tableRef}
        tableCardProps={publicCardProps}
        formCardProps={publicCardProps}
        showToolbar={false}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        request={async (params) => {
          console.log('params', params);
          return {
            success: true,
            data,
            total: data?.length,
          };
        }}
      />
    </>
  );
};

export default Demo12;
