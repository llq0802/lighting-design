import { Cascader, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

type CascaderWrapperProps = Record<string, any>;

const CascaderWrapper: FC<CascaderWrapperProps> = ({
  initialValue,
  name,
  options: outOptions = emptyArray,
  request,
  actionRef,
  requestOptions,
  autoRequest,
  refreshDeps,
  outLoading = emptyObject,

  ...restProps // LFormItem 传过来的其他值
}) => {
  const cascaderProps = restProps;
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    autoRequest,
    refreshDeps,
    initialValue,
    name,
  });
  const { loading, data } = requestRes;

  const cascaderOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, data);
    return innerOptions;
  }, [outOptions, data]);

  useImperativeHandle(actionRef, () => requestRes);

  const dom = <Cascader options={cascaderOptions} {...cascaderProps} />;

  return outOptions?.length ? (
    dom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default CascaderWrapper;
