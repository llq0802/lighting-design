import type { TextAreaProps } from 'antd/lib/input';
import type { FC } from 'react';
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
  disabled = false,
  placeholder,
  textAreaProps = {},
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });
  return (
    <LFormItem required={required} {...restProps}>
      <TextAreaWrapper
        disabled={disabled}
        disabledWhiteSpace={disabledWhiteSpace}
        placeholder={messagePlaceholder}
        {...textAreaProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
