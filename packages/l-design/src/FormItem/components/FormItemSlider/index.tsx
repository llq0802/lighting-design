import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';
import type { SliderRangeProps } from 'antd/lib/slider';
import type { CSSProperties, FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../Form/base/BaseForm';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

export interface LFormItemSliderProps
  extends LFormItemProps,
    Pick<SliderSingleProps, 'min' | 'max' | 'step' | 'marks' | 'handleStyle' | 'trackStyle'> {
  sliderProps?: SliderSingleProps | SliderRangeProps;
  railStyle?: CSSProperties;
  sliderStyle?: CSSProperties;
}

const LFormItemSlider: FC<LFormItemSliderProps> = ({
  required,
  disabled,
  min,
  max,
  step,
  marks,
  handleStyle,
  trackStyle,
  railStyle,
  sliderStyle,
  placeholder,
  sliderProps = {},
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} isSelectType placeholder={messagePlaceholder} {...restProps}>
      <Slider
        min={min}
        max={max}
        step={step}
        marks={marks}
        disabled={disabled ?? formDisabled}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        // @ts-ignore
        railStyle={railStyle}
        style={sliderStyle}
        {...sliderProps}
      />
    </LFormItem>
  );
};

export default LFormItemSlider;

// https://www.npmjs.com/package/rc-slider
// trackStyle?: React.CSSProperties | React.CSSProperties[];
// handleStyle?: React.CSSProperties | React.CSSProperties[];
// railStyle?: React.CSSProperties;
// dotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
// activeDotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
