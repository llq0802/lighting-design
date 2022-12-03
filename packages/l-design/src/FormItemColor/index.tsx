import classnames from 'classnames';
import type { FC } from 'react';
import { useMemo } from 'react';
import LColor, { LColorChromePicker, LColorSketchPicker } from '../ColorPick';
import type { ColorChromePickerProps } from '../ColorPick/components/ChromePicker';
import type { ColorSketchPickerProps } from '../ColorPick/components/SketchPicker';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import './styles.less';
export interface LFormItemColorProps extends LFormItemProps {
  colorProps?: ColorSketchPickerProps | ColorChromePickerProps;
  colorType?: 'sketch' | 'chrome';
}

const LFormItemColor: FC<LFormItemColorProps> = ({
  required = false,
  colorType = 'sketch',
  disabled,
  colorProps = {},
  ...restProps
}) => {
  const ColorConent = useMemo(() => {
    if (disabled) {
      return (
        <LColor
          showText
          className={classnames('lightd-form-color-disabled', colorProps.className)}
          size={colorProps.size}
        />
      );
    }
    if (colorType === 'sketch') {
      return <LColorSketchPicker showText {...colorProps} />;
    }
    return <LColorChromePicker showText {...colorProps} />;
  }, [colorProps, colorType, disabled]);

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      {ColorConent}
    </LFormItem>
  );
};

export default LFormItemColor;
