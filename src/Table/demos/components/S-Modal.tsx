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

export default function AddEditModal({ tableRef }) {
  const [form] = LForm.useForm();

  const [open, setOpen] = useState(false);

  const {} = useShow(tableRef, {
    onShow() {},
  });

  return (
    <LModalForm
      labelWidth={84}
      name="update-modal-form"
      isDraggable
      isEnterSubmit={false}
      open={open}
      form={form}
      title={data ? '修改' : '新增'}
      onFinish={async (values) => {
        await awaitTime(); // 发起请求
        console.log('onFinish-values ', values);
        onChange(); // 响应成功后，刷新表格
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
