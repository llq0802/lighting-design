import { useCountDown, useLocalStorageState, useMemoizedFn, useUnmount } from 'ahooks';
import { Button } from 'antd';
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import type { LCaptchaButtonProps } from './interface';

const CaptchaButton: ForwardRefRenderFunction<HTMLButtonElement, LCaptchaButtonProps> = (props, ref) => {
  const {
    second = 60,
    cacheKey = '__LCaptchaButton__',
    disabledText = '重发',
    autoStart,
    onEnd,
    onClick,
    actionRef,
    children = '获取验证码',
    render,
    ...restProps
  } = props;

  const [targetDate, setTargetDate] = useLocalStorageState(cacheKey, { defaultValue: 0 });

  const [countdown] = useCountDown({
    targetDate,
    onEnd() {
      setTargetDate(void 0);
      onEnd?.();
    },
  });

  const startFn = useMemoizedFn(() => {
    const date = Date.now() + second * 1000;
    setTargetDate(date);
  });

  const cancelFn = useMemoizedFn(() => {
    setTargetDate(void 0);
  });

  const handleButtonClick = useMemoizedFn((e) => {
    if (autoStart) startFn();
    onClick?.(e);
  });

  useImperativeHandle(actionRef, () => ({
    cancel: cancelFn,
    start: startFn,
  }));

  useUnmount(() => {
    cancelFn();
  });

  const dom = countdown === 0 ? children : `${Math.round(countdown / 1000)}秒后${disabledText}`;

  return (
    <Button ref={ref} {...restProps} disabled={countdown !== 0} onClick={handleButtonClick}>
      {render ? render(Math.round(countdown / 1000)) : dom}
    </Button>
  );
};

const LCaptchaButton = forwardRef(CaptchaButton);

export default LCaptchaButton;
export * from './interface';
