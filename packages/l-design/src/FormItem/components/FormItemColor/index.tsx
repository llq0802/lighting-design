import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import { LColorChromePicker, LColorPhotoshopPicker, LColorSketchPicker } from '../../../ColorPick';
import type { ColorChromePickerProps } from '../../../ColorPick/components/ChromePicker';
import type { ColorSketchPickerProps } from '../../../ColorPick/components/SketchPicker';
import { LFormContext } from '../../../Form/base/BaseForm';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

export interface LFormItemColorProps extends LFormItemProps {
  colorProps?: ColorSketchPickerProps | ColorChromePickerProps;
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
      return <LColorSketchPicker showText disabled={disabled ?? formDisabled} {...colorProps} />;
    }

    if (colorType === 'photoshop') {
      return <LColorPhotoshopPicker showText disabled={disabled ?? formDisabled} {...colorProps} />;
    }
    return <LColorChromePicker showText disabled={disabled ?? formDisabled} {...colorProps} />;
  }, [colorProps, colorType, disabled, formDisabled]);

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  return (
    <LFormItem required={required} isSelectType placeholder={messageLabel} {...restProps}>
      {ColorConent}
    </LFormItem>
  );
};

export default LFormItemColor;
