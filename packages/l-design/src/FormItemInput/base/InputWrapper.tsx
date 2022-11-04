import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo } from 'react';

export type InputType = InputProps['type'] | 'bankCard' | 'email' | 'idCard' | 'phone';

export interface InputWrapperProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
}

const InputWrapper: FC<InputWrapperProps> = (props) => {
  const { value, onChange, type, disabledWhiteSpace = false, ...restProps } = props;
  const isSpace = useMemo(() => disabledWhiteSpace, [disabledWhiteSpace]);
  // 处理input类型
  const realType = useMemo(() => {
    if (type === 'phone' || type === 'idCard' || type === 'bankCard' || type === 'email') {
      return 'text';
    }
    return type;
  }, [type]);

  // 处理最大字符数
  const maxLen = useMemo(() => {
    if (type === 'phone') {
      return 11;
    } else if (type === 'idCard') {
      return 18;
    } else {
      return void 0;
    }
  }, [type]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      let rawValue = input.value;
      // 禁止输入空格
      if (isSpace) {
        rawValue = rawValue.replace(/\s+/g, '');
      }
      onChange?.(rawValue as any);
    },
    [onChange, isSpace],
  );
  return (
    <Input
      value={value}
      onChange={handleChange}
      type={realType}
      maxLength={maxLen}
      {...restProps}
    />
  );
};

export default InputWrapper;
