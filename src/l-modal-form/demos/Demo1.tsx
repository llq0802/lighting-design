import { Button, message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';
import { awaitTime } from '../../test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LModalForm
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        initialValues={{
          name: '刘德华1',
        }}
        // isAntdReset={false}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name" required label="输入框" />
        <LFormItemRadio
          label="单选2"
          name="radio"
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
