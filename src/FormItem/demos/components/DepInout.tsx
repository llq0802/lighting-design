import { Input } from 'antd';

const DepInout = (props: any) => {
  const { sex, ...restProps } = props;

  const disabled = sex === '1' ? false : true;

  return <Input {...restProps} disabled={disabled} />;
};

export default DepInout;
