import { Spin, TreeSelect } from 'antd';
import { useRequestOptions } from 'lighting-design/hooks/use-request-options';
import type { FC } from 'react';
import { useImperativeHandle } from 'react';

const BaseTreeSelect: FC<Record<string, any>> = ({
  treeData,
  request,
  requestOptions,
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
    <TreeSelect treeData={treeData || data} treeNodeFilterProp={restProps?.fieldNames?.label} {...restProps} />
  );

  return loading && !treeData ? (
    <Spin spinning {...spin}>
      {dom}
    </Spin>
  ) : (
    dom
  );
};

export default BaseTreeSelect;
