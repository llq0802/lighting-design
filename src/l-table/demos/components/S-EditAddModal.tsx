import { LForm, LFormItemInput, LFormItemRadio, LFormItemSelect, LModalForm } from 'lighting-design';
import { useEffect } from 'react';
import { sleep } from '../../../test';

export default function AddEditModal({ data, onChange, open, ...restProps }) {
  const [form] = LForm.useForm();

  useEffect(() => {
    if (open && data) {
      form.setFieldsValue(data);
      //   form.resetFields(); // 和 modalProps.destroyOnClose=true 效果一样
    }
  }, [open, data, form]);

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
        await sleep(); // 发起请求
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
