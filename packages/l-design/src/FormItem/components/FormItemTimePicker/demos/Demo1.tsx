import { Button, Form } from 'antd';
import { LFormItemColor, LFormItemTimePicker } from 'lighting-design';
import moment from 'moment';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />

      <LFormItemTimePicker
        label="时间选择"
        name="date1"
        format="HH:mm"
        required
        initialValue={'15:08'}
        disabled
      />
      <LFormItemTimePicker
        label="时间选择2"
        name="date2"
        format="HH:mm:ss"
        initialValue={[moment('15:08:23', 'HH:mm:ss'), moment('15:08:23', 'HH:mm:ss')]}
        required
        rangePicker
      />

      <Button
        onClick={() => {
          form.validateFields().then((res) => {
            console.log(' res ', res);
          });
        }}
      >
        验证
      </Button>
      <Button
        onClick={() => {
          console.log(' form.getFieldsValue()  ', form.getFieldsValue());
        }}
      >
        获取
      </Button>
    </Form>
  );
};
export default Demo1;
