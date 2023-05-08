import { Input, InputNumber, Space } from 'antd';
import LFormItem from 'lighting-design/FormItem';

const prefixCls = 'lightd-number-range';

const NumberRange = ({
  value: valuePair,
  onChange,
  separator = '~',
  separatorWidth = 30,
  ...restProps
}) => {
  const handleOnBlur = () => {
    console.log('handleOnBlur');
    if (Array.isArray(valuePair)) {
      //   仅在两个值均为数字时才做比较并转换
      const [value0, value1] = valuePair;
      if (
        typeof value0 === 'number' &&
        typeof value1 === 'number' &&
        value0 > value1
      ) {
        onChange([value1, value0]);
      } else if (value0 === void 0 && value1 === void 0) {
        onChange(void 0);
      }
    }
  };

  const dom = (
    <Space.Compact onBlur={handleOnBlur} block className={prefixCls}>
      <InputNumber
        style={{ width: `calc((100% - ${separatorWidth}px) / 2)` }}
      />
      <Input
        disabled
        placeholder={separator}
        style={{
          width: separatorWidth,
          textAlign: 'center',
          pointerEvents: 'none',
          backgroundColor: '#fff',
        }}
      />
      <InputNumber
        style={{ width: `calc((100% - ${separatorWidth}px) / 2)` }}
      />
    </Space.Compact>
  );

  return dom;
};

const LFormItemNumberRange = ({
  required,
  separatorWidth = 30,
  separator,
  ...restProps
}) => {
  return (
    <LFormItem
      label="数字"
      required={required}
      contentAfter={' '}
      contentInline
      {...restProps}
    >
      <NumberRange separator={separator} separatorWidth={separatorWidth} />
    </LFormItem>
  );
};
export default LFormItemNumberRange;
