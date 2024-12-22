import { Select, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import { omit } from 'lodash-es';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

const SelectWrapper: FC<Record<string, any>> = ({
  initialValue,
  name,
  options: outOptions = emptyArray,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  request,
  autoRequest,
  requestOptions = emptyObject,
  outLoading,

  actionRef,
  refreshDeps,
  ...restProps
}) => {
  const selectProps = omit(restProps, ['dependencies']);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    refreshDeps,
    autoRequest,
    initialValue,
    name,
  });
  const { loading, data } = requestRes;

  const opts = useMemo(() => {
    const innerOpts = getOptions(outOptions, data);
    const mode = restProps?.mode;
    const fieldNames = restProps?.fieldNames;
    if (all && innerOpts?.length && mode !== 'tags' && mode !== 'multiple') {
      return [
        { [fieldNames?.label ?? 'label']: allLabel, [fieldNames?.value ?? 'value']: allValue },
        ...innerOpts,
      ];
    }
    return innerOpts;
  }, [outOptions, data, all]);

  useImperativeHandle(actionRef, () => requestRes);

  const dom = (
    <Select
      allowClear
      optionFilterProp={restProps?.fieldNames?.label ?? 'label'}
      options={opts}
      {...selectProps}
      style={{ width: '100%', ...restProps.style }}
    />
  );

  return outOptions?.length ? (
    dom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default SelectWrapper;
