import { Segmented, Spin } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseSegmented: FC<Record<string, any>> = ({
  options,

  request,
  requestOptions = emptyObject,
  actionRef,

  spin,
  fieldNames,
  ...restProps
}) => {
  const requestRes = useRequestOptions({
    request,
    requestOptions,
  });
  const { loading, data } = requestRes;
  useImperativeHandle(actionRef, () => requestRes);

  const innerOptions = (options || data)?.map((item: any) => {
    return {
      ...item,
      label: item[fieldNames?.label || 'label'],
      value: item[fieldNames?.value || 'value'],
    };
  });

  const dom = <Segmented options={innerOptions} {...restProps} />;

  return loading && !options ? <Spin {...spin}>{dom}</Spin> : dom;
};

export default BaseSegmented;
