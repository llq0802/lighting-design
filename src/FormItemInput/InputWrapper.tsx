import { useMemoizedFn } from 'ahooks';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { ChangeEvent, FC } from 'react';
import { useMemo } from 'react';

export type InputType =
  | InputProps['type']
  | 'bankCard'
  | 'idCard'
  | 'phone'
  | 'email'
  | 'url'
  | 'chinese ';

export interface InputWrapperProps extends InputProps {
  type?: InputType;
  disabledWhiteSpace?: boolean;
}

const InputWrapper: FC<InputWrapperProps> = (props) => {
  const {
    value,
    onChange,
    type,
    disabledWhiteSpace = false,
    ...restProps
  } = props;
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

  const handleChange = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    let rawValue = input.value;
    // 手机类型银行卡只能输入数字
    if (
      (type === 'phone' || type === 'bankCard') &&
      window.isNaN(input.value as unknown as any)
    ) {
      rawValue = rawValue.replace(/.*/g, '');
    }

    if (type === 'idCard') {
      // /^\d{17}(\d|X|x)$/.test(input.value)
      if (
        rawValue.length === 18 &&
        window.isNaN(rawValue?.at(-1) as unknown as any) &&
        rawValue?.at(-1)?.toLocaleLowerCase() !== 'x'
      ) {
        rawValue = rawValue.slice(0, -1);
      } else if (
        rawValue.length < 18 &&
        window.isNaN(rawValue as unknown as any)
      ) {
        rawValue = rawValue.replace(/.*/g, '');
      }
    }

    if (isSpace) {
      // 禁止输入空格
      rawValue = rawValue.replace(/\s+/g, '');
    }

    onChange?.(rawValue as any);
  });
  return (
    <Input
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
