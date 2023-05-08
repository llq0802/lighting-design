import LForm from 'lighting-design/Form';
import LFormItemNumberRange from '..';

export default function Demo1() {
  return (
    <LForm
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemNumberRange />
    </LForm>
  );
}
