import { LForm, LFormItemSwitch } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSwitch" form={form}>
      <LFormItemSwitch
        name="state1"
        label="开关"
        tooltip="禁止空格"
        contentAfter={<div>后面</div>}
        switchProps={{
          className: 'abvs',
        }}
      />
      <LFormItemSwitch
        unCheckedBg="red"
        checkedBg="blue"
        name="state2"
        label="开关"
        tooltip="禁止空格"
        contentAfter={<div>后面</div>}
        switchProps={{
          className: 'abvs',
        }}
      />
    </LForm>
  );
};
export default Demo1;
