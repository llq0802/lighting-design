import { LForm, LFormItemInput, LFormItemSwitch } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      submitter={{
        isEnterSubmit: true,
        position: 'center',
        onReset(event) {
          console.log('onReset');
        },
        onSubmit: (vals) => {
          console.log('onSubmit', vals);
        },
      }}
      labelWidth={100}
      form={form}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep();
      }}
    >
      <LFormItemInput
        name="input1"
        label="姓名1"
        // getValueFromEvent={(e) => {
        //   // 设置如何将 event 的值转换成字段值, 只在用户操作有效
        //   console.log('===getValueFromEvent-1===>', e);
        //   return e.target.value;
        // }}
        // normalize={(v, pv, s) => {
        //   // 组件获取值后进行转换，再放入 Form 中。不支持异步, 只在用户操作有效
        //   console.log('===normalize-2===>', v);
        //   return v;
        // }}
        // getValueProps={(value) => {
        //   //为子元素添加额外的属性, 每次初始化或者重新渲染都有效
        //   console.log('===getValueProps-3===>', value);
        //   return { value };
        // }}
      />
      <LFormItemSwitch name="input2" label="姓名2" dependencies={['input1']} />
    </LForm>
  );
};

export default App;
