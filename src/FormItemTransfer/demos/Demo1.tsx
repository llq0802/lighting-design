import { LForm, LFormItemTransfer } from 'lighting-design';

const transferMockData: any[] = Array.from({ length: 10 }).map((_, i) => ({
  key: i.toString(),
  title: `content--${i}`,
}));

export default () => {
  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        options={transferMockData}
        label="穿梭框"
        name="transfer"
      />
    </LForm>
  );
};
