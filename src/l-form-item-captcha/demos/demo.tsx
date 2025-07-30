import { useBoolean } from 'ahooks';
import { LForm, LFormItemCaptcha, type LCaptchaButtonActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useRef } from 'react';

type FieldType = {
  captcha1?: string;
  captcha2?: string;
  captcha3?: string;
  captcha4?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  const [loading, { setFalse, setTrue }] = useBoolean(false);
  const actionRef = useRef<LCaptchaButtonActionRef>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <LForm<FieldType>
      labelWidth={100}
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
      form={form}
      onFinish={async (values) => {
        console.log('===onFinish===', values);
        await sleep(2000);
      }}
    >
      <LFormItemCaptcha
        cacheKey="__LFormItemCaptcha__1"
        request={async () => {
          await sleep();
        }}
        name="captcha1"
        label="request"
      />
      <LFormItemCaptcha
        type="inline"
        cacheKey="__LFormItemCaptcha__3"
        request={async () => {
          await sleep();
        }}
        name="captcha3"
        label="inline"
      />
      <LFormItemCaptcha
        type="primary"
        cacheKey="__LFormItemCaptcha__4"
        request={async () => {
          await sleep();
        }}
        name="captcha4"
        label="primary"
      />
      <LFormItemCaptcha
        cacheKey="__LFormItemCaptcha__2"
        name="captcha2"
        label="手动"
        inputProps={{
          ref: inputRef,
        }}
        captchaButtonProps={{
          actionRef,
          loading,
          second: 6,
          onClick: async () => {
            setTrue();
            await sleep();
            setFalse();
            actionRef.current?.start();
            inputRef.current?.focus();
          },
        }}
      />
    </LForm>
  );
};

export default App;
