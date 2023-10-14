import { useMemoizedFn } from 'ahooks';
import { Input } from 'antd';
import type { PasswordProps } from 'antd/lib/input';
import { EMPTY_REG } from 'lighting-design/constants';
import type { ChangeEvent, ClipboardEvent, FC } from 'react';

export interface PassworldWrapperProps extends PasswordProps {
  disabledWhiteSpace?: boolean;
  disabledPaste?: boolean;
  disabledCopy?: boolean;
}

const PassworldWrapper: FC<PassworldWrapperProps> = (props) => {
  const {
    value,
    onChange,
    disabledWhiteSpace,
    disabledPaste = true,
    disabledCopy = true,
    placeholder = '请输入密码',
    ...restProps
  } = props;

  const handleChange = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    let rawValue = input.value;
    // 禁止输入空格
    if (disabledWhiteSpace) {
      rawValue = rawValue.replace(EMPTY_REG, '');
    }
    onChange?.(rawValue as any);
  });

  const handlePaste = useMemoizedFn((e: ClipboardEvent<HTMLInputElement>) => {
    if (disabledPaste) {
      e.preventDefault();
    }
    restProps?.onPaste?.(e);
  });

  const handleCopy = useMemoizedFn((e: ClipboardEvent<HTMLInputElement>) => {
    if (disabledCopy) {
      e.preventDefault();
    }
    restProps?.onCopy?.(e);
  });

  return (
    <Input.Password
      value={value}
      // autoComplete="off"
      autoComplete="new-password"
      placeholder={placeholder}
      {...restProps}
      onPaste={handlePaste}
      onCopy={handleCopy}
      onChange={handleChange}
    />
  );
};

export default PassworldWrapper;
