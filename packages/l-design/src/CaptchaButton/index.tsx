import { useCountDown, useLocalStorageState } from 'ahooks';
import { Button } from 'antd';
import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, useCallback, useEffect } from 'react';
import type { LCaptchaButtonProps } from './type.d';

/**
 * 获取验证码按钮
 * @param CaptchaButtonProps
 * @returns
 */
const LCaptchaButton: ForwardRefRenderFunction<
  React.Ref<HTMLElement> | undefined,
  LCaptchaButtonProps
> = (props, ref) => {
  const {
    second = 10,
    cacheKey = '__CaptchaButton__',
    disabledText = '重发',
    onEnd,
    onClick,
    children,
    ...buttonProps
  } = props;

  const [targetDate, setTargetDate] = useLocalStorageState<number | undefined>(cacheKey, {
    defaultValue: 0,
  });
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      setTargetDate(undefined);
      onEnd?.();
    },
  });
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClick?.(e);
    },
    [onClick],
  );
  useEffect(() => {
    return () => {
      setTargetDate(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Button
      ref={ref as React.Ref<HTMLElement> | undefined}
      {...buttonProps}
      onClick={(e) => {
        setTargetDate(Date.now() + second * 1000);
        handleClick?.(e);
      }}
      disabled={countdown !== 0}
    >
      {countdown === 0
        ? `${children ?? '获取验证码'}`
        : `${Math.round(countdown / 1000)}秒后${disabledText}`}
    </Button>
  );
};

export default forwardRef(LCaptchaButton);
export type { LCaptchaButtonProps } from './type.d';
