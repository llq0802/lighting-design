import type { InputProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import type { InputWrapperProps } from '../base/InputWrapper';
import InputWrapper from '../base/InputWrapper';

export interface LFormItemInputProps extends LFormItemProps {
  type?: InputWrapperProps['type'];
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
}

const LFormItemInput: FC<LFormItemInputProps> = ({
  type,
  disabledWhiteSpace,
  inputProps = {},
  required,
  ...restProps
}) => {
  const isOnblur = useMemo(
    () => type === 'bankCard' || type === 'idCard' || type === 'phone',
    [type],
  );

  return (
    <LFormItem
      required={required}
      validateTrigger={isOnblur ? 'onBlur' : 'onChange'}
      {...restProps}
    >
      <InputWrapper
        placeholder="请输入"
        allowClear
        autoComplete="off"
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemInput;
