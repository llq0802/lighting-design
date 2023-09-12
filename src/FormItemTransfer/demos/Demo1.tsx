import type { LFormItemTransferActionRef } from 'lighting-design';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useEffect, useRef } from 'react';

const transferMockData: any[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i.toString(),
  label: `content--${i}`,
}));

const initialTargetKeys = transferMockData
  .filter((item) => Number(item.value) <= 1)
  .map((item) => item.value);

// const filterOption = (inputValue: string, option: RecordType) =>
//   option.description.indexOf(inputValue) > -1;

export default () => {
  const actionRef = useRef<LFormItemTransferActionRef>();

  useEffect(() => {
    console.log('actionRef.current', actionRef.current);
  }, []);

  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}

      // onValuesChange={(
      //   currentName: string,
      //   currentValue: any,
      //   allValues: Record<string, any>,
      // ) => {
      //   console.log('currentName', currentName);
      //   console.log('currentValue', currentValue);
      //   console.log('allValues', allValues);
      // }}
    >
      <LFormItemTransfer
        required
        actionRef={actionRef}
        request={async (page, pageSize) => {
          console.log(' page-pageSize ', page, pageSize);
          await awaitTime();
          return {
            data: transferMockData,
            total: transferMockData.length,
          };
        }}
        label="穿梭框"
        name="transfer"
        limitMaxCount={4}
        // transferProps={{}}
      />
    </LForm>
  );
};
