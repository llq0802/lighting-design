import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useMemo } from 'react';

export type InputType = InputProps['type'] | 'bankCard' | 'idCard' | 'phone';

export interface InputWrapperProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
}

const InputWrapper: FC<InputWrapperProps> = (props) => {
  const { value, onChange, type, disabledWhiteSpace = false, ...restProps } = props;
  const isSpace = useMemo(() => disabledWhiteSpace, [disabledWhiteSpace]);

  // 处理input类型
  const realType = useMemo(() => {
    if (type === 'phone' || type === 'idCard' || type === 'bankCard') {
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
    (e: ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      let rawValue = input.value;
      // 手机类型银行卡只能输入数字
      if (
        (type === 'phone' || type === 'bankCard') &&
        window.isNaN(input.value as unknown as any)
      ) {
        rawValue = rawValue.replace(/.*/g, '');
      }
      // 禁止输入空格
      if (isSpace) {
        rawValue = rawValue.replace(/\s+/g, '');
      }

      onChange?.(rawValue as any);
    },
    [onChange, isSpace, type],
  );
  return (
    <Input
      placeholder="请输入"
      allowClear
      autoComplete="off"
      type={realType}
      maxLength={maxLen}
      {...restProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputWrapper;
