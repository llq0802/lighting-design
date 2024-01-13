import { LCardGroup, LTrigger } from 'lighting-design';

const options = [
  { value: '1', label: '支付宝' },
  { value: '2', label: '微信' },
  { value: '3', label: '云闪付' },
];

const MyLCardGroup = (props) => {
  console.log('==MyLCardGroup-props====>', props);

  return (
    <LCardGroup
      {...props}
      onChange={(val) => {
        if (props.multiple) {
          const value = val?.map((item) => item.value) || [];
          const label = val?.map((item) => item.label) || [];
          props?.onChange?.({
            label: props?.mode === 'tag' ? label : label.join(' / '),
            value,
          });
          return;
        }
        // labelInValue为true
        props?.onChange?.(val);
        // labelInValue为false
        // props?.onChange?.(options.find((item) => item.value === val));
        props?.setOpen(false);
      }}
      labelInValue
      options={options}
    />
  );
};

const Demo5 = () => {
  return (
    <div>
      <h3>单选-LCardGroup</h3>
      <LTrigger defaultValue={options[0]} labelInValue>
        <MyLCardGroup />
      </LTrigger>
      <h3>多选-LCardGroup</h3>
      <LTrigger>
        <MyLCardGroup multiple />
      </LTrigger>
      <h3>多选Tag-LCardGroup</h3>
      <LTrigger mode="tag">
        <MyLCardGroup multiple mode="tag" />
      </LTrigger>
    </div>
  );
};
export default Demo5;