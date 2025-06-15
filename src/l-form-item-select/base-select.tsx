import { Select, Spin } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseSelect: FC<Record<string, any>> = ({
  options,

  request,
  autoRequest,
  requestOptions = emptyObject,
  actionRef,

  spin,
  refreshDeps,
  ...restProps
}) => {
  const requestRes = useRequestOptions({
    request,
    requestOptions,
    autoRequest,
  });
  const { loading, data } = requestRes;
  useImperativeHandle(actionRef, () => requestRes);

  const dom = <Select options={options || data} {...restProps} style={{ width: '100%', ...restProps.style }} />;

  return loading && !options ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseSelect;
