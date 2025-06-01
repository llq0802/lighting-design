import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Button, message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';
import { awaitTime } from 'lighting-design/test';

const MyAntdModal = NiceModal.create(({ name }: { name: string }) => {
  const modal = useModal();
  const [form] = LForm.useForm();
  // console.log('==modal====>', modal);

  return (
    // <Modal
    //   title="Hello Antd"
    //   open={modal.visible}
    //   onOk={() => {
    //     modal.hide();
    //     modal.resolve('resolve');
    //   }}
    //   onCancel={() => {
    //     modal.hide();
    //     modal.reject('reject');
    //   }}
    //   // destroyOnClose
    //   // afterClose={() => modal.remove()}
    // >
    //   Hello {name}
    // </Modal>

    <LModalForm
      open={modal.visible}
      form={form}
      title="弹窗"
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
        await awaitTime();
        message.success('提交成功');
        modal.resolve('resolve');
        modal.hide();
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
    </LModalForm>
  );
});

// NiceModal.register('my-antd-modal', MyAntdModal);

export default function App() {
  const modal = useModal(MyAntdModal);
  // const modal = useModal('my-antd-modal-2');

  const showAntdModal = () => {
    // Show a modal with arguments passed to the component as props
    // NiceModal.show(MyAntdModal, { name: 'Nate' }).then(() => {
    //   console.log('== ====>');
    // });

    NiceModal.show(MyAntdModal, { name: '你好' })
      .then((res) => {
        console.log('==res====>', res);
      })
      .catch((err) => {
        console.log('==err====>', err);
      });
  };

  return (
    <NiceModal.Provider>
      <h1>Nice Modal Examples</h1>
      <div className="demo-buttons">
        <Button onClick={showAntdModal}>Antd Modal</Button>
        {/* <MyAntdModal id="my-antd-modal-2" name="刘德华"></MyAntdModal> */}
      </div>
    </NiceModal.Provider>
  );
}
