import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCascader } from 'lighting-design';
import { awaitTime } from '../../_test';
import china_city from './china_city.json';
const options: any[] = china_city;

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemCascader
        label="级联选择"
        name="cascader1"
        required
        request={async () => {
          const result = await awaitTime(options);
          if (result.success) {
            return result.data;
          }
        }}
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
      />
      <LFormItemCascader
        label="级联选择"
        name="cascader2"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        required
        request={async () => {
          const result = await awaitTime(options);
          if (result.success) {
            return result.data;
          }
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
