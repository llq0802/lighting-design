import { LoadingOutlined } from '@ant-design/icons';
import betterMock from 'better-mock';
import { LForm, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../_test';

const opts1 = betterMock.mock({ 'list|10': [{ label: '@city', value: '@id' }] }).list;

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemSelect2"
      form={form}
      labelWidth={80}
      submitter={{ buttonAlign: 80 }}
      isAntdReset={false}
    >
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        request={async () => {
          await awaitTime();
          return opts1;
        }}
      />
      <LFormItemSelect
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async () => {
          await awaitTime();
          return opts1;
        }}
        all
      />
    </LForm>
  );
};
export default Demo2;
