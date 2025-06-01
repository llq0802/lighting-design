import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCascader } from 'lighting-design';
import { awaitTime } from '../../test';
import china_city from './china_city.json';

const options: any[] = china_city;

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
    >
      <LFormItemCascader
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async () => {
          await awaitTime();
          return options;
        }}
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
      />
    </LForm>
  );
};
export default Index;
