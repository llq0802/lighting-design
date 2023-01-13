import { LoadingOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { LForm, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Index = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        request={async () => {
          const result = await awaitTime([
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ]);
          if (result.success) {
            return result.data;
          }
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
          const result = await awaitTime(
            [
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'Resolving', value: 'processing' },
            ],
            3000,
          );
          if (result.success) {
            return result.data;
          }
        }}
        all
      />
    </LForm>
  );
};
export default Index;
