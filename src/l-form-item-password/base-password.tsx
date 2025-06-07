import { useMemoizedFn } from 'ahooks';
import { Input } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import type { ClipboardEvent } from 'react';
import React from 'react';
import type { LFormItemPasswordProps } from './interface';

type PropsType = PasswordProps & Pick<LFormItemPasswordProps, 'disabledCopy' | 'disabledPaste'>;

const BasePassword: React.FC<PropsType> = ({ max, disabledCopy, disabledPaste, ...restProps }) => {
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
      // autoComplete="off"
      autoComplete="new-password"
      maxLength={max as number}
      {...restProps}
      onPaste={handlePaste}
      onCopy={handleCopy}
    />
  );
};

export default BasePassword;
