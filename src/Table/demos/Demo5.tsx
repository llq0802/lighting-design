import type { FormInstance } from 'antd';
import type {
  LTableInstance,
  LTableRequestParams,
  LTableRequestType,
} from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const Demo5: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const formItems = [
    <LFormItemInput key="0" name="input4" label="输入框1" />,
    <LFormItemInput key="1" name="input5" label="输入框2" />,
    <LFormItemInput key="2" name="input6" label="输入框3" />,
    <LFormItemInput key="3" name="input7" label="输入框4" />,
    <LFormItemInput key="4" name="input8" label="输入框5" />,
  ];

  const requestGetUserList = async (
    params: LTableRequestParams,
    requestType: LTableRequestType,
  ) => {
    // console.log('==params==', params);
    // console.log('==requestType==', requestType);
    const res: Record<string, any> = await apiGetUserList();
    return {
      success: true,
      data: res.data,
      total: res.total,
    };
  };

  return (
    <>
      <LTable
        // loading={{
        //   spinning: true,
        //   size: 'large',
        // }}
        sticky
        rowKey="key"
        tableRef={tableRef}
        queryFormProps={{
          showColsNumber: 3,
          isEnterSubmit: false,
        }}
        tableCardProps={{
          style: {
            borderRadius: 0,
          },
        }}
        showToolbar={false}
        className="my-lightd-row-111"
        rowClassName="my-lightd-row-999"
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        defaultRequestParams={{ age: 25 }}
        onChange={() => {
          console.log(' onChange');
        }}
        request={requestGetUserList}
      />
    </>
  );
};

export default Demo5;
