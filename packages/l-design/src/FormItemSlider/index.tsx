import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';
import type { SliderRangeProps } from 'antd/lib/slider';
import * as React from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';

export interface LFormItemSliderProps
  extends LFormItemProps,
    Pick<SliderSingleProps, 'min' | 'max' | 'step' | 'marks'> {
  sliderProps?: SliderSingleProps | SliderRangeProps;
}

const LFormItemSlider: React.FC<LFormItemSliderProps> = ({
  required,
  disabled,
  min,
  max,
  step,
  marks,
  sliderProps = {},
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <Slider min={min} max={max} step={step} marks={marks} disabled={disabled} {...sliderProps} />
    </LFormItem>
  );
};

export default LFormItemSlider;
