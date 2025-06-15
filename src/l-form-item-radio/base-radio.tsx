import { Radio, Spin } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseRadio: FC<Record<string, any>> = ({
  options,

  request,
  autoRequest,
  requestOptions = emptyObject,
  actionRef,

  spin,
  fieldNames,
  ...restProps
}) => {
  const requestRes = useRequestOptions({
    request,
    requestOptions,
    autoRequest,
  });
  const { loading, data } = requestRes;
  useImperativeHandle(actionRef, () => requestRes);

  const innerOptions = (options || data || []).map((item) => {
    return {
      ...item,
      label: item[fieldNames?.label || 'label'],
      value: item[fieldNames?.value || 'value'],
    };
  });

  const dom = <Radio.Group options={innerOptions} {...restProps} style={{ width: '100%', ...restProps.style }} />;

  return loading && !options ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseRadio;
