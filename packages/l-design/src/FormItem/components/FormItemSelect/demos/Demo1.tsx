import { Form } from 'antd';
import { LForm, LFormItemSelect } from 'lighting-design';

const Index = () => {
  const [form] = Form.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        // request={async (params) => {
        //   console.log(' params', params);
        //   // if (!params) return [];
        //   return [
        //     { label: 'open', value: 'open' },
        //     { label: 'closed', value: 'closed' },
        //     { label: 'processing', value: 'processing' },
        //   ];
        // }}
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
      <LFormItemSelect
        label="select2"
        name="select2"
        required
        // request={async (params) => {
        //   console.log(' params', params);
        //   // if (!params) return [];
        //   return [
        //     { label: 'open', value: 'open' },
        //     { label: 'closed', value: 'closed' },
        //     { label: 'processing', value: 'processing' },
        //   ];
        // }}
        all
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
    </LForm>
  );
};
export default Index;
