import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemSegmented } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
    >
      <LFormItemSegmented
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async (select44) => {
          console.log('select44 ', select44);
          let data: Record<string, any>[] = [];
          if (select44 === 'a') {
            data = [
              { label: 'A1', value: 'a1' },
              { label: 'B1', value: 'b1' },
              { label: 'C1', value: 'c1' },
            ];
          }
          if (select44 === 'b') {
            data = [
              { label: 'A2', value: 'a2' },
              { label: 'B2', value: 'b2' },
              { label: 'C2', value: 'c2' },
            ];
          }
          if (select44 === 'c') {
            data = [
              { label: 'A3', value: 'a3' },
              { label: 'B3', value: 'b3' },
              { label: 'C3', value: 'c3' },
            ];
          }
          const result = await awaitTime(data);
          if (result.success) return result.data;
        }}
      />
    </LForm>
  );
};
export default Demo4;
