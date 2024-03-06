import { Empty } from 'antd';
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
      columns={columns}
      request={request}
      showHorizontalBorder={false}
      tableCardProps={{ style: { backgroundColor: '#152a52' } }}
      headerCellStyle={{
        backgroundColor: '#209cee',
        border: 'none',
        color: '#f6f6f6',
      }}
      toolbarActionConfig={{ style: { color: '#fff' } }}
      // headerRowStyle={{
      //   backgroundColor: 'red',
      // }}
      rowStyle={{
        color: '#f9cc9d',
      }}
      cellStyle={{
        backgroundColor: '#1677ff',
        border: 'none',
      }}
      emptyRender={() => <Empty />}
    />
  );
};

export default Demo22;
