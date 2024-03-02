import { LForm, LFormItem, LTrigger } from 'lighting-design';
import MyTable1 from './components/MyTable1';

const Demo2 = () => {
  return (
    <LForm
      // labelCol={{ flex: '90px' }}
      // labelWidth={90}
      // submitter={{ buttonAlign: 50 }}
      labelCol={{ span: 4 }}
      submitter={{ wrapperCol: { offset: 4 } }}
      transformValues={(values) => {
        const { trigger1, trigger2, trigger3, trigger4, ...restValues } = values;
        return {
          ...restValues,
          trigger1Id: trigger1?.value,
          trigger2Id: trigger2?.value,
          trigger3Id: trigger3?.value,
          trigger4Id: trigger4?.value,
        };
      }}
      onFinish={async (values) => {
        console.log('onFinish', values);
      }}
    >
      <LFormItem required name="trigger1" label="单选表格">
        <LTrigger popoverProps={{ fresh: true }}>
          <MyTable1 />
        </LTrigger>
      </LFormItem>

      <LFormItem name="trigger2" label="多选表格">
        <LTrigger width="100%" destroyOnHide mode="checkbox">
          <MyTable1 />
        </LTrigger>
      </LFormItem>

      <LFormItem required name="trigger3" label="单选表格Tag">
        <LTrigger placement="rightBottom" mode="radioTag" destroyOnHide>
          <MyTable1 />
        </LTrigger>
      </LFormItem>
      <LFormItem required name="trigger4" label="多选表格Tag">
        <LTrigger placement="top" mode="checkboxTag" destroyOnHide>
          <MyTable1 />
        </LTrigger>
      </LFormItem>
    </LForm>
  );
};
export default Demo2;
