import { Button, Form } from 'antd';
import { LFormItemCheckbox, LFormItemInput } from 'lighting-design';

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
      <LFormItemCheckbox
        label="选择"
        name="select"
        beforeAll={{
          label: '全选',
          value: 'all',
          onChange(e) {
            console.log(e);
          },
        }}
        required
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        checkboxProps={{
          onChange(checkedValue) {
            console.log(checkedValue);
          },
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
