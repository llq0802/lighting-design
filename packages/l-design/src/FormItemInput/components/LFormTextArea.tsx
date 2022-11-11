import type { TextAreaProps } from 'antd/lib/input';
import type { FC } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import TextAreaWrapper from '../base/TextAreaWrapper';

export interface LFormItemTextAreaProps extends LFormItemProps {
  disabledWhiteSpace?: boolean;
  textAreaProps?: TextAreaProps;
}

const LFormItemTextArea: FC<LFormItemTextAreaProps> = ({
  disabledWhiteSpace = false,
  required = false,
  textAreaProps = {},
  ...restProps
}) => {
  return (
    <LFormItem required={required} {...restProps}>
      <TextAreaWrapper disabledWhiteSpace={disabledWhiteSpace} {...textAreaProps} />
    </LFormItem>
  );
};

export default LFormItemTextArea;
