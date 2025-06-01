import { LTable } from 'lighting-design';
import type { FC } from 'react';
import { columns, originData } from './service';

type PropsType = Parameters<typeof LTable>[0];

const TdCell = (props: Record<string, any>) => <td {...props} />;

const Demo21: FC = () => {
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
      rowKey="key"
      toolbarActionConfig={false}
      columns={columns}
      request={request}
      components={{
        body: {
          cell: TdCell,
        },
      }}
    />
  );
};

export default Demo21;
