import Mock from 'better-mock';
import { LForm, LFormItemTransfer } from 'lighting-design';

const transferMockData: any[] = Mock.mock({ 'list|15': [{ value: '@id', label: '@city' }] }).list;

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
        fieldNames={{ label: 'label', value: 'value' }}
        required
        options={transferMockData}
        label="穿梭框"
        name="transfer"
      />
    </LForm>
  );
};
