import {
  useCountDown,
  useLocalStorageState,
  useMemoizedFn,
  useUnmount,
  useUpdateEffect,
} from 'ahooks';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { ForwardRefRenderFunction, Ref, RefObject } from 'react';
import { forwardRef } from 'react';

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /** 倒计时秒数 */
  second?: number;
  /** 是否开始发送 */
  start?: boolean;
  /** 倒计时的文字, 会带上 second 秒 */
  disabledText?: string;
  /**
   * 缓存的 key、页面刷新后倒计时继续。
   */
  cacheKey: string;
  /**
   *倒计时完成后触发
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
const LCaptchaButton: ForwardRefRenderFunction<
  RefObject<HTMLInputElement>,
  LCaptchaButtonProps
> = (props, ref) => {
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

  const [targetDate, setTargetDate] = useLocalStorageState<number | undefined>(
    cacheKey,
    { defaultValue: 0 },
  );

  const [countdown] = useCountDown({
    targetDate,
    onEnd() {
      setTargetDate(void 0);
      onEnd?.();
    },
  });
  const handleClick = useMemoizedFn((e) => {
    onClick?.(e);
  });

  const handleButtonClick = useMemoizedFn(async (e) => {
    if (start) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
    handleClick?.(e);
  });

  useUnmount(() => {
    setTargetDate(void 0);
  });

  useUpdateEffect(() => {
    if (start) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
  }, [start]);

  return (
    <Button
      ref={ref as Ref<HTMLElement>}
      {...buttonProps}
      onClick={handleButtonClick}
      disabled={countdown !== 0}
    >
      {countdown === 0
        ? `${children ?? '获取验证码'}`
        : `${Math.round(countdown / 1000)}秒后${disabledText}`}
    </Button>
  );
};

export default forwardRef(LCaptchaButton);
