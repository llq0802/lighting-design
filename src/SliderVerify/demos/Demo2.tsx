import {
  LForm,
  LFormItem,
  LFormItemInput,
  LFormItemPassword,
  LSliderVerify,
} from 'lighting-design';

const Demo2 = () => {
  return (
    <LForm
      // labelCol={{ flex: '90px' }}
      name="LSliderVerify"
      labelWidth={90}
      submitter={{ buttonAlign: 90 }}
      onFinish={async (values) => {
        console.log('values', values);
      }}
    >
      <LFormItemInput required name="username" label="用户名" />
      <LFormItemPassword required name="password" label="密码" />
      <LFormItem
        name="isVerify"
        label="滑块验证"
        rules={[{ required: true, message: '请按住滑块，拖动到最右边' }]}
      >
        <LSliderVerify />
      </LFormItem>
    </LForm>
  );
};
export default Demo2;
