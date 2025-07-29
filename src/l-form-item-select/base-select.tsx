import { Select, Spin } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseSelect: FC<Record<string, any>> = ({
  options,

  request,
  requestOptions = emptyObject,
  actionRef,

  spin,
  ...restProps
}) => {
  const requestRes = useRequestOptions({
    request,
    requestOptions,
  });
  const { loading, data } = requestRes;
  useImperativeHandle(actionRef, () => requestRes);

  const dom = (
    <Select
      optionFilterProp="label"
      options={options || data}
      {...restProps}
      style={{ width: '100%', ...restProps.style }}
    />
  );

  return loading && !options ? <Spin {...spin}>{dom}</Spin> : dom;
};

export default BaseSelect;
