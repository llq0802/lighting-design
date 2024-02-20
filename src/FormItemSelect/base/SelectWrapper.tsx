import type { SpinProps } from 'antd';
import { Select, Spin } from 'antd';
import LForm from 'lighting-design/Form';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, omit, pick } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useDependencies, useRequestOptions } from 'lighting-design/hooks';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type SelectWrapperProps = Record<string, any> & {
  request?: (
    ...args: any[]
  ) => Promise<{ label: ReactNode; value: string | number; [key: string]: any }[]>;
  /**
   *是否需要全部选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  all?: boolean;
  /**
   *全部选项的值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allValue?: number | string;
  /**
   *全部选项的名称
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allLabel?: ReactNode;
  outLoading?: SpinProps;
};

const SelectWrapper: FC<SelectWrapperProps> = ({
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  request,
  requestOptions = emptyObject,
  outLoading,

  name,
  actionRef,
  ...restProps
}) => {
  const form = LForm.useFormInstance();
  const selectProps = omit(restProps, dependencies);
  const dependenciesObj = pick(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
  });
  const { run, loading, data } = requestRes;

  const { dependValues } = useDependencies({
    dependencies,
    dependenciesObj,
    request,
    run,
    form,
    name,
  });

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
      options={opts}
      {...selectProps}
      style={{ width: '100%', ...restProps.style }}
    />
  );

  return outOptions?.length ? (
    dom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} delay={16} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default SelectWrapper;
