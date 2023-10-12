import { useMemoizedFn, useUpdateEffect } from 'ahooks';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { isChrome } from 'lighting-design/_utils';
import { EMPTY_REG } from 'lighting-design/constants';
import { useRef, useState, type ChangeEvent, type FC } from 'react';

export interface TextAreaWrapperProps extends TextAreaProps {
  disabledWhiteSpace?: boolean;
}

const TextAreaWrapper: FC<TextAreaWrapperProps> = (props) => {
  const { value, onChange, disabledWhiteSpace, ...restProps } = props;

  const lock = useRef(false);
  const [innerValue, setInnerValue] = useState(() => value);
  useUpdateEffect(() => {
    setInnerValue(value);
  }, [value]);

  const handleChange = useMemoizedFn((e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target;
    let rawValue = input.value;
    // 禁止输入空格
    if (disabledWhiteSpace) {
      rawValue = rawValue.replace(EMPTY_REG, '');
    }

    setInnerValue(rawValue);

    if (lock.current) {
      return;
    }

    onChange?.(rawValue as any);
  });

  return (
    <Input.TextArea
      autoComplete="off"
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
          onChange?.(e.target.value as any);
        }
        restProps?.onCompositionEnd?.(e);
      }}
      value={innerValue}
      onChange={handleChange}
    />
  );
};

export default TextAreaWrapper;
