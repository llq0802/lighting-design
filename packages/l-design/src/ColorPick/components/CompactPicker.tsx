import type { FC } from 'react';
import type { CompactPickerProps } from 'react-color';
import { CompactPicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';

export type ColorCompactPickerProps = Omit<CompactPickerProps, 'onChange' | 'onChangeComplete'> &
  PickerCommonProps;

const CompactPickerWrapper: FC<ColorCompactPickerProps> = ({
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
      <CompactPicker {...restProps} />
    </PickerWrapper>
  );
};

export default CompactPickerWrapper;
