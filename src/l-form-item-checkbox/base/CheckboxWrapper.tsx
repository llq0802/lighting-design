import { useDeepCompareEffect, useMemoizedFn, useRafState } from 'ahooks';
import type { CheckboxOptionType } from 'antd';
import { Checkbox, Spin } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import { getOptions } from 'lighting-design/utils';
import type { FC } from 'react';
import { useImperativeHandle, useMemo } from 'react';
import type { LCheckboxBeforeAllProps } from '../interface';

export type LCheckboxOptions = CheckboxOptionType;

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    beforeAll: LCheckboxBeforeAllProps | boolean;
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  name,
  initialValue,
  value = emptyArray,
  actionRef,
  autoRequest,
  refreshDeps,
  onChange,
  options: outOptions = emptyArray,
  request,
  beforeAll,
  fieldNames,
  disabled,
  outLoading = emptyObject,
  requestOptions,
  ...restProps
}) => {
  const checkboxProps = restProps;
  const [indeterminate, setIndeterminate] = useRafState<boolean>(false);
  const [checkAll, setCheckAll] = useRafState<boolean>(false);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
    autoRequest,
    refreshDeps,
    name,
    initialValue,
  });
  const { loading, data } = requestRes;

  const checkboxOptions = useMemo(() => {
    let innerOpts = getOptions(outOptions, data);
    if (fieldNames) {
      innerOpts = innerOpts.map((item) => ({
        ...item,
        label: item[fieldNames?.label ?? 'label'],
        value: item[fieldNames?.value ?? 'value'],
      }));
    }
    return innerOpts;
  }, [outOptions, data]);

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
  }, [value, checkboxOptions]);

  const checkboxDom = (
    <>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{ marginRight: 8, ...outBeforeAll?.style }}
          disabled={outBeforeAll?.disabled || disabled}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {outBeforeAll?.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        options={checkboxOptions}
        disabled={disabled}
        {...checkboxProps}
        value={value}
        onChange={onChange}
      />
    </>
  );

  return outOptions?.length ? (
    checkboxDom
  ) : (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {checkboxDom}
    </Spin>
  );
};

export default CheckboxWrapper;
