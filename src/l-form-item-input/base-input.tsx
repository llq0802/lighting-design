import type { InputProps } from 'antd';
import { Input } from 'antd';
import { useMemo, type FC } from 'react';

// 谷歌浏览器：compositionstart onChange compositionend
// 火狐浏览器：compositionstart compositionend onChange
// 谷歌浏览器onChange事件在handleCompositionEnd之前触发

type InputType = InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';

export interface BaseInputProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
}

const BaseInput: FC<BaseInputProps> = (props) => {
  const { type = 'text', maxLength, max, ...restProps } = props;

  const innerType = useMemo(() => {
    if (type === 'phone' || type === 'idCard' || type === 'bankCard' || type === 'chinese') {
      return 'text';
    }
    return type;
  }, [type]);

  const innerMaxLength = useMemo(() => {
    if (type === 'text') return (maxLength || max) as number;
    if (type === 'bankCard') return 22;
    if (type === 'phone') return 11;
    if (type === 'idCard') return 18;
    return maxLength;
  }, [type, maxLength]);

  return <Input autoComplete="off" type={innerType} maxLength={innerMaxLength} {...restProps} />;
};

export default BaseInput;
