import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';

// 谷歌浏览器：compositionstart onChange compositionend
// 火狐浏览器：compositionstart compositionend onChange
// 谷歌浏览器onChange事件在handleCompositionEnd之前触发

type InputType = InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';

export interface InputWrapperProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
}

const BaseInput: FC<InputWrapperProps> = (props) => {
  const { type, maxLength, ...restProps } = props;

  const innerMaxLength = maxLength;

  return <Input autoComplete="off" type={realType} maxLength={innerMaxLength} {...restProps} />;
};

export default BaseInput;
