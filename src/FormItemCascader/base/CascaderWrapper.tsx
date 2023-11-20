import { useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { CascaderProps, SpinProps } from 'antd';
import { Cascader, Form, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type CascaderWrapperProps = Record<string, any> & {
  /**
   * 数据项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCascaderProps
   */
  options?: CascaderProps<any>['options'];
  /**
   * 异步请求函数 用于获取数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCascaderProps
   */
  request?: (...args: any[]) => Promise<any>;
  /**
   * 当依赖项发生变化时重新请求的防抖时间
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCascaderProps
   */
  debounceTime?: number;
  /**
   * antd 级联组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCascaderProps
   */
  cascaderProps?: CascaderProps<any>;
  dependencies?: string[];
  outLoading?: SpinProps;
};

export interface LCascaderOption {
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
  children?: LCascaderOption[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}

const CascaderWrapper: FC<CascaderWrapperProps> = ({
  value,
  onChange,
  actionRef,
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  request,
  debounceTime,
  cascaderProps = emptyObject,
  placeholder,
  outLoading = emptyObject,
  disabled,
  name,

  requestOptions,
  ...restProps // LFormItem 传过来的其他值
}) => {
  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const hasEmptyDepends = useIsClearDependValues(dependValues);

  const requestRes = useRequest(request || (async () => []), {
    ...requestOptions,
    manual: true,
    debounceWait: debounceTime,
  });
  const { run, loading, data } = requestRes;

  useMount(() => {
    if (!request || outOptions?.length || cascaderProps.options?.length) return;
    run(...dependValues);
  });

  useDeepUpdateEffect(() => {
    if (!request || outOptions?.length || cascaderProps.options?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const cascaderOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, cascaderProps.options, data);
    return innerOptions;
  }, [outOptions, data, cascaderProps.options]);

  useImperativeHandle(actionRef, () => requestRes);

  const handleCahnge = useMemoizedFn((value, selectedOptions) => {
    onChange?.(value, selectedOptions);
    cascaderProps?.onChange?.(value, selectedOptions);
  });

  const dom = (
    <Cascader
      {...restProps}
      disabled={disabled ?? hasEmptyDepends}
      placeholder={placeholder}
      options={cascaderOptions}
      {...cascaderProps}
      value={value}
      onChange={handleCahnge}
    />
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {dom}
    </Spin>
  );
};

export default CascaderWrapper;
