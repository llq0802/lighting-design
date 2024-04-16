import { Segmented, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import { isNil } from 'lodash-es';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

type SegmentedWrapperProps = Record<string, any>;

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
  name,
  initialValue,
  options: outOptions = emptyArray,
  autoRequest,
  refreshDeps,
  actionRef,
  request,
  outLoading,
  fieldNames,
  requestOptions = emptyObject,
  value,
  isDefaultChecked,
  ...restProps
}) => {
  const segmentedProps = restProps;
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    autoRequest,
    refreshDeps,
    name,
    initialValue,
  });
  const { loading, data } = requestRes;

  const segmentedOptions = useMemo(() => {
    let innerOptions = getOptions(outOptions, data);
    if (fieldNames) {
      innerOptions = innerOptions?.map((item) => ({
        ...item,
        label: item[fieldNames?.['label'] ?? 'label'],
        value: item[fieldNames?.['value'] ?? 'value'],
      }));
    }
    return innerOptions;
  }, [outOptions, data]);

  useImperativeHandle(actionRef, () => requestRes);

  const SegmentedDom = (
    <Segmented
      options={segmentedOptions}
      {...segmentedProps}
      value={!isDefaultChecked && isNil(value) ? '' : value}
    />
  );

  return outOptions?.length ? (
    SegmentedDom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {SegmentedDom}
    </Spin>
  );
};

export default SegmentedWrapper;
