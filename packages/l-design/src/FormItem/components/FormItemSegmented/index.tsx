import type { SegmentedProps } from 'antd';
import type { FC } from 'react';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { SegmentedWrapperProps } from './base/SegmentedWrapper';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<SegmentedWrapperProps, 'segmentedProps' | 'request'>,
    Pick<SegmentedProps, 'options'> {
  dependencies?: string[];
  debounceTime?: number;
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  debounceTime,
  options = [],
  segmentedProps = {},

  required,
  ...restProps
}) => {
  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <SegmentedWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        debounceTime={debounceTime}
        // @ts-ignore
        segmentedProps={segmentedProps}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
