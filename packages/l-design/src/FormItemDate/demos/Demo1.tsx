import { Button, Form } from 'antd';
import { LFormItemColor, LFormItemDate } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemColor type="chrome" label="颜色选择" name="color" required />

      <LFormItemDate
        label="日期选择"
        name="date1"
        required
        disabledDateAfter={1}
        dateValueType="string"

        // disabledDateBefore={1}
        // picker="quarter"
      />
      <LFormItemDate label="月份选择" name="date3" required disabledDateBefore={1} picker="month" />
      <LFormItemDate
        label="季度选择"
        name="date2"
        required
        disabledDateAfter={0}
        picker="quarter"
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
