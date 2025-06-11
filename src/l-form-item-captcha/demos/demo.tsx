import { useBoolean } from 'ahooks';
import { LForm, LFormItemCaptcha, type LCaptchaButtonActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useEffect, useRef } from 'react';

type FieldType = {
  input?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  const [loading, { setFalse, setTrue }] = useBoolean(false);
  const actionRef = useRef<LCaptchaButtonActionRef>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    console.log('===inputRef.current==>', inputRef.current);
  }, []);

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
        await sleep(2000);
      }}
    >
      <LFormItemCaptcha
        request={async () => {
          await sleep();
          // return Promise.reject();
        }}
        type="inline"
        cacheKey="__LFormItemCaptcha__"
        name="captcha"
        label="验证码"
      />
    </LForm>
  );
};

export default App;
