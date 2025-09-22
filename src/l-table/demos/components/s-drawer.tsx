import { message } from 'antd';
import type { LTableActionRef } from 'lighting-design';
import { LDrawerForm, LForm, LFormItemInput, LFormItemRadio, LFormItemSelect } from 'lighting-design';
import type { UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import type { FC } from 'react';
import { useEffect } from 'react';
import { sleep } from '../../../test';

type TypeProps = {
  actionRef: React.MutableRefObject<LTableActionRef | undefined>;
  drawerRef: UseShowInstanceRef;
  [key: string]: any;
};

const SDrawer: FC<TypeProps> = ({ drawerRef, actionRef, ...restProps }) => {
  const [form] = LForm.useForm();
  const { showRecord, open, updateOpen } = useShow(drawerRef);
  const isAdd = !showRecord || Object.keys(showRecord)?.length === 0;

  useEffect(() => {
    if (open && form && !isAdd) {
      form.setFieldsValue(showRecord);
    }
  }, [open, form, isAdd]);

  return (
    <LDrawerForm
      open={open}
      onOpenChange={updateOpen}
      labelWidth={100}
      form={form}
      title={!isAdd ? '修改' : '新增'}
      onFinish={async (values) => {
        await sleep(); // 发起请求
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
    </LDrawerForm>
  );
};
export default SDrawer;
