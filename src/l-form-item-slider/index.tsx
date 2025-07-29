import { Slider } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import type { LFormItemSliderProps } from './interface';

const LFormItemSlider: FC<LFormItemSliderProps> = ({
  disabled,
  min,
  max,
  step,
  marks,
  sliderProps = emptyObject,
  ...restProps
}) => {
  const baseProps = {
    disabled,
    //
    min,
    max,
    step,
    marks,
    ...sliderProps,
  };

  return (
    <LFormItem {...restProps}>
      <Slider {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSlider;
export * from './interface';
