import type { FC } from 'react';
import { useMemo } from 'react';
import { LColorChromePicker, LColorSketchPicker } from '../../../ColorPick';
import type { ColorChromePickerProps } from '../../../ColorPick/components/ChromePicker';
import type { ColorSketchPickerProps } from '../../../ColorPick/components/SketchPicker';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
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
    if (colorType === 'sketch') {
      return <LColorSketchPicker showText disabled={disabled} {...colorProps} />;
    }
    return <LColorChromePicker showText disabled={disabled} {...colorProps} />;
  }, [colorProps, colorType, disabled]);

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      {ColorConent}
    </LFormItem>
  );
};

export default LFormItemColor;
