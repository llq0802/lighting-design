import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { SelectProps, SpinProps } from 'antd';
import { Select, Spin } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type SelectWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  disabled?: boolean;
  placeholder?: string;
  all?: boolean;
  allValue?: number | string;
  allLabel?: ReactNode;
  selectProps?: SelectProps;
  dependencies?: string[];
  outLoading?: SpinProps;
};

const SelectWrapper: FC<SelectWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  placeholder,
  options: outOptions = [],
  request,
  debounceTime,
  all = false,
  disabled,
  allValue = '',
  allLabel = '全部',
  selectProps = {},
  outLoading,

  ...restProps
}) => {
  const [optsRequest, setOptsRequest] = useState<{ label: ReactNode; value: string | number }[]>(
    [],
  );
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);

  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
    [outLoading],
  );

  const isFirst = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      if (!hasLoading) setLoading(false);
      if (all && result?.length > 0) {
        setOptsRequest([{ label: allLabel, value: allValue }, ...result]);
      } else {
        setOptsRequest([...result]);
      }
    },
    onError: () => {
      setOptsRequest([]);
      if (!hasLoading) setLoading(false);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  // 获取依赖项的值
  const dependValue = useMemo(
    () => dependencies?.map((nameStr) => restProps[nameStr]),
    [dependencies, restProps],
  );

  // 判断依赖项的值是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      dependValue?.some(
        (nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length,
      ),
    [dependValue],
  );

  const options = useMemo(() => {
    const rawOptions = selectProps.options || outOptions;
    if (all && rawOptions?.length > 0) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, selectProps.options]);
  // console.log('isFirst.current', isFirst.current);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      if (isClearDepends) return;
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValue);
          if (all && newOptions?.length > 0) {
            setOptsRequest([{ label: allLabel, value: allValue }, ...newOptions]);
          } else {
            setOptsRequest([...newOptions]);
          }
        } catch (error) {
          setOptsRequest([]);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        // 防抖调用
        run(...dependValue);
      }
    }
  }, [dependValue]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const selectOptions = useMemo(() => {
    if (isClearDepends) {
      return [];
    } else if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (options.length > 0) {
      return options;
    } else {
      return [];
    }
  }, [isClearDepends, options, optsRequest]);

  const handleChange = useCallback(
    (val: string, items: DefaultOptionType | DefaultOptionType[]) => {
      if (selectProps?.onChange) {
        selectProps?.onChange(val, items);
      }
      onChange(val);
    },
    [onChange, selectProps],
  );
  return (
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
      <Select
        disabled={disabled}
        options={selectOptions}
        placeholder={placeholder}
        allowClear
        style={{ width: '100%' }}
        {...selectProps}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default SelectWrapper;
