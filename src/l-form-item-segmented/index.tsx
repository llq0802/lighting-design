import LFormItem from 'lighting-design/l-form-item';
import { isNil } from 'lodash-es';
import type { FC } from 'react';
import BaseSegmented from './base-segmented';
import type { LFormItemSegmentedProps } from './interface';

const LFormItemSegmented: FC<LFormItemSegmentedProps> = ({
  disabled,
  size,
  spin,
  actionRef,
  request,
  fieldNames,
  options,
  segmentedProps,
  requestOptions,
  block,
  vertical,
  shape,
  isHighlightFirst = false,

  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    options,
    fieldNames,
    vertical,
    shape,
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
