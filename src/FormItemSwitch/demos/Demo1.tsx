import { LForm, LFormItemSwitch } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} labelWidth={85} submitter={{ buttonAlign: 85 }}>
      <LFormItemSwitch
        name="state1"
        label="开关"
        tooltip="禁止空格"
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
        contentInline
        contentAfter={<div>后面</div>}
      />
    </LForm>
  );
};
export default Demo1;
