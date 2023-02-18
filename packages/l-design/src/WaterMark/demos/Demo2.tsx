import { LForm, LFormItemInput, LWaterMark } from 'lighting-design';

const Demo1 = () => {
  return (
    <LWaterMark content="Lighting-Design" rotate={20} width={300} height={300}>
      <LForm
        labelWrap
        labelCol={{ flex: '90px' }}
        submitter={{ buttonAlign: 90 }}
        name="LForm-InitialValues"
      >
        <LFormItemInput name="name" required label="姓名姓名姓名姓名" />
        <LFormItemInput name="name1" type="phone" required label="手机号" />
      </LForm>
    </LWaterMark>
  );
};

export default Demo1;
