import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';
import type { SliderRangeProps } from 'antd/lib/slider';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { CSSProperties, FC } from 'react';
import { useContext } from 'react';

export interface LFormItemSliderProps
  extends LFormItemProps,
    Pick<
      SliderSingleProps,
      'min' | 'max' | 'step' | 'marks' | 'handleStyle' | 'trackStyle'
    > {
  /**
   *antd 滑块的 props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LFormItemSliderProps
   */
  sliderProps?: SliderSingleProps | SliderRangeProps;
  /**
   *整个轨道样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LFormItemSliderProps
   */
  railStyle?: CSSProperties;
  /**
   *Slider 组件根标签样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LFormItemSliderProps
   */
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
    <LFormItem
      required={required}
      _isSelectType
      placeholder={messagePlaceholder}
      {...restProps}
    >
      <Slider
        min={min}
        max={max}
        step={step}
        marks={marks}
        disabled={disabled ?? formDisabled}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
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
