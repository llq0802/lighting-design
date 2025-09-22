import { useUpdateEffect } from 'ahooks';
import { Button, Space, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import type { UseShowInstance, UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useRef } from 'react';
import { sleep } from '../../test';

const MyModal = ({ modalRef }: { modalRef: UseShowInstanceRef }) => {
  const [form] = LForm.useForm();

  const { showRecord, open, updateOpen } = useShow<{
    title: string;
    name: string;
  }>(modalRef, {
    onShow(record) {
      console.log('==onShow====>', record);
    },
    onHide(record) {
      console.log('==onHide====>', record);
    },
  });
  useUpdateEffect(() => {
    if (open && form && showRecord?.name) {
      form.setFieldValue('name', showRecord?.name);
    }
  }, [open]);
  return (
    <div>
      <LModalForm
        open={open}
        onOpenChange={updateOpen}
        form={form}
        title={showRecord?.title}
        onFinish={async (values) => {
          await sleep();
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </div>
  );
};

export default () => {
  const modalRef = useRef<
    UseShowInstance<{
      title: string;
      name: string;
    }>
  >();
  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          modalRef.current?.onShow({ title: '新增-标题', name: '' });
        }}
      >
        新增
      </Button>
      <Button
        onClick={() => {
          modalRef.current?.onShow({ title: '编辑-标题', name: '吴彦祖' });
        }}
      >
        编辑
      </Button>
      <MyModal modalRef={modalRef} />
    </Space>
  );
};
