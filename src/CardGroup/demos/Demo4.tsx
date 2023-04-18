import { LCardGroup, LForm, LFormItem, LFormItemInput } from 'lighting-design';

const Demo4 = () => {
  return (
    <div>
      <LForm
        name="LCardGroup"
        labelWidth={90}
        submitter={{ buttonAlign: 90 }}
        onFinish={async (values) => {
          console.log('values', values);
        }}
      >
        <LFormItemInput name="input" label="输入框" />
        <LFormItem required name="card1" label="卡片单选">
          <LCardGroup
            options={[
              { value: '1', label: '支付宝' },
              { value: '2', label: '微信' },
              { value: '3', label: '云闪付' },
            ]}
          />
        </LFormItem>
        <LFormItem required name="card2" label="卡片多选">
          <LCardGroup
            cardStyle={{ minWidth: 100 }}
            cardBodyStyle={{ padding: 8, textAlign: 'center' }}
            multiple
            options={[
              { value: '1', label: '支付宝' },
              { value: '2', label: '微信' },
              { value: '3', label: '云闪付' },
            ]}
          />
        </LFormItem>
      </LForm>
    </div>
  );
};

export default Demo4;
