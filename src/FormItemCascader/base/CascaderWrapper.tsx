import { Cascader, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, omit } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

type CascaderWrapperProps = Record<string, any>;

const CascaderWrapper: FC<CascaderWrapperProps> = ({
  actionRef,
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  request,
  requestOptions,

  outLoading = emptyObject,

  ...restProps // LFormItem 传过来的其他值
}) => {
  const cascaderProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
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
    <Spin spinning={loading} style={publicSpinStyle} delay={20} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default CascaderWrapper;
