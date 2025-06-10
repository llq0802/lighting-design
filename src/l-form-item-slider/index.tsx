import { Slider } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import type { LFormItemSliderProps } from './interface';

const LFormItemSlider: FC<LFormItemSliderProps> = ({
  size,
  disabled,
  min,
  max,
  step,
  marks,
  sliderProps = emptyObject,
  ...restProps
}) => {
  const baseProps = {
    size,
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

// https://www.npmjs.com/package/rc-slider
// trackStyle?: React.CSSProperties | React.CSSProperties[];
// handleStyle?: React.CSSProperties | React.CSSProperties[];
// railStyle?: React.CSSProperties;
// dotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
// activeDotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
