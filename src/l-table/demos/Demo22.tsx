import { LTable } from 'lighting-design';
import type { FC } from 'react';
import { columns, originData } from './service';

type PropsType = Parameters<typeof LTable>[0];

const Demo22: FC = () => {
  const request: PropsType['request'] = async (params, requestType) => {
    // console.log('==params==', params);
    // console.log('requestType ', requestType);
    return {
      success: true,
      data: originData,
      total: originData.length,
    };
  };
  return (
    <LTable
      showStripe
      showHover
      toolbarActionConfig={false}
      columns={columns}
      request={request}
      // headerRowStyle={{
      //   backgroundColor: 'red',
      // }}
      // headerCellStyle={{
      //   backgroundColor: 'red',
      // }}
      // rowStyle={{
      //   backgroundColor: 'red',
      // }}
      // cellStyle={{
      //   backgroundColor: 'red',
      //   border: 'none',
      // }}
      // emptyRender={() => <Empty></Empty>}
    />
  );
};

export default Demo22;
