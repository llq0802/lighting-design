import React, { useCallback, useState } from 'react';
import type { ColorResult, PhotoshopPickerProps } from 'react-color';
import { PhotoshopPicker } from 'react-color';
import type { PickerCommonProps } from '../base/PickerWrapper';
import PickerWrapper from '../base/PickerWrapper';
import { transformColor } from '../utils';

export type ColorPhotoshopPickerProps = Omit<
  PhotoshopPickerProps,
  'onChange' | 'onChangeComplete'
> &
  Omit<PickerCommonProps, 'changeMethod'> & {
    changeMethod?: 'onChangeComplete' | 'onAccept';
  };

const ColorPhotoshopPicker: React.FC<ColorPhotoshopPickerProps> = ({
  className,
  value,
  onChange,
  trigger,
  showText,
  colorMode,
  placement,
  size,
  changeMethod = 'onAccept',
  ...restProps
}) => {
  const [open, setOpen] = useState(false);

  const wrapperProps = {
    className,
    value,
    trigger,
    showText,
    colorMode,
    placement,
    size,
    open,
    onOpenChange: setOpen,
  };

  const [innerColor, setInnerColor] = useState(value);

  const handleChange = useCallback(
    (color: ColorResult) => {
      setInnerColor(transformColor(color, colorMode));
    },
    [colorMode],
  );

  // 点击ok事件
  const handleAccept = useCallback(() => {
    onChange?.(innerColor as string);
    setOpen(false);
  }, [onChange, innerColor]);

  // 点击cancel事件
  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const changeMethodProps = {
    [changeMethod]: handleAccept,
  };

  return (
    <PickerWrapper {...wrapperProps} isNoChangeMethod>
      <PhotoshopPicker
        color={innerColor}
        onChange={handleChange}
        onCancel={handleCancel}
        {...changeMethodProps}
        {...restProps}
      />
    </PickerWrapper>
  );
};

export default ColorPhotoshopPicker;
