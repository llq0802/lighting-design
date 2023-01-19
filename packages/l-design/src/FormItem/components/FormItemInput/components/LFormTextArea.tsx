import type { TextAreaProps } from 'antd/lib/input';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../../Form/base/BaseForm';
import { usePlaceholder } from '../../../../utils';
import type { LFormItemProps } from '../../../base/BaseFromItem';
import LFormItem from '../../../base/BaseFromItem';
import TextAreaWrapper from '../base/TextAreaWrapper';

export interface LFormItemTextAreaProps extends LFormItemProps {
  disabledWhiteSpace?: boolean;
  textAreaProps?: TextAreaProps;
}

const LFormItemTextArea: FC<LFormItemTextAreaProps> = ({
  disabledWhiteSpace = true,
  required = false,
  disabled,
  placeholder,
  textAreaProps = {},
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messagePlaceholder}
      validateTrigger="onBlur"
      {...restProps}
    >
      <TextAreaWrapper
        disabled={disabled ?? formDisabled}
        disabledWhiteSpace={disabledWhiteSpace}
        placeholder={messagePlaceholder}
        {...textAreaProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
