import { Spin, TreeSelect } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import { omit } from 'lodash-es';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

const TreeSelectWrapper: FC<Record<string, any>> = ({
  actionRef,
  dependencies = emptyArray,
  treeData: outTreeData = emptyArray,
  request,
  outLoading,
  autoRequest = true,
  refreshDeps,

  requestOptions = emptyObject,
  ...restProps
}) => {
  const treeSelectProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outTreeData,
    request,
    requestOptions,
    autoRequest,
    refreshDeps,
  });
  const { loading, data } = requestRes;

  useImperativeHandle(actionRef, () => requestRes);

  const treeSelectData = useMemo(() => {
    const innerOptions = getOptions(outTreeData, data);
    return innerOptions;
  }, [outTreeData, data]);

  const dom = (
    <TreeSelect
      allowClear
      treeNodeFilterProp={restProps?.fieldNames?.label || 'title'}
      treeData={treeSelectData}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      {...treeSelectProps}
      style={{ width: '100%', ...restProps?.style }}
    />
  );

  return outTreeData?.length ? (
    dom
  ) : (
    <Spin spinning={loading} delay={20} style={publicSpinStyle} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default TreeSelectWrapper;
