import { Radio, Spin } from 'antd';
import { getOptions } from 'lighting-design/_utils';
import { emptyArray } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import { omit } from 'lodash-es';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export const publicSpinStyle = { marginLeft: 40, width: 'fit-content' };

const RadioWrapper: FC<Record<string, any>> = ({
  actionRef,
  outLoading,
  dependencies = emptyArray,
  options: outOptions,
  fieldNames,
  request,
  requestOptions,
  refreshDeps,
  autoRequest = true,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  ...restProps
}) => {
  const radioProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    refreshDeps,
    autoRequest,
  });
  const { loading, data } = requestRes;
  const opts = useMemo(() => {
    let innerOpts = getOptions(outOptions, data);
    if (fieldNames) {
      innerOpts = innerOpts.map((item) => ({
        ...item,
        label: item[fieldNames?.label ?? 'label'],
        value: item[fieldNames?.value ?? 'value'],
      }));
    }
    if (all && innerOpts?.length > 0) {
      return [{ label: allLabel, value: allValue }, ...innerOpts];
    }
    return innerOpts;
  }, [all, outOptions, data]);

  useImperativeHandle(actionRef, () => requestRes);

  const dom = <Radio.Group options={opts} {...radioProps} />;

  return outOptions?.length ? (
    dom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default RadioWrapper;
