import { useMount, useRequest } from 'ahooks';
import { Mentions, Spin } from 'antd';
import LForm from 'lighting-design/Form';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { useIsClearDependValues } from 'lighting-design/_utils';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import { useImperativeHandle } from 'react';

const MentionsWrapper = ({
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
  onChange,
  value,
  ...restProps
}: Record<string, any>) => {
  const form = LForm.useFormInstance();

  const isClear = useIsClearDependValues(refreshDeps);

  const requestRes = useRequest<any, any[]>(request || (async () => []), {
    ...requestOptions,
    manual: true,
  });

  const { run, loading, data } = requestRes;

  useMount(() => {
    if (request && !outOptions?.length) {
      run(...refreshDeps);
    }
  });

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
        {...mentionsProps}
        options={outOptions || mentionsProps?.options || data || []}
        onChange={(value) => {
          onChange?.(value);
          mentionsProps.onChange?.(value);
        }}
        style={{ width: '100%', ...mentionsProps?.style }}
        value={value}
      />
    </Spin>
  );
};

export default MentionsWrapper;
