import { useCountDown, useLocalStorageState, useUpdateEffect } from 'ahooks';
import { Button } from 'antd';
import type { ForwardRefRenderFunction, MouseEvent, Ref, RefObject } from 'react';
import { forwardRef, useCallback, useEffect } from 'react';
import type { LCaptchaButtonProps } from './type.d';

/**
 * 获取验证码按钮
 * @param CaptchaButtonProps
 * @returns
 */
const LCaptchaButton: ForwardRefRenderFunction<RefObject<HTMLInputElement>, LCaptchaButtonProps> = (
  props,
  ref,
) => {
  const {
    start = true,
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
    (e: MouseEvent<HTMLElement>) => {
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

  useUpdateEffect(() => {
    if (start) {
      setTargetDate(Date.now() + second * 1000);
    }
  }, [start]);

  return (
    <Button
      ref={ref as Ref<HTMLElement> | undefined}
      {...buttonProps}
      onClick={async (e) => {
        if (start) {
          setTargetDate(Date.now() + second * 1000);
        }
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
