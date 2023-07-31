import {
  LColorChromePicker,
  LColorPhotoshopPicker,
  LColorSketchPicker,
} from 'lighting-design/ColorPick';
import type { ColorChromePickerProps } from 'lighting-design/ColorPick/components/ChromePicker';
import type { ColorSketchPickerProps } from 'lighting-design/ColorPick/components/SketchPicker';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';

export interface LFormItemColorProps extends LFormItemProps {
  /**
   * LColor 组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.13
   *@memberof LFormItemColorProps
   */
  colorProps?: ColorSketchPickerProps | ColorChromePickerProps;
  /**
   *内置组件类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.13
   *@memberof LFormItemColorProps
   */
  colorType?: 'sketch' | 'chrome' | 'photoshop';
}

const LFormItemColor: FC<LFormItemColorProps> = ({
  required = false,
  colorType = 'sketch',
  disabled,
  colorProps = {},
  placeholder,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const ColorConent = useMemo(() => {
    if (colorType === 'sketch') {
      return (
        <LColorSketchPicker
          showText
          disabled={disabled ?? formDisabled}
          {...colorProps}
        />
      );
    }

    if (colorType === 'photoshop') {
      return (
        <LColorPhotoshopPicker
          showText
          disabled={disabled ?? formDisabled}
          {...colorProps}
        />
      );
    }
    return (
      <LColorChromePicker
        showText
        disabled={disabled ?? formDisabled}
        {...colorProps}
      />
    );
  }, [colorProps, colorType, disabled, formDisabled]);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      {ColorConent}
    </LFormItem>
  );
};

export default LFormItemColor;
