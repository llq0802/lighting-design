import { useMemoizedFn, useUpdateEffect } from 'ahooks';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import { EMPTY_REG, NUM_REG, isChrome } from 'lighting-design/constants';
import type { ChangeEvent, FC } from 'react';
import { useMemo, useRef, useState } from 'react';

type InputType =
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

const formatInputValue = (val: string, type?: string) => {
  let rawValue = val;
  // 手机类型银行卡只能输入数字
  if ((type === 'phone' || type === 'bankCard') && window.isNaN(rawValue as unknown as any)) {
    console.warn('lighting-design: phone 或 bankCard 类型的 Input 只能输入数字');
    return rawValue.match(NUM_REG)?.join('') || '';
  }

  if (type === 'idCard') {
    if (window.isNaN(rawValue?.slice(0, 17) as any)) {
      console.warn(
        'lighting-design: idCard 类型的 Input 只能输入18位数字 (最后一位可为数字或字符大小写 X )',
      );
      return rawValue.match(NUM_REG)?.join('') || '';
    }

    if (
      rawValue.length === 18 &&
      window.isNaN(rawValue?.at(-1) as unknown as any) &&
      rawValue?.at(-1)?.toLocaleLowerCase() !== 'x'
    ) {
      console.warn(
        'lighting-design: idCard 类型的 Input 只能输入18位数字 (最后一位可为数字或字符大小写 X )',
      );
      return rawValue?.slice(0, -1) || '';
    }
  }

  return rawValue;
};

const InputWrapper: FC<InputWrapperProps> = (props) => {
  const { value, onChange, type, disabledWhiteSpace, ...restProps } = props;
  const lock = useRef(false);
  const [innerValue, setInnerValue] = useState(() => value);
  useUpdateEffect(() => {
    setInnerValue(value);
  }, [value]);

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
    let rawValue = e.target.value;

    if (disabledWhiteSpace) {
      rawValue = rawValue.replace(EMPTY_REG, '');
    }
    const val = formatInputValue(rawValue, type);

    setInnerValue(val);

    if (lock.current) {
      return;
    }

    onChange?.(val as any);
  });

  return (
    <Input
      allowClear
      autoComplete="off"
      type={realType}
      maxLength={maxLen}
      {...restProps}
      // 非直接的文字输入时（键盘输入中文的拼音）
      onCompositionStart={(e) => {
        lock.current = true;
        restProps?.onCompositionStart?.(e);
      }}
      // 直接输入文字后（键盘选择真实的汉字）
      // 只触发了onCompositionstart 和 onCompositionupdate这两个函数，
      // 罪魁祸首就是绑定在 input 上的那个 value，输入拼音的过程中，
      // state.value 一直没变，input 中自然不会有任何输入值，没有输入值，也就完成不了输入过程，
      // 触发不了 compositionend，一直处于“过程中”
      onCompositionEnd={(e) => {
        lock.current = false;
        // 谷歌浏览器：compositionstart onChange compositionend
        // 火狐浏览器：compositionstart compositionend onChange
        // 谷歌浏览器onChange事件在handleCompositionEnd之前触发
        if (isChrome) {
          const val = formatInputValue(e.target?.value, type);
          onChange?.(val as any);
        }
        restProps?.onCompositionEnd?.(e);
      }}
      value={innerValue}
      onChange={handleChange}
    />
  );
};

export default InputWrapper;
