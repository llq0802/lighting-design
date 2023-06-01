import {
  LForm,
  LFormItemInput,
  LFormItemRadio,
  LFormItemSelect,
  LModalForm,
  useShow,
} from 'lighting-design';
import { useState } from 'react';
import { awaitTime } from '../../../_test';

export default function AddEditModal({ funcRef, tableRef }) {
  const [form] = LForm.useForm();

  const [open, setOpen] = useState(false);

  const { parentData } = useShow(funcRef, {
    onShow: () => {
      setOpen(true);
    },
  });

  return (
    <LModalForm
      labelWidth={84}
      name="update-modal-form"
      isDraggable
      isEnterSubmit={false}
      open={open}
      form={form}
      title={parentData ? '修改' : '新增'}
      onFinish={async (values) => {
        await awaitTime(); // 发起请求
        console.log('onFinish-values ', values);
        return true;
      }}
      {...restProps}
    >
      <LFormItemInput name="input" required label="输入框" />
      <LFormItemRadio
        label="单选"
        name="radio"
        required
        options={[
          { label: 'AA', value: 'a' },
          { label: 'BB', value: 'b' },
          { label: 'CC', value: 'c' },
        ]}
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
}
