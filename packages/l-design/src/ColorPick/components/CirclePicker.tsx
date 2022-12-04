import type { FC } from 'react';
import type { CirclePickerProps } from 'react-color';
import { CirclePicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorCirclePickerProps = Omit<CirclePickerProps, 'onChange' | 'onChangeComplete'> &
  PickerCommonProps;

const ColorBlockPicker: FC<ColorCirclePickerProps> = ({
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
      <CirclePicker {...restProps} />
    </PickerWrapper>
  );
};

export default ColorBlockPicker;
