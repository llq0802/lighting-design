import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCheckbox, LFormItemSelect } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
    >
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
      <LFormItemCheckbox
        dependencies={['select1']}
        label="select2"
        name="select2"
        required
        spin={{ indicator: <LoadingOutlined style={{ fontSize: 24 }} spin /> }}
        // notDependRender={<span>请先选择select1</span>}
        request={async (select1) => {
          console.log('select1 ', select1);
          let data: Record<string, any>[] = [];
          if (select1 === 'a') {
            data = [{ label: 'A', value: 'a' }];
          }
          if (select1 === 'b') {
            data = [{ label: 'B', value: 'b' }];
          }
          if (select1 === 'c') {
            data = [{ label: 'C', value: 'c' }];
          }
          const result = await awaitTime(data);
          if (result.success) return result.data;
        }}
      />
    </LForm>
  );
};
export default Demo5;
