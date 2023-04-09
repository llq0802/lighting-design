import type { FC } from 'react';
import type { SketchPickerProps } from 'react-color';
import { SketchPicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorSketchPickerProps = Omit<
  SketchPickerProps,
  'onChange' | 'onChangeComplete'
> &
  PickerCommonProps;

const ColorSketchPicker: FC<ColorSketchPickerProps> = ({
  className,
  value,
  trigger,
  showText,
  onChange,
  colorMode,
  placement,
  changeMethod,
  size,
  disabled,
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
    disabled,
  };

  return (
    <PickerWrapper {...wrapperProps}>
      <SketchPicker {...restProps} disableAlpha={colorMode !== 'rgb'} />
    </PickerWrapper>
  );
};

export default ColorSketchPicker;
