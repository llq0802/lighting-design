import {
  useCountDown,
  useLocalStorageState,
  useMemoizedFn,
  useUnmount,
  useUpdateEffect,
} from 'ahooks';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { ForwardRefRenderFunction, MouseEvent, Ref, RefObject } from 'react';
import { forwardRef } from 'react';

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /** 倒计时秒数 */
  second?: number;
  start?: boolean;
  disabledText?: string;
  /**
   * 缓存的 key、页面刷新后倒计时继续。
   */
  cacheKey: string;
  /**
   *
   * @returns
   */
  onEnd?: () => void;
  /**
   * @see {@link  https://ant.design/components/button-cn/}
   */
}

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
    second = 60,
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
    onEnd() {
      onEnd?.();
      setTargetDate(undefined);
    },
  });
  const handleClick = useMemoizedFn((e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
  });

  useUnmount(() => {
    setTargetDate(undefined);
  });

  useUpdateEffect(() => {
    if (start) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
  }, [start]);

  return (
    <Button
      ref={ref as Ref<HTMLElement> | undefined}
      {...buttonProps}
      onClick={async (e) => {
        if (start) {
          const date = Date.now() + second * 1000;
          setTargetDate(date);
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
