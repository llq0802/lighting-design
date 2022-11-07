import type { TextAreaProps } from 'antd/lib/input';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import { getFormItemLabel } from '../../utils';
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
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);
  return (
    <LFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${messageLabel}` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <TextAreaWrapper disabledWhiteSpace={disabledWhiteSpace} {...textAreaProps} />
    </LFormItem>
  );
};

export default LFormItemTextArea;
