import { Input } from 'antd';
import type { PasswordProps } from 'antd/lib/input';
import type { ChangeEvent, ClipboardEvent, FC } from 'react';
import { useCallback, useMemo } from 'react';

export interface PassworldWrapperProps extends PasswordProps {
  disabledWhiteSpace?: boolean;
  disabledPaste?: boolean;
  disabledCopy?: boolean;
}

const PassworldWrapper: FC<PassworldWrapperProps> = (props) => {
  const {
    value,
    onChange,
    disabledWhiteSpace = false,
    disabledPaste = true,
    disabledCopy = true,
    ...restProps
  } = props;

  const isSpace = useMemo(() => disabledWhiteSpace, [disabledWhiteSpace]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      if (disabledPaste) {
        e.preventDefault();
      }
      restProps?.onPaste?.(e);
    },
    [disabledPaste, restProps],
  );

  const handleCopy = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      if (disabledCopy) {
        e.preventDefault();
      }
      restProps?.onCopy?.(e);
    },
    [disabledCopy, restProps],
  );

  return (
    <Input.Password
      value={value}
      onChange={handleChange}
      placeholder="请输入"
      autoComplete="off"
      {...restProps}
      onPaste={handlePaste}
      onCopy={handleCopy}
    />
  );
};

export default PassworldWrapper;
