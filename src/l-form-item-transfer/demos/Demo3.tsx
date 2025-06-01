import { Button } from 'antd';
import Mock from 'better-mock';
import type { LFormItemTransferActionRef } from 'lighting-design';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/test';
import { useRef } from 'react';

const transferMockData: any[] = Mock.mock({ 'list|20': [{ key: '@id', title: '@city' }] }).list;

const initialTargetKeys = transferMockData.filter((item) => Number(item.key) <= 1).map((item) => item.key);

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
        actionRef={actionRef}
        contentAfter={false}
        contentInline={false}
        transferProps={{ listStyle: { flex: 'auto' } }}
        required
        // pagination

        pagination={{
          simple: false,
          showSizeChanger: true,
          showLessItems: true,
        }}
        label="穿梭框"
        name="transfer"
        request={async (info) => {
          console.log('page-pageSize-info ', info);
          await awaitTime(500, 1000);
          return {
            data: transferMockData,
            total: transferMockData.length,
          };
        }}
      />
      <Button
        onClick={() => {
          console.log('==actionRef====>', actionRef.current);
        }}
      >
        获取
      </Button>
    </LForm>
  );
};
