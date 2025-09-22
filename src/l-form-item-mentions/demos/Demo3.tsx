import { LoadingOutlined } from '@ant-design/icons';
import betterMock from 'better-mock';
import { LForm, LFormItemMentions } from 'lighting-design';
import { sleep } from '../../test';

const opts1 = betterMock.mock({ 'list|10': [{ label: '@city', value: '@city' }] }).list;

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect2" form={form} labelWidth={80} submitter={{ buttonAlign: 80 }} isAntdReset={false}>
      <LFormItemMentions
        label="select1"
        name="select1"
        required
        request={async () => {
          await sleep();
          return opts1;
        }}
      />
      <LFormItemMentions
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async () => {
          await sleep();
          return opts1;
        }}
      />
    </LForm>
  );
};
export default Demo2;
