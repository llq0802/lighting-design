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
      labelCol={{ flex: '90px' }}
      name="LSliderVerify"
      labelWidth={90}
      onFinish={async (values) => {
        console.log('values', values);
      }}
    >
      <LFormItemInput required name="username" label="用户名" />
      <LFormItemPassword required name="password" label="密码" />
      <LFormItem
        name="isVerify1"
        label="滑块验证1"
        rules={[{ required: true, message: '请按住滑块，拖动到最右边' }]}
      >
        <LSliderVerify
          width={500}
          style={{ borderRadius: 6 }}
          barStyle={{ borderRadius: 6 }}
          tipsStyle={{}}
        />
      </LFormItem>
      <LFormItem
        name="isVerify2"
        label="滑块验证2"
        rules={[{ required: true, message: '请按住滑块，拖动到最右边' }]}
      >
        <LSliderVerify style={{ borderRadius: 16 }} barStyle={{ borderRadius: 16 }} />
      </LFormItem>
    </LForm>
  );
};
export default Demo2;
