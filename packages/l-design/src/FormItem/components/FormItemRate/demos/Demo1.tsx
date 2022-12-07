import { Button, Form } from 'antd';
import { LFormItemInput, LFormItemRate } from 'lighting-design';

const Index = () => {
  const [form] = Form.useForm();

  return (
    <Form
      name="LFormItemSelect"
      form={form}
      onValuesChange={(e) => {
        console.log(e);
      }}
    >
      <LFormItemInput
        name="userName"
        label="名字"
        required
        tooltip="禁止空格"
        disabledWhiteSpace
        alignItems="end"
        inputProps={{ placeholder: '请输入名字' }}
      />
      <LFormItemRate
        label="评分"
        name="rate"
        initialValue={3.5}
        disabled
        rateProps={{
          allowHalf: true,
        }}
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
export default Index;
