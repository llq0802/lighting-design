import { LCardGroup, LTrigger } from 'lighting-design';

const options = [
  { value: '1', label: '支付宝' },
  { value: '2', label: '微信' },
  { value: '3', label: '云闪付' },
];

const MyLCardGroup = (props) => {
  return (
    <LCardGroup
      {...props}
      onChange={(val) => {
        props?.onChange?.(options.find((item) => item.value === val));
        props?.setOpen(false);
      }}
      options={options}
    />
  );
};

const Demo5 = () => {
  return (
    <div>
      <LTrigger defaultValue={{ label: '支付宝', value: '1' }}>
        <MyLCardGroup />
      </LTrigger>
    </div>
  );
};
export default Demo5;
