import { Divider, Flex, Input, type InputRef } from 'antd';
import LCaptchaButton from 'lighting-design/l-captcha-button';
import React, { useRef, useState, type Ref } from 'react';

type PropsType = any;

const BaseCaptchaInput: React.FC<PropsType> = ({
  type,
  initText,
  cacheKey,
  captchaButtonProps = {},
  inputProps = {},
  ...restProps
}) => {
  const [loading, setLoading] = useState(false);
  const inputRef: Ref<InputRef> | undefined = useRef(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);

  const innerCaptchaButtonProps = {
    cacheKey,
    loading,
    type: type === 'inline' || type === 'link' ? 'link' : type,
    ...captchaButtonProps,
  };

  const captchaButtonDom = <LCaptchaButton {...innerCaptchaButtonProps}>{initText}</LCaptchaButton>;

  const mergingInputProps = {
    ...inputProps,
    ...restProps,
    onChange(...args: any[]) {
      restProps?.onChange?.(...args);
      inputProps?.onChange?.(...args);
    },
  };

  const innerInputProps = {
    ref: inputRef,
    ...mergingInputProps,
    style: {
      flex: 1,
      ...mergingInputProps?.style,
    },
    suffix:
      type === 'inline' ? (
        <>
          {mergingInputProps?.suffix}
          <Divider type="vertical" />
          {captchaButtonDom}
        </>
      ) : (
        mergingInputProps?.suffix
      ),
  };

  return (
    <Flex gap={8} align="center">
      <Input {...innerInputProps} />
      {type !== 'inline' ? captchaButtonDom : null}
    </Flex>
  );
};

export default BaseCaptchaInput;
