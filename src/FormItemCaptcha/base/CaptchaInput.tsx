import { useMemoizedFn, useMount } from 'ahooks';
import type { ButtonProps, InputProps, InputRef } from 'antd';
import { Divider, Input } from 'antd';
import { LCaptchaButton } from 'lighting-design';
import type { LCaptchaButtonProps } from 'lighting-design/CaptchaButton';
import type { ChangeEvent, CSSProperties, FC } from 'react';
import { useImperativeHandle, useMemo, useRef, useState } from 'react';

export interface CodeInputProps extends Record<number | string, any> {
  value?: any;
  onChange?: (value: any) => void;
  type?: ButtonProps['type'] | 'inline'; // 显示类型
  inputProps?: InputProps;
  buttonProps?: LCaptchaButtonProps & { initText: string };
  autoClick?: boolean;
  autoFocusOnGetCaptcha?: boolean;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;

  // 发送验证码
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
  maxLength,

  type = 'default',
  onGetCaptcha = () => true,
  autoClick = false,
  autoFocusOnGetCaptcha = true,
  inputProps = {},
  buttonProps = {},

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
      setLoading(true);
      onClick?.(e);
      try {
        // 用于验证手机号码或邮箱，并请求获取验证码。如果返回 false 或 Promise.reject(false) 表示验证失败或请求验证码失败。
        await checkResult(onGetCaptcha);
        setLoading(false);
        setStart(true); // 只有当获取验证码成功时才进行倒计时
        if (autoFocusOnGetCaptcha) {
          inputRef.current!.focus();
        }
      } catch (error) {
        setLoading(false);
      }
    },
  );

  const handleEnd = useMemoizedFn(() => {
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
      loading={loading}
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
