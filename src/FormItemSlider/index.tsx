import { Slider } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemSliderProps } from './interface';

const LFormItemSlider: FC<LFormItemSliderProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  disabled = false,
  min,
  max,
  step,
  marks,
  handleStyle,
  trackStyle,
  railStyle,
  sliderStyle,
  placeholder,
  sliderProps = emptyObject,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType placeholder={messagePlaceholder} {...restProps}>
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
export * from './interface';

// https://www.npmjs.com/package/rc-slider
// trackStyle?: React.CSSProperties | React.CSSProperties[];
// handleStyle?: React.CSSProperties | React.CSSProperties[];
// railStyle?: React.CSSProperties;
// dotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
// activeDotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
