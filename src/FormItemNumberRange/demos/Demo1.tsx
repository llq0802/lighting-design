import { LForm, LFormItemNumberRange } from 'lighting-design';

export default function Demo1() {
  return (
    <LForm
      initialValues={{
        numberRange4: [1, 99],
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemNumberRange label="数字1" name="numberRange1" required separatorWidth="10rem" />
      <LFormItemNumberRange
        disabled
        label="数字2"
        name="numberRange2"
        placeholder={['请输入左边数', '请输入右边数']}
      />
      <LFormItemNumberRange label="数字4" name="numberRange4" contentInline />
      <LFormItemNumberRange
        label="数字3"
        name="numberRange3"
        separator="-"
        contentInline
        contentAfter={' '}
      />
    </LForm>
  );
}
