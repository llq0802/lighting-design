import { useRequest } from 'ahooks';
import { Skeleton, type FormInstance } from 'antd';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
  <LFormItemInput key="3" name="input7" label="输入框4" />,
  <LFormItemInput key="4" name="input8" label="输入框5" />,
];

const Demo16: FC = () => {
  const formRef = useRef<FormInstance>();

  const { loading, data: dataSource } = useRequest(apiGetUserList, {
    defaultParams: [10_000],
  });

  return (
    <>
      {loading ? (
        <Skeleton
          active
          title={{ width: '100%' }}
          paragraph={{ rows: 11, width: '100%' }}
        />
      ) : (
        <LTable
          autoRequest={false}
          showToolbar={false}
          formItems={formItems}
          formRef={formRef}
          columns={columns}
          dataSource={dataSource?.data}
        />
      )}
    </>
  );
};

export default Demo16;
