import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCascader, LFormItemSelect } from 'lighting-design';
import { sleep } from '../../test';
import china_city from './china_city.json';

const Index = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);
  return (
    <LForm form={form} submitter={false}>
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />
      <LFormItemCascader
        label="级联选择"
        name="cascader2"
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        required
        refreshDeps={[select1Val]}
        disabled={!select1Val}
        request={async () => {
          if (!select1Val) return [];
          await sleep();
          return china_city;
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
