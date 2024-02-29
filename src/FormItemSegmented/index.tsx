import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import SegmentedWrapper from './base/SegmentedWrapper';
import type { LFormItemSegmentedoProps } from './interface';

const LFormItemSegmented: FC<LFormItemSegmentedoProps> = ({
  disabled = false,
  size,
  spin,
  autoRequest,
  refreshDeps,
  actionRef,
  request,
  fieldNames,
  options,
  segmentedProps = emptyObject,
  requestOptions = emptyObject,
  block,
  isDefaultChecked = false,

  ...restProps
}) => {
  const { disabled: formDisabled, size: formSize } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType {...restProps}>
      <SegmentedWrapper
        size={size || formSize}
        disabled={disabled || formDisabled}
        dependencies={restProps?.dependencies}
        actionRef={actionRef}
        request={request}
        block={block}
        // @ts-ignore
        options={options}
        fieldNames={fieldNames}
        outLoading={spin}
        requestOptions={requestOptions}
        autoRequest={autoRequest}
        refreshDeps={refreshDeps}
        isDefaultChecked={isDefaultChecked}
        {...segmentedProps}
      />
    </LFormItem>
  );
};

export default LFormItemSegmented;
export * from './interface';
