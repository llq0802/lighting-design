import LFormItem from 'lighting-design/l-form-item';
import { useLFormContext } from 'lighting-design/l-form/context';
import { isNil } from 'lodash-es';
import type { FC } from 'react';
import BaseSegmented from './base-segmented';
import type { LFormItemSegmentedProps } from './interface';

const LFormItemSegmented: FC<LFormItemSegmentedProps> = ({
  disabled,
  size,

  options,
  block,
  shape,
  isHighlightFirst = false,
  fieldNames,
  spin,
  actionRef,
  request,
  requestOptions,
  segmentedProps,
  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useLFormContext();

  const baseProps = {
    size: size ?? formSize,
    disabled: disabled ?? formDisabled,
    options,
    shape,
    block,
    //
    fieldNames,
    request,
    actionRef,
    requestOptions,
    spin,
    ...segmentedProps,
  };

  return (
    <LFormItem
      getValueProps={(v) => {
        const value = !isHighlightFirst && isNil(v) ? null : v;
        return { value };
      }}
      {...restProps}
    >
      <BaseSegmented {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSegmented;
export * from './interface';
