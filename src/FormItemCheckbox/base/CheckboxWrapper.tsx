import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { CheckboxOptionType, SpinProps } from 'antd';
import { Checkbox, Spin } from 'antd';
import type {
  CheckboxChangeEvent,
  CheckboxGroupProps,
} from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { useIsFirstRender } from 'lighting-design/_utils';
import type { CSSProperties, FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

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
      onChange?: (e: CheckboxValueType[]) => void;
    }
  | true;

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    /**
     * 自定义全选
     */
    beforeAll: LCheckboxBeforeAllProps | boolean;
    checkboxProps: CheckboxGroupProps;
    dependencies: string[];
    outLoading: SpinProps;
    notDependRender?: () => ReactNode;
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  value = [],
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  beforeAll,
  checkboxProps = {},
  disabled,
  outLoading = {},
  notDependRender = () => <span>请先选择依赖项</span>,

  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const [optsRequest, setOptsRequest] = useState<LCheckboxOptions[]>([]);
  const isFirst = useIsFirstRender();

  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
    [outLoading],
  );
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      if (!hasLoading) setLoading(false);
      setOptsRequest([...result]);
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setOptsRequest([]);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);
  // 获取依赖项的值
  const dependValues = useMemo(() => {
    if (!dependencies.length) {
      return [];
    }
    return dependencies?.map((nameStr) => restProps[nameStr]);
  }, [dependencies, restProps]);
  // 判断依赖项的值是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      dependencies.length > 0 &&
      dependValues.some(
        (nameValue) =>
          nameValue === undefined || nameValue === '' || !nameValue?.length,
      ),
    [dependValues, dependencies.length],
  );
  const opts = useMemo(() => {
    const rawOptions = checkboxProps.options || outOptions;
    return rawOptions;
  }, [outOptions, checkboxProps.options]);
  useDeepCompareEffect(() => {
    if (!request) return;
    if (isClearDepends) return;
    // 组件第一次加载时调用request
    if (isFirst) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
          setOptsRequest([...newOptions]);
        } catch (error) {
          setOptsRequest([]);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);
  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value?.length > 0 && value !== undefined) {
      onChange(undefined);
    }
  }, [isClearDepends]);

  const outBeforeAll = useMemo(() => {
    if (typeof beforeAll === 'boolean') {
      return {};
    }
    return beforeAll;
  }, [beforeAll]);

  const checkboxOptions = useMemo(() => {
    if (isClearDepends) {
      return [];
    } else if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (opts.length > 0) {
      return opts;
    } else {
      return [];
    }
  }, [isClearDepends, opts, optsRequest]);
  const checkAllChange = useMemoizedFn((e: CheckboxChangeEvent) => {
    let checkAllValue: CheckboxValueType[] = [];
    if (e.target.checked) {
      // 排除disabled为true的数据
      checkAllValue = checkboxOptions
        .filter((item: CheckboxOptionType) => !item.disabled)
        .map((items: CheckboxOptionType) => items.value);
    }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    onChange(checkAllValue);
    outBeforeAll?.onChange?.(checkAllValue);
  });
  const handleChange = useMemoizedFn((checkedValue: CheckboxValueType[]) => {
    if (beforeAll) {
      // 排除disabled为true的数据
      const optLength = checkboxOptions.filter(
        (item: CheckboxOptionType) => !item.disabled,
      ).length;

      setIndeterminate(
        !!checkedValue.length && checkedValue.length < optLength,
      );
      setCheckAll(checkedValue.length === optLength);
    }
    checkboxProps?.onChange?.(checkedValue);
    onChange(checkedValue);
  });

  useDeepCompareEffect(() => {
    if (beforeAll && !value?.length) {
      setCheckAll(false);
      setIndeterminate(false);
    }
  }, [value]);

  const checkboxDom = (
    <>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{ marginRight: 8, ...outBeforeAll?.style }}
          disabled={disabled ?? (outBeforeAll?.disabled || isClearDepends)}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {outBeforeAll?.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        options={checkboxOptions}
        disabled={disabled ?? isClearDepends}
        {...checkboxProps}
        value={value}
        onChange={handleChange}
      />
    </>
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {isClearDepends ? notDependRender() : checkboxDom}
    </Spin>
  );
};

export default CheckboxWrapper;
