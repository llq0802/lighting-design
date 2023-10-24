import {
  useCountDown,
  useMemoizedFn,
  useSessionStorageState,
  useUnmount,
  useUpdateEffect,
} from 'ahooks';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { ForwardRefRenderFunction, Ref, RefObject } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 倒计时的秒数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  second?: number;
  /**
   *@author 李岚清 <https://github.com/llq0802>
   *@description 是否开始发送
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  start?: boolean;
  /**
   * 倒计时的文字, 会带上 second 秒
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  disabledText?: string;
  /**
   * 缓存的key、页面刷新后倒计时继续 , 多个倒计时组件请设置不同的key。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  cacheKey: string;
  /**
   * 用于重置倒计时
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  cancelRef?: React.MutableRefObject<(() => void) | undefined>;
  /**
   *@author 李岚清 <958614130@qq.com>
   *@description 倒计时完成后触发
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   *@see https://ant.design/components/button-cn/
   */
  onEnd?: () => void;
  /**
   *{@link  https://ant.design/components/button-cn/}
   */
}

/**
 * 获取验证码按钮
 * @param LCaptchaButtonProps
 * @returns
 */
const LCaptchaButton: ForwardRefRenderFunction<
  RefObject<HTMLInputElement>,
  LLCaptchaButtonProps
> = (props, ref) => {
  const {
    start = true,
    second = 60,
    cacheKey = '__CaptchaButton__',
    disabledText = '重发',
    onEnd,
    onClick,
    cancelRef,
    children,
    ...buttonProps
  } = props;

  const [targetDate, setTargetDate] = useSessionStorageState<
    number | undefined
  >(cacheKey, { defaultValue: 0 });

  const [countdown] = useCountDown({
    targetDate,
    onEnd() {
      setTargetDate(void 0);
      onEnd?.();
    },
  });

  const handleButtonClick = useMemoizedFn(async (e) => {
    if (start) {
      const date = Date.now() + second * 1000;
      setTargetDate(date);
    }
    onClick?.(e);
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

  useImperativeHandle(cancelRef, () => () => setTargetDate(void 0));

  return (
    <Button
      ref={ref as Ref<HTMLElement>}
      {...buttonProps}
      disabled={(buttonProps as any)?.disabled || countdown !== 0}
      onClick={handleButtonClick}
    >
      {countdown === 0
        ? `${children ?? '获取验证码'}`
        : `${Math.round(countdown / 1000)}秒后${disabledText}`}
    </Button>
  );
};

export default forwardRef(LCaptchaButton);
