import { Button, message, type ButtonProps } from 'antd';
import type { LTableActionRef } from 'lighting-design';
import { LDrawerForm, LForm, LFormItemInput, LFormItemRadio, LFormItemSelect } from 'lighting-design';
import type { FC } from 'react';
import { sleep } from '../../../test';

type TypeProps = {
  actionRef: React.MutableRefObject<LTableActionRef | undefined>;
} & ButtonProps;

const SDrawerEditButton: FC<TypeProps> = ({ actionRef, ...restProps }) => {
  const [form] = LForm.useForm();

  return (
    <LDrawerForm
      labelWidth={100}
      form={form}
      title={'Drawer编辑'}
      onFinish={async (values) => {
        await sleep(); // 发起请求
        message.success('编辑成功!');
        actionRef.current?.onSearch();
        return true;
      }}
      trigger={
        <Button type="primary" {...restProps}>
          Drawer编辑
        </Button>
      }
      afterOpen={() => {
        form.setFieldsValue({
          input: '法外狂徒',
          select: '1',
          radio: 'a',
        });
      }}
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
export default SDrawerEditButton;
