import { Mentions, Spin } from 'antd';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseMentions: FC<Record<string, any>> = ({
  options,
  request,
  requestOptions,
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

  const dom = <Mentions options={innerOptions} {...restProps} />;

  return loading && !options ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseMentions;
