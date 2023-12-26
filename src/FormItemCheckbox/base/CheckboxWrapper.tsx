import { useDeepCompareEffect, useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { CheckboxOptionType, SpinProps } from 'antd';
import { Checkbox, Form, Spin } from 'antd';
import type { CheckboxChangeEvent, CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { CSSProperties, FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo, useState } from 'react';

export type LCheckboxOptions = CheckboxOptionType;
export type LCheckboxBeforeAllProps =
  | {
      /**
       * 标题 label
       */
      label?: ReactNode;
      /**
       * 样式
       */
      style?: CSSProperties;
      /**
       * 失效状态
       */
      disabled?: boolean;
      /**
       * 变化时的回调函数
       */
      onChange?: (checked: boolean) => void;
    }
  | true;

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    /**
     *请求数据源的异步函数
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.28
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
     */
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    /**
     *自定义全选
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.28
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
     */
    beforeAll: LCheckboxBeforeAllProps | boolean;
    /**
     *多选框组件 Props
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.28
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
     */
    checkboxProps: CheckboxGroupProps;
    dependencies: string[];
    outLoading: SpinProps;
    /**
     *依赖项的值为空时展示的内容
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.28
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
     */
    notDependRender?: ReactNode;
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  value = emptyArray,
  actionRef,
  onChange,
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  request,
  debounceTime,
  beforeAll,
  checkboxProps = emptyObject,
  disabled,
  outLoading = emptyObject,
  notDependRender = <span>请先选择依赖项</span>,
  requestOptions,
  name,
  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

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
    if (!request || outOptions?.length || checkboxProps.options?.length) return;
    run(...dependValues);
  });

  useDeepUpdateEffect(() => {
    if (!request || outOptions?.length || checkboxProps.options?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const checkboxOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, checkboxProps.options, data);
    return innerOptions;
  }, [outOptions, data, checkboxProps.options]);

  useImperativeHandle(actionRef, () => requestRes);

  const outBeforeAll = useMemo(() => {
    if (typeof beforeAll === 'boolean') {
      return {};
    }
    return beforeAll;
  }, [beforeAll]);

  const checkAllChange = useMemoizedFn((e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    let checkAllValue: CheckboxValueType[] | undefined = void 0;
    if (checked) {
      // 排除disabled为true的数据
      checkAllValue = checkboxOptions
        .filter((item: CheckboxOptionType) => !item.disabled)
        .map((items: CheckboxOptionType) => items.value);
    }
    setIndeterminate(false);
    setCheckAll(checked);
    onChange?.(checkAllValue);
    outBeforeAll?.onChange?.(checked);
  });
  const handleChange = useMemoizedFn((checkedValue: CheckboxValueType[]) => {
    onChange?.(checkedValue);
    checkboxProps?.onChange?.(checkedValue);
  });

  useDeepCompareEffect(() => {
    if (!beforeAll) return;
    if (!value?.length) {
      setCheckAll(false);
      setIndeterminate(false);
    } else {
      const isAll = checkboxOptions.filter((item) => !item.disabled).length === value?.length;
      setIndeterminate(!isAll);
      setCheckAll(isAll);
    }
  }, [value]);

  const checkboxDom = (
    <>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{ marginRight: 8, ...outBeforeAll?.style }}
          disabled={disabled ?? (outBeforeAll?.disabled || hasEmptyDepends)}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {outBeforeAll?.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        {...restProps}
        options={checkboxOptions}
        disabled={disabled ?? hasEmptyDepends}
        {...checkboxProps}
        value={value}
        onChange={handleChange}
      />
    </>
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {hasEmptyDepends ? notDependRender : checkboxDom}
    </Spin>
  );
};

export default CheckboxWrapper;
