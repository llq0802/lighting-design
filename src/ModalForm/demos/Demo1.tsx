import { Button, message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';
import { useEffect, useState } from 'react';
import { awaitTime } from '../../_test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  const [initialValues, setInitialValues] = useState({
    name: '刘德华',
  });
  useEffect(() => {
    setTimeout(() => {
      setInitialValues({
        name: '刘德华999',
      });
    }, 1000);
  });
  return (
    <div>
      <LModalForm
        isDraggable
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        initialValues={initialValues}
        isAntdReset={false}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name" required label="输入框" />
        <LFormItemRadio
          label="单选2"
          name="radio"
          initialValue="open"
          required
          request={async () => {
            await awaitTime();
            return [
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'Resolving', value: 'processing' },
            ];
          }}
        />
      </LModalForm>
    </div>
  );
};

export default Demo1;
