import { useCountDown, useLocalStorageState, useMemoizedFn, useUnmount, useUpdateEffect } from 'ahooks';
import { Button } from 'antd';
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import type { LCaptchaButtonProps } from './interface';

/**
 * 验证码按钮组件
 * @param props  组件属性及方法
 * @param ref 组件引用
 */
const LCaptchaButton: ForwardRefRenderFunction<HTMLButtonElement, LCaptchaButtonProps> = (props, ref) => {
  const {
    start = true,
    second = 60,
    cacheKey = '__LCaptchaButton__',
    disabledText = '重发',
    onEnd,
    onClick,
    actionRef,
    children = '获取验证码',
    render,
    ...buttonProps
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
    if (start && !actionRef) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
  });

  const cancelFn = useMemoizedFn(() => {
    setTargetDate(void 0);
  });

  const handleButtonClick = useMemoizedFn((e) => {
    startFn();
    onClick?.(e);
  });

  useImperativeHandle(actionRef, () => ({
    cancel: cancelFn,
    start: startFn,
  }));

  useUpdateEffect(() => {
    startFn();
  }, [start]);

  useUnmount(() => {
    cancelFn();
  });

  const dom = countdown === 0 ? children : `${Math.round(countdown / 1000)}秒后${disabledText}`;

  return (
    <Button
      ref={ref}
      {...buttonProps}
      disabled={(buttonProps as any)?.disabled || countdown !== 0}
      onClick={handleButtonClick}
    >
      {render ? render(Math.round(countdown / 1000)) : dom}
    </Button>
  );
};
export default forwardRef(LCaptchaButton);
export * from './interface';
