import { ColorPicker } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemColorProps } from './interface';

const formatMap = {
  rgb: 'toRgbString',
  hex: 'toHexString',
  hsb: 'toHsbString',
};

const ColorPickerWrapper = ({ size, disabled, showText, ...colorProps }) => {
  const format = colorProps?.format || colorProps?.defaultFormat || 'hex';
  return (
    <ColorPicker
      size={size}
      disabled={disabled}
      allowClear
      destroyTooltipOnHide
      arrow={false}
      showText={showText}
      {...colorProps}
      onChange={(value) => {
        // @ts-ignore
        const val = typeof value === 'string' ? value : value?.[formatMap[format]]?.();
        colorProps?.onChange(val);
      }}
    />
  );
};

const LFormItemColor: FC<LFormItemColorProps> = ({
  disabled,
  size,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholder,

  colorProps = emptyObject,
  showText,
  colorFormat,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType {...restProps}>
      <ColorPickerWrapper
        size={size}
        disabled={disabled || formDisabled}
        allowClear
        destroyTooltipOnHide
        arrow={false}
        showText={showText}
        format={colorFormat}
        {...colorProps}
      />
    </LFormItem>
  );
};

export default LFormItemColor;
