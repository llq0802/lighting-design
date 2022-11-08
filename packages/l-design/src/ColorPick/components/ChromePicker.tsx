import type { FC } from 'react';
import type { ChromePickerProps } from 'react-color';
import { ChromePicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorChromePickerProps = Omit<ChromePickerProps, 'onChange' | 'onChangeComplete'> &
  PickerCommonProps;

const ColorChromePicker: FC<ColorChromePickerProps> = ({
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
      <ChromePicker {...restProps} disableAlpha={colorMode !== 'rgb'} />
    </PickerWrapper>
  );
};

export default ColorChromePicker;
