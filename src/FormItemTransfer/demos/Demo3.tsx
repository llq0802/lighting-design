import type { LFormItemTransferActionRef } from 'lighting-design';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useRef } from 'react';

const transferMockData: any[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content--${i}`,
}));

const initialTargetKeys = transferMockData
  .filter((item) => Number(item.key) <= 1)
  .map((item) => item.key);

export default () => {
  const actionRef = useRef<LFormItemTransferActionRef>();

  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      initialValues={{
        transfer: initialTargetKeys,
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        contentAfter={false}
        contentInline={false}
        transferProps={{
          listStyle: {
            flex: 'auto',
          },
        }}
        required
        pagination
        label="穿梭框"
        name="transfer"
        actionRef={actionRef}
        request={async ({ current, pageSize }) => {
          console.log(' page-pageSize ', current, pageSize);
          await awaitTime();
          return {
            data: transferMockData,
            total: transferMockData.length,
          };
        }}
      />
    </LForm>
  );
};
