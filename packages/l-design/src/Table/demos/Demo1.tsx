import { Form } from 'antd';
import BaseTable from '../components/BaseTable';

const Demo1 = () => {
  const [form] = Form.useForm();
  return (
    <>
      <BaseTable />
    </>
  );
};

export default Demo1;
