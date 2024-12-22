import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput, LFormItemRadio } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';

const MyAntdDrawer = NiceModal.create(({ title }: { title: string }) => {
  const modal = useModal();
  const [form] = LForm.useForm();

  return (
    <LDrawerForm
      open={modal.visible}
      form={form}
      title={title}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
        await awaitTime();
        message.success('提交成功');
        modal.resolve('resolve');
        modal.hide();
        // 与 nice moda l结合后 返回 true 自动关闭将失效
      }}
      onCancel={() => {
        modal.reject('reject');
        modal.hide();
      }}
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
    </LDrawerForm>
  );
});

export default function App() {
  const modal = useModal(MyAntdDrawer);

  const showAntdModal = () => {
    modal
      .show({ title: '你好' })
      .then((res) => {
        console.log('==res====>', res);
      })
      .catch((err) => {
        console.log('==err====>', err);
      });
  };

  return (
    <div>
      <NiceModal.Provider>
        <h1>Nice Modal Examples</h1>
        <Button type="primary" onClick={showAntdModal}>
          打开
        </Button>
      </NiceModal.Provider>
    </div>
  );
}
