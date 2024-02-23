import { Mentions, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, omit } from 'lighting-design/_utils';
import { useRequestOptions } from 'lighting-design/hooks';
import { useImperativeHandle, useMemo } from 'react';

const MentionsWrapper = ({
  dependencies,
  request,
  requestOptions,
  outOptions,
  spin,
  placeholder,
  refreshDeps,
  actionRef,
  autoRequest,
  ...restProps
}: Record<string, any>) => {
  const mentionsProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    refreshDeps,
    autoRequest,
  });
  const { loading, data } = requestRes;
  const opts = useMemo(() => {
    const innerOpts = getOptions(outOptions, data);
    return innerOpts;
  }, [outOptions, data]);

  useImperativeHandle(actionRef, () => requestRes);

  const dom = (
    <Mentions
      autoComplete="off"
      placeholder={placeholder}
      {...restProps}
      options={opts}
      style={{ width: '100%', ...mentionsProps?.style }}
    />
  );

  return outOptions?.length ? (
    dom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...spin}>
      {dom}
    </Spin>
  );
};

export default MentionsWrapper;
