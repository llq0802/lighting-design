import LFormItem from 'lighting-design/l-form-item';
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
  const baseProps = {
    size,
    disabled,
    options,
    fieldNames,
    shape,
    block,
    //
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
