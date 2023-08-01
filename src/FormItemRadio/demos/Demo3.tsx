import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemRadio, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../_test';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
      onFinish={(values) => {
        console.log('values', values);
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
      <LFormItemSelect
        label="select3"
        name="select3"
        required
        options={[
          { label: 'A1', value: 'a1' },
          { label: 'B2', value: 'b2' },
          { label: 'C3', value: 'c3' },
        ]}
      />
      <LFormItemRadio
        debounceTime={200}
        dependencies={['select1']}
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        notDependRender={<span>请先选择select1</span>}
        request={async (select1) => {
          console.log('select1', select1);
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
export default Index;
