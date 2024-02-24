import { Segmented, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, omit } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

type SegmentedWrapperProps = Record<string, any>;

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  autoRequest,
  refreshDeps,
  actionRef,
  request,
  outLoading,
  fieldNames,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const segmentedProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    autoRequest,
    refreshDeps,
  });
  const { loading, data } = requestRes;

  const segmentedOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, data);
    return innerOptions;
  }, [outOptions, data]);

  useImperativeHandle(actionRef, () => requestRes);

  const SegmentedDom = <Segmented options={segmentedOptions} {...segmentedProps} />;

  return outOptions?.length ? (
    SegmentedDom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} delay={20} {...outLoading}>
      {SegmentedDom}
    </Spin>
  );
};

export default SegmentedWrapper;
