import { Button, Space, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import type { UseShowInstance, UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useRef } from 'react';
import { awaitTime } from '../../test';

const MyDrawer = ({ deawerRef }: { deawerRef: UseShowInstanceRef }) => {
  const [form] = LForm.useForm();
  const { showRecord, open, updateOpen } = useShow(deawerRef, {
    onShow(record) {
      console.log('==onShow====>', record);
      form.setFieldValue('name', record.name);
    },
    onHide(record) {
      console.log('==onHide====>', record);
      form.setFieldValue('name', void 0);
    },
  });
  return (
    <div>
      <LDrawerForm
        open={open}
        onOpenChange={updateOpen}
        form={form}
        title={showRecord?.title}
        onFinish={async (values) => {
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LDrawerForm>
    </div>
  );
};

export default () => {
  const deawerRef = useRef<UseShowInstance>();
  return (
    <Space>
      <Button
        type="primary"
        onClick={() => {
          deawerRef.current?.onShow({ title: '新增-标题', name: '吴彦祖' });
        }}
      >
        显示
      </Button>
      <Button
        onClick={() => {
          deawerRef.current?.onHide({});
        }}
      >
        隐藏
      </Button>
      <MyDrawer deawerRef={deawerRef} />
    </Space>
  );
};
