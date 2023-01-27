import type { SpinProps } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/lib/segmented';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../Form/base/BaseForm';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { SegmentedWrapperProps } from './base/SegmentedWrapper';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<SegmentedWrapperProps, 'segmentedProps' | 'request' | 'notDependRender'> {
  dependencies?: string[];
  debounceTime?: number;
  options?: (SegmentedValue | SegmentedLabeledOption)[];
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
   */
  spin?: SpinProps;
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  debounceTime,
  options = [],
  segmentedProps = {},
  spin,
  disabled,
  notDependRender,

  required,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <SegmentedWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        notDependRender={notDependRender}
        // @ts-ignore
        segmentedProps={segmentedProps}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
