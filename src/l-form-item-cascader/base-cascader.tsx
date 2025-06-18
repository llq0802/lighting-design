import { AutoComplete, Spin } from 'antd';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseCascader: FC<Record<string, any>> = ({ options, request, requestOptions, actionRef, spin, ...restProps }) => {
  const requestRes = useRequestOptions({
    request,
    requestOptions,
  });
  const { loading, data } = requestRes;
  useImperativeHandle(actionRef, () => requestRes);

  const dom = <AutoComplete options={options || data} {...restProps} />;

  return loading && !options ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseCascader;
