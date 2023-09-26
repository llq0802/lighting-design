import { useMemoizedFn, useMount } from 'ahooks';
import type { ButtonProps, InputProps, InputRef } from 'antd';
import { Divider, Input } from 'antd';
import { LCaptchaButton } from 'lighting-design';
import type { LCaptchaButtonProps } from 'lighting-design/CaptchaButton';
import { emptyObject } from 'lighting-design/constants';
import type { ChangeEvent, CSSProperties, FC } from 'react';
import { useImperativeHandle, useMemo, useRef, useState } from 'react';

export interface CodeInputProps extends Record<number | string, any> {
  value?: any;
  onChange?: (value: any) => void;
  /**
   * 验证码组件类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  type?: ButtonProps['type'] | 'inline';
  /**
   *  输入框的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  inputProps?: InputProps;
  /**
   *  按钮的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  buttonProps?: LCaptchaButtonProps & { initText: string };
  /**
   * 组件挂载完成后，自动触发点击按钮。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  autoClick?: boolean;
  /**
   * onGetCaptcha 请求获取验证成功后，是否自动获取输入框焦点
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  autoFocusOnGetCaptcha?: boolean;
  /**
   * 是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  disabled?: boolean;
  /**
   * 验证码最大长度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
   */
  maxLength?: number;
  /**
   * 点击按钮触发并请求获取验证码的异步函数。 如果返回 false 或 Promise.reject(false) 表示验证失败或请求验证码失败。会自动管理loading
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemCaptchaProps
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
  value,
  onChange,
  placeholder,
  disabled,
  size,
  maxLength,

  type = 'default',
  onGetCaptcha = () => true,
  autoClick = false,
  autoFocusOnGetCaptcha = true,
  inputProps = emptyObject,
  buttonProps = emptyObject,

  ...restProps
}) => {
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { onClick, onEnd, initText, ...restButtonProps } =
    buttonProps as LCaptchaButtonProps & {
      initText: string;
    };

  // 点击按钮
  const onButtonClick = useMemoizedFn(
    async (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;
      setLoading(true);
      onClick?.(e);
      try {
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
    },
  );

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
      disabled={disabled}
      start={start}
      type={type === 'inline' || type === 'link' ? 'link' : type}
      {...restButtonProps}
      onClick={onButtonClick}
      onEnd={handleEnd}
      ref={
        buttonRef as unknown as React.RefObject<
          React.RefObject<HTMLInputElement>
        >
      }
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

  const handleOnChange = useMemoizedFn((e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (inputProps?.onChange) {
      inputProps?.onChange(input.value as any);
    }
    onChange?.(input.value);
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        allowClear
        autoComplete="off"
        maxLength={maxLength}
        ref={inputRef as unknown as React.Ref<InputRef> | undefined}
        {...restProps}
        {...inputProps}
        onChange={handleOnChange}
        value={value}
        style={{
          ...defaultStyle.input,
          ...inputProps?.style,
        }}
        suffix={
          type === 'inline' ? (
            <>
              {inputProps?.suffix}
              <Divider type="vertical" />
              {captchaButtonDom}
            </>
          ) : (
            inputProps?.suffix
          )
        }
      />
      {type !== 'inline' ? captchaButtonDom : null}
    </div>
  );
};

export default CodeInput;
