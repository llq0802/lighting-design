import type { SegmentedProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import SegmentedWrapper from './base/SegmentedWrapper';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<LFormItemSelectProps, 'spin' | 'request' | 'requestOptions' | 'actionRef'> {
  options?: SegmentedProps['options'] | Record<string, any>[];
  segmentedProps?: SegmentedProps;
  block?: SegmentedProps['block'];
}

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  request,
  options = emptyArray,
  segmentedProps = emptyObject,
  requestOptions = emptyObject,
  block,
  spin,
  size,
  actionRef,
  disabled,

  required,
  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

  return (
    <LFormItem required={required} _isSelectType {...restProps}>
      <SegmentedWrapper
        dependencies={restProps?.dependencies}
        size={size ?? formSize}
        actionRef={actionRef}
        request={request}
        block={block}
        options={options}
        outLoading={spin}
        disabled={disabled ?? formDisabled}
        requestOptions={requestOptions}
        {...segmentedProps}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
