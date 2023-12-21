import { LTagGroup, LTrigger } from 'lighting-design';

const options = [
  { value: '1', label: '香蕉' },
  { value: '2', label: '苹果' },
  { value: '3', label: '葡萄' },
];

const MyLTagGroup = (props) => {
  console.log('==MyLCardGroup-props====>', props);

  return (
    <LTagGroup
      {...props}
      onChange={(val) => {
        if (props.multiple) {
          const value = val?.map((item) => item.value) || [];
          const label = val?.map((item) => item.label) || [];
          props?.onChange?.({
            label: props?.mode === 'tag' ? label : label.join(' , '),
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

const Demo6 = () => {
  return (
    <div>
      <h3>单选-LTagGroup</h3>
      <LTrigger defaultValue={options[0]} labelInValue>
        <MyLTagGroup />
      </LTrigger>
      <h3>多选-LTagGroup</h3>
      <LTrigger>
        <MyLTagGroup multiple />
      </LTrigger>
      <h3>多选Tag-LTagGroup</h3>
      <LTrigger mode="tag">
        <MyLTagGroup multiple mode="tag" />
      </LTrigger>
    </div>
  );
};
export default Demo6;
