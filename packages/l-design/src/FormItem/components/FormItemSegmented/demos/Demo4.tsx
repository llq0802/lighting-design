import { LoadingOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { LForm, LFormItemSegmented, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = Form.useForm();

  return (
    <LForm
      name="LFormItemSelect3"
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
      <LFormItemSegmented
        // debounceTime={200} 防抖更新
        dependencies={['select1']}
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        notDependRender={() => '请先选择select1'}
        request={async (select1) => {
          console.log('select1 ', select1);
          let data: Record<string, any>[] = [];
          if (select1 === 'a') {
            data = [
              { label: 'A1', value: 'a1' },
              { label: 'B1', value: 'b1' },
              { label: 'C1', value: 'c1' },
            ];
          }
          if (select1 === 'b') {
            data = [
              { label: 'A2', value: 'a2' },
              { label: 'B2', value: 'b2' },
              { label: 'C2', value: 'c2' },
            ];
          }
          if (select1 === 'c') {
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
export default Index;
