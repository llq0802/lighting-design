import { useRequest } from 'ahooks';
import { Divider, Flex, Input, type InputRef } from 'antd';
import LCaptchaButton, { type LCaptchaButtonActionRef } from 'lighting-design/l-captcha-button';
import React, { useRef, type Ref } from 'react';

type PropsType = any;

const BaseCaptchaInput: React.FC<PropsType> = ({
  type,
  initText,
  cacheKey,
  request,
  requestAutoFocus,
  captchaButtonProps = {},
  inputProps = {},
  ...restProps
}) => {
  const actionRef = useRef<LCaptchaButtonActionRef>(null!);
  const inputRef: Ref<InputRef> | undefined = useRef(null!);

  const { loading, run } = useRequest(request, {
    manual: true,
    onSuccess(data, params) {
      console.log('=== onSuccess==>');
      actionRef.current?.start?.();
      if (requestAutoFocus) inputRef?.current?.focus?.();
    },
    onError(e) {
      console.log('=== onError==>');
    },
  });

  const isInline = type === 'inline' || type === 'link';

  const innerCaptchaButtonProps = {
    cacheKey,
    loading,
    actionRef,
    type: isInline ? 'link' : type,
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

  const mergeInputProps = {
    ...inputProps,
    ...restProps,
    onChange(...args: any[]) {
      restProps?.onChange?.(...args);
      inputProps?.onChange?.(...args);
    },
  };

  const innerInputProps = {
    ref: inputRef,
    ...mergeInputProps,
    style: {
      flex: 1,
      ...mergeInputProps?.style,
    },
    suffix: isInline ? (
      <>
        {mergeInputProps?.suffix}
        <Divider type="vertical" style={{ top: 0 }} />
        {captchaButtonDom}
      </>
    ) : (
      mergeInputProps?.suffix
    ),
  };

  return (
    <Flex gap={8} align="center">
      <Input {...innerInputProps} allowClear />
      {!isInline ? captchaButtonDom : null}
    </Flex>
  );
};

export default BaseCaptchaInput;
