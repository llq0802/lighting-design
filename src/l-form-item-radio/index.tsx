import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import BaseRadio from './base-radio';
import type { LFormItemRadioProps } from './interface';

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  size,
  disabled,
  block,
  optionType,
  buttonStyle,
  options,
  //
  autoRequest = true,
  requestOptions,
  actionRef,
  request,

  fieldNames,
  radioProps,
  spin,

  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    block,
    optionType,
    buttonStyle,
    options,
    //
    autoRequest,
    requestOptions,
    actionRef,
    request,

    fieldNames,
    spin,
    ...radioProps,
  };

  return (
    <LFormItem {...restProps}>
      <BaseRadio {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemRadio;
export * from './interface';
