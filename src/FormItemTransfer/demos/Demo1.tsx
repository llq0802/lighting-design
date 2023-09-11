import { LForm, LFormItemTransfer } from 'lighting-design';

const mockData: any[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i.toString(),
  label: `content--${i}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.value) <= 1)
  .map((item) => item.value);

export default () => {
  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
      initialValues={{
        transfer: initialTargetKeys,
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
        options={mockData}
        label="穿梭"
        name="transfer"
        limitMaxCount={3}
      />
    </LForm>
  );
};
