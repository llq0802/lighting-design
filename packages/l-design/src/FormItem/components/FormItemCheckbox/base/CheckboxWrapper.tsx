import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { CheckboxOptionType, SpinProps } from 'antd';
import { Checkbox, Spin } from 'antd';
import type { CheckboxChangeEvent, CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

type beforeAllProps = {
  /**
   * 标题 label
   */
  label?: React.ReactNode;
  /**
   * 值 value
   */
  value?: CheckboxValueType;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 失效状态
   */
  disabled?: boolean;
  /**
   * 变化时的回调函数
   */
  onChange?: (e: CheckboxValueType[]) => void;
};

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    /**
     * 自定义全选
     */
    beforeAll: beforeAllProps | boolean;
    checkboxProps: CheckboxGroupProps;
    dependencies: string[];
    outLoading: SpinProps;
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
  outLoading,

  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);

  const [optsRequest, setOptsRequest] = useState<{ label: ReactNode; value: string | number }[]>(
    [],
  );
  const isFirst = useRef<boolean>(true);

  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
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
  const dependValues = useMemo(
    () => dependencies?.map((nameStr) => restProps[nameStr]),
    [dependencies, restProps],
  );
  // 判断依赖项的值是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      dependValues.some(
        (nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length,
      ),
    [dependValues],
  );

  const opts = useMemo(() => {
    const rawOptions = checkboxProps.options || outOptions;
    return rawOptions;
  }, [outOptions, checkboxProps.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      if (isClearDepends) return;
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
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        // 防抖调用
        run(...dependValues);
      }
    }
  }, [dependValues]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const checkboxOptions = useMemo(() => {
    if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (opts.length > 0) {
      return opts;
    } else {
      return [];
    }
  }, [opts, optsRequest]);

  const checkAllChange = useCallback(
    (e: CheckboxChangeEvent) => {
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
      beforeAll?.onChange?.(checkAllValue);
    },
    [beforeAll, onChange, checkboxOptions],
  );

  const handleChange = useCallback(
    (checkedValue: CheckboxValueType[]) => {
      if (beforeAll) {
        // 排除disabled为true的数据
        const optLength = checkboxOptions.filter(
          (item: CheckboxOptionType) => !item.disabled,
        ).length;

        setIndeterminate(!!checkedValue.length && checkedValue.length < optLength);
        setCheckAll(checkedValue.length === optLength);
      }
      checkboxProps?.onChange?.(checkedValue);
      onChange(checkedValue);
    },
    [beforeAll, checkboxProps, onChange, checkboxOptions],
  );
  return (
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{
            marginRight: '8px',
            ...beforeAll?.style,
          }}
          disabled={disabled ?? (beforeAll?.disabled || isClearDepends)}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {beforeAll?.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        options={checkboxOptions}
        disabled={disabled ?? isClearDepends}
        {...checkboxProps}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default CheckboxWrapper;
