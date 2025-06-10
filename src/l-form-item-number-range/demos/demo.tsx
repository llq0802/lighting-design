import { LForm, LFormItemNumberRange } from 'lighting-design';

export default function Demo() {
  return (
    <LForm
      labelWidth={120}
      initialValues={{
        numberRange4: [1, 99],
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemNumberRange
        label="数字1"
        name="numberRange1"
        required
        separatorWidth="4rem"
        placeholder={['请输入左边数', '请输入右边数']}
      />
      <LFormItemNumberRange label="数字2" name="numberRange2" disabled />
      <LFormItemNumberRange label="数字4" name="numberRange4" />
      <LFormItemNumberRange variant="filled" label="数字3" name="numberRange3" separator="-" required />
    </LForm>
  );
}
