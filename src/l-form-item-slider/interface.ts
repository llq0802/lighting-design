import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemSliderProps
  extends LFormItemProps,
    Pick<SliderSingleProps, 'min' | 'max' | 'step' | 'marks'>,
    Pick<LFormProps, 'disabled' | 'size'> {
  /**
   *antd 滑块的 props
   */
  sliderProps?: SliderSingleProps | SliderRangeProps;
}
