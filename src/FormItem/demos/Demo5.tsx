import { Input } from 'antd';
import { LForm, LFormItem } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      requiredMark={false}
      labelWidth="auto"
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
      // onFinishFailed={({ values, errorFields, outOfDate }) => {
      //   console.log('onFinishFailed', values, errorFields, outOfDate);
      // }}
      // onFieldsChange={(changedFields, allFields) => {
      //   console.log('onFieldsChange', changedFields, allFields);
      // }}
      onValuesChange={(
        currentName: string,
        currentValue: any,
        allValues: Record<string, any>,
      ) => {
        console.log('currentName', currentName);
        console.log('currentValue', currentValue);
        console.log('allValues', allValues);
      }}
    >
      <LFormItem
        label="修改必填样式1"
        name="l-name1"
        required
        contentProps={{
          placeholder: '输入姓名XXX',
        }}
        // getValueProps={() => ({ placeholder: '输入姓名XXX' })}
        // getValueFromEvent={(...args: any[]) => {
        //   console.log('args', args);
        //   return args;
        // }}
      >
        <Input />
      </LFormItem>
      <LFormItem label="修改必填样式2" name="l-name2" required>
        <Input placeholder="输入姓名XXX" />
      </LFormItem>
    </LForm>
  );
};

export default Demo5;
