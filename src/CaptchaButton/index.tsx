import { useCountDown, useMemoizedFn, useSessionStorageState, useUnmount, useUpdateEffect } from 'ahooks';
import { Button } from 'antd';
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import type { LCaptchaButtonProps } from './interface';

/**
 * 验证码按钮组件
 *
 * @param props 组件属性
 * @param ref 组件引用
 * @returns 验证码按钮组件
 */
const LCaptchaButton: ForwardRefRenderFunction<HTMLButtonElement, LCaptchaButtonProps> = (props, ref) => {
  const {
    start = true,
    second = 60,
    cacheKey = '__CaptchaButton__',
    disabledText = '重发',
    onEnd,
    onClick,
    actionRef,
    children = '获取验证码',
    render,
    ...buttonProps
  } = props;

  const [targetDate, setTargetDate] = useSessionStorageState(cacheKey, {
    defaultValue: 0,
  });

  const [countdown] = useCountDown({
    targetDate,
    onEnd() {
      setTargetDate(void 0);
      onEnd?.();
    },
  });

  const handleButtonClick = useMemoizedFn(async (e) => {
    if (start && !actionRef) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
    onClick?.(e);
  });

  useUnmount(() => {
    setTargetDate(void 0);
  });

  useUpdateEffect(() => {
    if (start && !actionRef) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
  }, [start]);

  useImperativeHandle(actionRef, () => ({
    cancel: () => setTargetDate(void 0),
    start: () => {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    },
  }));

  return (
    <Button
      ref={ref}
      {...buttonProps}
      disabled={(buttonProps as any)?.disabled || countdown !== 0}
      onClick={handleButtonClick}
    >
      {render
        ? render(Math.round(countdown / 1000))
        : countdown === 0
        ? children
        : `${Math.round(countdown / 1000)}秒后${disabledText}`}
    </Button>
  );
};
export default forwardRef(LCaptchaButton);
export * from './interface';
