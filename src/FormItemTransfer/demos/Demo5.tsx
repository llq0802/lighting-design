import type { LFormItemTransferActionRef } from 'lighting-design';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useRef } from 'react';

const transferMockData: any[] = Array.from({ length: 10 }).map((_, i) => ({
  key: i.toString(),
  title: `李岚清-吴彦祖-陈冠希-彭于晏-${i}`,
}));

const initialTargetKeys = transferMockData
  .filter((item) => Number(item.value) <= 1)
  .map((item) => item.value);

const filterOption = (inputValue: string, option: RecordType) =>
  option.title.indexOf(inputValue) > -1;

export default () => {
  const actionRef = useRef<LFormItemTransferActionRef>();

  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        limitMaxCount={3}
        label="穿梭框"
        name="transfer"
        required
        actionRef={actionRef}
        request={async ({ current, pageSize }) => {
          await awaitTime();
          return {
            data: transferMockData,
            total: transferMockData.length,
          };
        }}
        transferProps={{
          listStyle: {
            width: 300,
          },
        }}
      />
    </LForm>
  );
};
