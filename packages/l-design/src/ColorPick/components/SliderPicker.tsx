import React from 'react';
import type { SliderPickerProps } from 'react-color';
import { SliderPicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorSliderPickerProps = Omit<SliderPickerProps, 'onChange' | 'onChangeComplete'> &
  PickerCommonProps;

const ColorBlockPicker: React.FC<ColorSliderPickerProps> = ({
  className,
  value,
  trigger,
  showText,
  onChange,
  colorMode,
  placement,
  changeMethod,
  size,
  ...restProps
}) => {
  const wrapperProps = {
    className,
    value,
    trigger,
    showText,
    onChange,
    colorMode,
    placement,
    changeMethod,
    size,
  };

  return (
    <PickerWrapper {...wrapperProps}>
      <SliderPicker {...restProps} />
    </PickerWrapper>
  );
};

export default ColorBlockPicker;
