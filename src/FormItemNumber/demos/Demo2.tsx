import { LForm, LFormItemNumber } from 'lighting-design';
import renderFieldWithPopover from '../../FormItemInput/demos/renderFieldWithPopover';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={{ buttonAlign: 'center' }}>
      <LFormItemNumber
        name="number1"
        label="金额1"
        required
        contentAfter={<div>$</div>}
      />

      <LFormItemNumber
        label="金额2"
        name="number2"
        required
        numberProps={{
          prefix: '￥',
        }}
      />
      <LFormItemNumber
        label="小数点后2位数字"
        name="number3"
        required
        max={1000}
        numberProps={{
          precision: 2,
        }}
      />

      <LFormItemNumber
        name="number66"
        label="格式化数字1"
        required
        initialValue={1000}
        numberProps={{
          precision: undefined,
          formatter: (value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          parser: (value) => value!.replace(/\$\s?|(,*)/g, ''),
        }}
      />
      <LFormItemNumber
        label="格式化数字2"
        required
        name="number77"
        initialValue={99}
        numberProps={{
          precision: undefined,
          formatter: (value) => `${value}%`,
          parser: (value) => value!.replace('%', ','),
        }}
      />

      <LFormItemNumber
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({
          content: '该方案可用于所有表单项',
        })}
      />
    </LForm>
  );
};
export default Demo;
