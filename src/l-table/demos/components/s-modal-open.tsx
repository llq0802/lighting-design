import { message } from 'antd';
import {
  LForm,
  LFormItemInput,
  LFormItemRadio,
  LFormItemSelect,
  LModalForm,
  type LTableActionRef,
} from 'lighting-design';
import { useShow, type UseShowInstanceRef } from 'rc-use-hooks';
import type { FC } from 'react';
import { useEffect } from 'react';
import { sleep } from '../../../test';

type PropsType = {
  actionRef: React.MutableRefObject<LTableActionRef | undefined>;
  modalRef: UseShowInstanceRef;
  [key: string]: any;
};

const SModal: FC<PropsType> = ({ modalRef, actionRef, ...restProps }) => {
  const { showRecord, open, updateOpen } = useShow(modalRef);
  const [form] = LForm.useForm();

  const isAdd = !showRecord || Object.keys(showRecord)?.length === 0;

  useEffect(() => {
    if (open && form && !isAdd) {
      form.setFieldsValue(showRecord);
    }
  }, [open, form, isAdd]);

  return (
    <LModalForm
      labelWidth={100}
      form={form}
      title={!isAdd ? '修改' : '新增'}
      onFinish={async (values) => {
        await sleep();
        message.success('操作成功!');
        actionRef.current?.onSearch();
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
        options={[
          { label: 'AA', value: 'a' },
          { label: 'BB', value: 'b' },
          { label: 'CC', value: 'c' },
        ]}
      />
    </LModalForm>
  );
};
export default SModal;
