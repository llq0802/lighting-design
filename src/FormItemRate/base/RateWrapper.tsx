import { useMemoizedFn } from 'ahooks';
import type { RateProps } from 'antd';
import { Rate } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';

export type RateWrapperProps = Record<string, any> &
  Partial<{
    disabled: boolean;
    /**
     *antd评分组件 Props
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
     */
    rateProps: RateProps;
  }>;

const RateWrapper: FC<RateWrapperProps> = ({
  value,
  onChange,
  allowHalf,
  count,
  rateProps = emptyObject,
  disabled,
  ...restProps
}) => {
  const handleChange = useMemoizedFn((num: number) => {
    if (rateProps?.onChange) {
      rateProps?.onChange(num);
    }
    onChange?.(num);
  });

  return (
    <Rate
      {...restProps}
      allowHalf={allowHalf}
      count={count}
      disabled={disabled}
      {...rateProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export default RateWrapper;
