import { Spin, TreeSelect } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseTreeSelect: FC<Record<string, any>> = ({
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

  const dom = <TreeSelect treeData={options || data} {...restProps} />;

  return loading && !options ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseTreeSelect;
