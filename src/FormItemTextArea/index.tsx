import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import TextAreaWrapper from './TextAreaWrapper';
import type { LFormItemTextAreaProps } from './interface';

const LFormItemTextArea: FC<LFormItemTextAreaProps> = ({
  disabled = false,
  size,
  placeholder,
  disabledWhiteSpace = false,
  required = false,
  textAreaProps = emptyObject,

  autoSize,
  variant,
  showCount,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} placeholder={messagePlaceholder} {...restProps}>
      <TextAreaWrapper
        size={size}
        disabled={disabled || formDisabled}
        autoSize={autoSize}
        variant={variant}
        showCount={showCount}
        disabledWhiteSpace={disabledWhiteSpace}
        placeholder={messagePlaceholder}
        {...textAreaProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
export * from './interface';
