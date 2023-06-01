import { message } from 'antd';
import type { LTableInstance, UseShowInstance } from 'lighting-design';
import {
  LForm,
  LFormItemInput,
  LFormItemRadio,
  LFormItemSelect,
  LModalForm,
  useShow,
} from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { awaitTime } from '../../../_test';

type TypeProps = {
  tableRef: React.MutableRefObject<LTableInstance | undefined>;
  modalRef: React.MutableRefObject<UseShowInstance | undefined>;
  [key: string]: any;
};

const Demo: FC<TypeProps> = ({ modalRef, tableRef, ...restProps }) => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState(false);
  const { parentData } = useShow(modalRef, {
    onShow: () => {
      setOpen(true);
    },
  });
  useEffect(() => {
    if (open && form) {
      form.setFieldsValue(parentData);
      //  form.resetFields(); // 和 modalProps.destroyOnClose=true 效果一样
    }
  }, [open, form]);

  const isAdd = Object.keys(parentData ?? {})?.length;
  return (
    <LModalForm
      // 受控绑定 open
      open={open}
      onOpenChange={setOpen}
      labelWidth={84}
      isDraggable
      isEnterSubmit={false}
      form={form}
      title={!isAdd ? '修改' : '新增'}
      onFinish={async (values) => {
        await awaitTime(); // 发起请求
        console.log('onFinish-values ', values);
        message.success('修改成功!');
        tableRef.current?.onReload();
        return true;
      }}
      {...restProps}
    >
      <LFormItemInput name="input" required label="输入框" />
      <LFormItemRadio
        label="单选"
        name="radio"
        required
        request={async () => {
          await awaitTime(); // 发起请求
          return [
            { label: 'AA', value: 'a' },
            { label: 'BB', value: 'b' },
            { label: 'CC', value: 'c' },
          ];
        }}
      />
      <LFormItemSelect
        label="下拉框"
        name="select"
        required
        options={[
          { label: '有效', value: '1' },
          { label: '无效', value: '0' },
        ]}
      />
    </LModalForm>
  );
};
export default Demo;
