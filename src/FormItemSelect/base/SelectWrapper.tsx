import { useRequest } from 'ahooks';
import type { SpinProps } from 'antd';
import { Form, Select, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { omit, pick, useDependencies } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle } from 'react';

export type SelectWrapperProps = Record<string, any> & {
  request?: (
    ...depends: any[]
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

export interface LSelectOptions {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

const SelectWrapper: FC<SelectWrapperProps> = ({
  value,
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  request,
  requestOptions = emptyObject,
  outLoading,

  disabled,
  name,
  actionRef,
  ...restProps
}) => {
  const selectProps = omit(restProps, dependencies);
  const dependenciesObj = pick(restProps, dependencies);
  const form = Form.useFormInstance();
  // const dependenciesObj = useDependValues(dependencies, depValues);

  const requestRes = useRequest(
    async (...args) => {
      if (outOptions?.length) return outOptions;
      if (request) {
        const result = await request(...args);
        return result;
      }
      return [];
    },
    {
      ...requestOptions,
      onSuccess(data, params) {
        const mode = restProps?.mode;
        const fieldNames = restProps?.fieldNames;
        if (all && data?.length && mode !== 'tags' && mode !== 'multiple') {
          requestRes.mutate([
            { [fieldNames?.label ?? 'label']: allLabel, [fieldNames?.value ?? 'value']: allValue },
            ...data,
          ]);
        }
        requestOptions?.onSuccess?.(data, params);
      },
    },
  );

  const { run, loading, data } = requestRes;

  const { dependValues, hasDependValuesEmpty } = useDependencies({
    dependencies,
    dependenciesObj,
    request,
    run,
    form,
    name,
  });

  useImperativeHandle(actionRef, () => requestRes);
  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <Select
        disabled={disabled || hasDependValuesEmpty}
        allowClear
        options={data}
        {...selectProps}
        style={{ width: '100%', ...restProps?.style }}
        value={value}
      />
    </Spin>
  );
};

export default SelectWrapper;
