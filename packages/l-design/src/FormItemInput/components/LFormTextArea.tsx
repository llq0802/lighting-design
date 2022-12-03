import type { TextAreaProps } from 'antd/lib/input';
import type { FC } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import { usePlaceholder } from '../../utils';
import TextAreaWrapper from '../base/TextAreaWrapper';

export interface LFormItemTextAreaProps extends LFormItemProps {
  disabledWhiteSpace?: boolean;
  textAreaProps?: TextAreaProps;
}

const LFormItemTextArea: FC<LFormItemTextAreaProps> = ({
  disabledWhiteSpace = false,
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
