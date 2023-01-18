import { LForm, LFormItemNumber } from 'lighting-design';
import renderFieldWithPopover from './renderFieldWithPopover';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemNumber" form={form} submitter={{ buttonAlign: 'center' }}>
      <LFormItemNumber name="number" label="金额1" required contentAfter={<div>$</div>} />

      <LFormItemNumber
        label="金额2"
        numberProps={{
          prefix: '￥',
        }}
      />

      <LFormItemNumber
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({ content: '该方案可用于所有表单项' })}
      />
    </LForm>
  );
};
export default Demo;
