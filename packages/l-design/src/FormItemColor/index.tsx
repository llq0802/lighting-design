import type { FC } from 'react';
import { useMemo } from 'react';
import { LColorChromePicker, LColorSketchPicker } from '../ColorPick';
import type { ColorSketchPickerProps } from '../ColorPick/components/SketchPicker';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';

export interface LFormItemColorProps extends LFormItemProps {
  colorProps?: ColorSketchPickerProps;
  type?: 'sketch' | 'chrome';
}

const LFormItemColor: FC<LFormItemColorProps> = ({
  required = false,
  type = 'sketch',
  colorProps = {},
  ...restProps
}) => {
  const ColorConent = useMemo(() => {
    if (type === 'sketch') {
      return <LColorSketchPicker showText {...colorProps} />;
    }
    return <LColorChromePicker showText {...colorProps} />;
  }, [colorProps, type]);

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      {ColorConent}
    </LFormItem>
  );
};

export default LFormItemColor;
