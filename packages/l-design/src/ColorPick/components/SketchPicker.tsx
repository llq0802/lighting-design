import React from 'react';
import type { SketchPickerProps } from 'react-color';
import { SketchPicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorSketchPickerProps = Omit<SketchPickerProps, 'onChange' | 'onChangeComplete'> &
  PickerCommonProps;

const ColorSketchPicker: React.FC<ColorSketchPickerProps> = ({
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
      <SketchPicker {...restProps} disableAlpha={colorMode !== 'rgb'} />
    </PickerWrapper>
  );
};

export default ColorSketchPicker;
