import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { CSSProperties } from 'react';

export interface LFormItemSliderProps
  extends LFormItemProps,
    Pick<SliderSingleProps, 'min' | 'max' | 'step' | 'marks' | 'handleStyle' | 'trackStyle'> {
  /**
   *antd 滑块的 props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSliderProps
   */
  sliderProps?: SliderSingleProps | SliderRangeProps;
  /**
   *整个轨道样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSliderProps
   */
  railStyle?: CSSProperties;
  /**
   *Slider 组件根标签样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSliderProps
   */
  sliderStyle?: CSSProperties;
}
