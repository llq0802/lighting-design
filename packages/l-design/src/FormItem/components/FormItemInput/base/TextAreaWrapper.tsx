import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useMemo } from 'react';

export interface TextAreaWrapperProps extends TextAreaProps {
  disabledWhiteSpace?: boolean;
}

const TextAreaWrapper: FC<TextAreaWrapperProps> = (props) => {
  const { value, onChange, disabledWhiteSpace = false, ...restProps } = props;
  const isSpace = useMemo(() => disabledWhiteSpace, [disabledWhiteSpace]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
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
  return <Input.TextArea autoComplete="off" value={value} {...restProps} onChange={handleChange} />;
};

export default TextAreaWrapper;
