import Mock from 'better-mock';
import type { LFormItemTransferActionRef } from 'lighting-design';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useRef } from 'react';

const transferMockData: any[] = Mock.mock({ 'list|20': [{ value: '@id', label: '@city' }] }).list;

export default () => {
  const actionRef = useRef<LFormItemTransferActionRef>();

  return (
    <LForm
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        actionRef={actionRef}
        block={false}
        wrapperWidth="auto"
        required
        pagination
        label="穿梭框"
        name="transfer"
        request={async (info) => {
          console.log('page-pageSize-info ', info);
          await sleep();
          return {
            list: transferMockData,
            total: transferMockData.length,
          };
        }}
      />
      <LFormItemTransfer
        actionRef={actionRef}
        required
        pagination
        label="穿梭框"
        name="transfer2"
        request={async (info) => {
          console.log('page-pageSize-info ', info);
          await sleep();
          return {
            list: transferMockData,
            total: transferMockData.length,
          };
        }}
      />
    </LForm>
  );
};
