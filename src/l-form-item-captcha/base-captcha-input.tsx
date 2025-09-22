import { useRequest } from 'ahooks';
import { Divider, Flex, Input, type InputRef } from 'antd';
import LCaptchaButton, { type LCaptchaButtonActionRef } from 'lighting-design/l-captcha-button';
import React, { useRef, type Ref } from 'react';

type PropsType = any;

const BaseCaptchaInput: React.FC<PropsType> = ({
  type = 'otp',
  initText,
  cacheKey,
  second,
  onEnd,
  request,
  requestOptions,
  requestAutoFocus,
  captchaButtonProps = {},
  inputProps = {},
  wrapperProps,
  ...restProps
}) => {
  const actionRef = useRef<LCaptchaButtonActionRef>(null!);
  const inputRef: Ref<InputRef> | undefined = useRef(null!);

  const { loading, run } = useRequest(request, {
    ...requestOptions,
    manual: true,
    onSuccess(data, params) {
      actionRef.current?.start?.();
      console.log('===inputRef.current==>', inputRef.current);
      if (requestAutoFocus) inputRef?.current?.focus?.();
      requestOptions?.onSuccess?.(data, params);
    },
  });

  const isInline = type === 'inline' || type === 'link';

  const mergeInputProps = {
    ...inputProps,
    ...restProps,
    onChange(...args: any[]) {
      restProps?.onChange?.(...args);
      inputProps?.onChange?.(...args);
    },
  };

  const innerCaptchaButtonProps = {
    cacheKey,
    second,
    loading,
    actionRef,
    onEnd,
    type: isInline ? 'link' : type === 'otp' ? 'primary' : type,
    size: mergeInputProps?.size,
    ...captchaButtonProps,
    style: {
      height: isInline ? 'auto' : void 0,
      padding: isInline ? '0 4px' : void 0,
      ...captchaButtonProps?.style,
    },
    onClick(e) {
      if (request) run();
      captchaButtonProps?.onClick?.(e);
    },
  };

  const captchaButtonDom = <LCaptchaButton {...innerCaptchaButtonProps}>{initText}</LCaptchaButton>;

  const inputDom =
    type === 'otp' ? (
      <Input.OTP ref={inputRef} {...mergeInputProps} />
    ) : (
      <Input
        ref={inputRef}
        {...mergeInputProps}
        style={{
          flex: 1,
          ...mergeInputProps?.style,
        }}
        suffix={
          isInline ? (
            <>
              {mergeInputProps?.suffix}
              <Divider type="vertical" style={{ top: 0 }} />
              {captchaButtonDom}
            </>
          ) : (
            mergeInputProps?.suffix
          )
        }
      />
    );

  return (
    <Flex gap={8} align="center" {...wrapperProps}>
      {inputDom}
      {!isInline ? captchaButtonDom : null}
    </Flex>
  );
};

export default BaseCaptchaInput;
