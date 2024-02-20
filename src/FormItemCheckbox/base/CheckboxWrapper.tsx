import { useDeepCompareEffect, useMemoizedFn, useRafState } from 'ahooks';
import type { CheckboxOptionType } from 'antd';
import { Checkbox, Spin } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, omit } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useRequestOptions } from 'lighting-design/hooks';
import type { CSSProperties, FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

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
    beforeAll: LCheckboxBeforeAllProps | boolean;
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  value = emptyArray,
  actionRef,
  onChange,
  dependencies = emptyArray,
  options: outOptions = emptyArray,
  request,
  beforeAll,
  fieldNames,
  disabled,
  outLoading = emptyObject,
  requestOptions,
  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useRafState<boolean>(false);
  const [checkAll, setCheckAll] = useRafState<boolean>(false);
  const checkboxProps = omit(restProps, dependencies);
  const requestRes = useRequestOptions({
    options: outOptions,
    request,
    requestOptions,
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
  }, [value]);

  const checkboxDom = (
    <>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{ marginRight: 8, ...outBeforeAll?.style }}
          disabled={disabled ?? outBeforeAll?.disabled}
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
    <Spin spinning={loading} style={publicSpinStyle} delay={20} {...outLoading}>
      {checkboxDom}
    </Spin>
  );
};

export default CheckboxWrapper;
