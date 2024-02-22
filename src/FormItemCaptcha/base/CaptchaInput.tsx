import { useMemoizedFn, useMount } from 'ahooks';
import type { ButtonProps, InputRef } from 'antd';
import { Divider, Input } from 'antd';
import { LCaptchaButton } from 'lighting-design';
import { emptyObject } from 'lighting-design/constants';
import type { CSSProperties, FC, Ref } from 'react';
import { useImperativeHandle, useMemo, useRef, useState } from 'react';

export interface CodeInputProps extends Record<string, any> {
  /**
   * 验证码组件类型
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  type?: ButtonProps['type'] | 'inline';

  /**
   *  按钮的属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  buttonProps?: ButtonProps;
  /**
   * 组件挂载完成后，自动触发点击按钮。
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  autoClick?: boolean;
  /**
   * onGetCaptcha 请求获取验证成功后，是否自动获取输入框焦点
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  autoFocusOnGetCaptcha?: boolean;
  /**
   * 验证码最大长度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  maxLength?: number;
  /**
   * 点击按钮触发并请求获取验证码的异步函数。
   * -  如果返回 false 或 Promise.reject(false) 表示验证失败或请求验证码失败。会自动管理loading
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  onGetCaptcha?: () => boolean | Promise<any>;
}

const checkResult = async (fn: () => boolean | Promise<boolean>) => {
  try {
    const ret = await fn();
    if (ret !== false) {
      return ret;
    }
  } catch (error) {
    console.error('验证码接口出错！', error);
  }
  return Promise.reject(false); // 抛错 后续代码不执行
};

const CodeInput: FC<CodeInputProps> = ({
  placeholder,
  disabled,
  size,
  maxLength,
  variant,
  actionRef,
  onEnd,
  initText,
  second,
  disabledText,
  cacheKey,
  type = 'default',
  onGetCaptcha = () => true,
  autoClick = false,
  autoFocusOnGetCaptcha = true,
  buttonProps = emptyObject,

  ...restProps
}) => {
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const inputRef: Ref<InputRef> | undefined = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 点击按钮
  const onButtonClick = useMemoizedFn(async (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    buttonProps?.onClick?.(e);
    if (actionRef) return Promise.reject(false);
    try {
      setLoading(true);
      // 用于验证手机号码或邮箱，并请求获取验证码。如果返回 false 或 Promise.reject(false) 表示验证失败或请求验证码失败。
      await checkResult(onGetCaptcha);
      setStart(true); // 只有当获取验证码成功时才进行倒计时
      if (autoFocusOnGetCaptcha) {
        inputRef.current!.focus();
      }
    } catch {
    } finally {
      setLoading(false);
    }
  });

  const handleEnd = useMemoizedFn(() => {
    setStart(false);
    onEnd?.();
  });

  // @ts-ignore
  useImperativeHandle(buttonProps?.ref, () => buttonRef.current, [buttonRef]);

  const defaultStyle = useMemo(() => {
    let inputStyle: CSSProperties = {
      flex: 1,
      transition: 'width 0.3s',
      marginRight: '8px',
    };
    let buttonStyle: CSSProperties = {};
    if (type === 'inline') {
      inputStyle = { flex: 1 };
      buttonStyle = {
        height: 'auto',
        padding: '0 4px 0 6px',
      };
    }
    return {
      input: inputStyle,
      button: buttonStyle,
    };
  }, [type]);

  const buttonStyle = useMemo(
    () => ({
      ...defaultStyle.button,
      ...buttonProps?.style,
    }),
    [buttonProps?.style, defaultStyle.button],
  );

  const captchaButtonDom = (
    <LCaptchaButton
      size={size}
      loading={loading}
      // @ts-ignore
      disabled={disabled}
      start={start}
      type={type === 'inline' || type === 'link' ? 'link' : type}
      {...buttonProps}
      onClick={onButtonClick}
      actionRef={actionRef}
      onEnd={handleEnd}
      second={second}
      disabledText={disabledText}
      cacheKey={cacheKey}
      ref={buttonRef}
      style={buttonStyle}
    >
      {initText}
    </LCaptchaButton>
  );

  useMount(() => {
    if (autoClick) {
      buttonRef.current!.click();
    }
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        variant={variant}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        allowClear
        autoComplete="off"
        maxLength={maxLength}
        ref={inputRef}
        {...restProps}
        style={{ ...defaultStyle.input, ...restProps?.style }}
        suffix={
          type === 'inline' ? (
            <>
              {restProps?.suffix}
              <Divider type="vertical" />
              {captchaButtonDom}
            </>
          ) : (
            restProps?.suffix
          )
        }
      />
      {type !== 'inline' ? captchaButtonDom : null}
    </div>
  );
};

export default CodeInput;
