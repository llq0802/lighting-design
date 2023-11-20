import { useDeepCompareEffect, useRequest } from 'ahooks';
import { Mentions, Spin } from 'antd';
import LForm from 'lighting-design/Form';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import { useImperativeHandle } from 'react';

const MentionsWrapper = ({
  dependencies = emptyArray,
  mentionsProps,
  request,
  disabled,
  requestOptions,
  outOptions,
  spin,
  placeholder,
  refreshDeps,
  name,
  actionRef,

  ...restProps
}) => {
  const form = LForm.useFormInstance();

  const isClear = useIsClearDependValues(refreshDeps);

  const requestRes = useRequest<any, any[]>(request || (async () => []), {
    ...requestOptions,
    manual: true,
  });

  const { run, loading, data } = requestRes;

  useDeepCompareEffect(() => {
    if (request && !outOptions?.length) {
      run(...refreshDeps);
    }
  }, []);

  useDeepUpdateEffect(() => {
    if (request && !outOptions?.length && refreshDeps?.length) {
      form.setFieldValue(name, void 0);
      if (!isClear) run(...refreshDeps);
    }
  }, refreshDeps);

  useImperativeHandle(actionRef, () => requestRes);

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...spin}>
      <Mentions
        {...restProps}
        disabled={disabled ?? isClear}
        autoComplete="off"
        placeholder={placeholder}
        options={outOptions || data || []}
        {...mentionsProps}
        style={{ width: '100%', ...mentionsProps?.style }}
      />
    </Spin>
  );
};

export default MentionsWrapper;
