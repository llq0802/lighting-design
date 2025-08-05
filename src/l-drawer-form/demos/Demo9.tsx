import { useUpdateEffect } from 'ahooks';
import { Button, Space, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import type { UseShowInstance, UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useRef } from 'react';
import { sleep } from '../../test';

const MyDrawer = ({ deawerRef }: { deawerRef: UseShowInstanceRef }) => {
  const [form] = LForm.useForm();
  const { showRecord, open, updateOpen } = useShow(deawerRef, {
    onShow(record) {
      console.log('==onShow====>', record);
    },
    onHide(record) {
      console.log('==onHide====>');
    },
  });

  useUpdateEffect(() => {
    if (open && form && showRecord?.name) {
      form.setFieldsValue(showRecord);
    }
  }, [open]);

  return (
    <div>
      <LDrawerForm
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
          deawerRef.current?.onShow({ title: '新增-标题', name: '' });
        }}
      >
        新增
      </Button>
      <Button
        onClick={() => {
          deawerRef.current?.onShow({ title: '新增-标题', name: '吴彦祖' });
        }}
      >
        编辑
      </Button>
      <MyDrawer deawerRef={deawerRef} />
    </Space>
  );
};
