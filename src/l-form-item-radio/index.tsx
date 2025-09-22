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
  requestOptions,
  actionRef,
  request,
  spin,
  fieldNames,
  radioProps,

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
