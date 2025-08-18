import { message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio } from 'lighting-design';

const Demo7 = () => {
  return (
    <LForm
      name="Demo70"
      onFinish={(values) => {
        console.log('onFinish-values ', values);
      }}
      onValuesChange={(currentName: string, currentValue: any, allValues: Record<string, any>) => {
        console.log('currentName', currentName);
        console.log('currentValue', currentValue);
        console.log('allValues', allValues);

        if (currentName === 'radio') {
          if (currentValue === '1') message.info('你选择了男性');
          // 在此执行一些副作用的操作
          return;
        }

        if (currentName === 'name') {
          // 在此执行一些副作用的操作
          return;
        }
      }}
    >
      <LFormItemInput name="name" required label="姓名" />
      <LFormItemRadio
        name="radio"
        label="性别"
        options={[
          { label: '男', value: '1' },
          { label: '女', value: '0' },
        ]}
      />
    </LForm>
  );
};

export default Demo7;
