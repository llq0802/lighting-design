import { message } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LForm,
  LFormItemInput,
  LFormItemRadio,
  LFormItemSelect,
  LModalForm,
} from 'lighting-design';
import { useShow, type UseShowInstanceRef } from 'rc-use-hooks';
import type { FC } from 'react';
import { useEffect } from 'react';
import { awaitTime } from '../../../_test';

type TypeProps = {
  tableRef: React.MutableRefObject<LTableInstance | undefined>;
  modalRef: UseShowInstanceRef;
  [key: string]: any;
};

const SModal: FC<TypeProps> = ({ modalRef, tableRef, ...restProps }) => {
  const { showRecord, open, updateOpen } = useShow(modalRef);
  const [form] = LForm.useForm();

  const isAdd = !showRecord || Object.keys(showRecord)?.length === 0;

  useEffect(() => {
    if (open && form && !isAdd) {
      form.setFieldsValue(showRecord);
      //  form.resetFields(); // 和 destroyOnClose=true 效果一样
    }
  }, [open, form, isAdd]);

  return (
    <LModalForm
      modalTop="20vh"
      destroyOnClose
      open={open}
      onOpenChange={updateOpen}
      labelWidth={84}
      isDraggable
      isEnterSubmit={false}
      form={form}
      title={!isAdd ? '修改' : '新增'}
      onFinish={async (values) => {
        await awaitTime(); // 发起请求
        message.success('操作成功!');
        tableRef.current?.onSearch();
        return true;
      }}
      {...restProps}
    >
      <LFormItemInput name="input" required label="输入框" />
      <LFormItemSelect
        label="下拉框"
        name="select"
        required
        options={[
          { label: '有效', value: '1' },
          { label: '无效', value: '0' },
        ]}
      />
      <LFormItemRadio
        label="单选"
        name="radio"
        required
        request={async () => {
          await awaitTime(isAdd ? 400 : 0); // 发起请求
          return [
            { label: 'AA', value: 'a' },
            { label: 'BB', value: 'b' },
            { label: 'CC', value: 'c' },
          ];
        }}
      />
    </LModalForm>
  );
};
export default SModal;
