import type { SpinProps } from 'antd';
import type {
  SegmentedLabeledOption,
  SegmentedValue,
} from 'antd/lib/segmented';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SegmentedWrapperProps } from './base/SegmentedWrapper';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<
      SegmentedWrapperProps,
      'segmentedProps' | 'request' | 'notDependRender'
    > {
  dependencies?: string[];
  debounceTime?: number;
  options?: (SegmentedValue | SegmentedLabeledOption)[];
  /**
   * @name 自定义loading效果 具体参考(https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  debounceTime,
  options = [],
  segmentedProps = {},
  requestOptions = {},
  spin,
  disabled,
  notDependRender,

  required,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <SegmentedWrapper
        name={restProps.name}
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        debounceTime={debounceTime}
        notDependRender={notDependRender}
        // @ts-ignore
        segmentedProps={segmentedProps}
        requestOptions={requestOptions}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
