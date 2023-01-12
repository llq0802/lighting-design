import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
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
  disabled = false,
  allValue = '',
  allLabel = '全部',
  selectProps = {},

  ...restProps
}) => {
  const [optsRequest, setOptsRequest] = useState<{ label: ReactNode; value: string | number }[]>(
    [],
  );
  const isFirst = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      if (all && result?.length > 0) {
        setOptsRequest([{ label: allLabel, value: allValue }, ...result]);
      } else {
        setOptsRequest([...result]);
      }
    },
    onError: () => {
      setOptsRequest([]);
    },
  });
  // 获取依赖项
  const depends = useMemo(
    () => dependencies?.map((nameStr) => restProps[nameStr]),
    [dependencies, restProps],
  );
  // 判断依赖项是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      depends.some((nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length),
    [depends],
  );

  const opts = useMemo(() => {
    const rawOptions = selectProps.options || outOptions;
    if (all && rawOptions?.length > 0) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, selectProps.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      (async () => {
        try {
          const newOptions = await request(...depends);
          if (all && newOptions?.length > 0) {
            setOptsRequest([{ label: allLabel, value: allValue }, ...newOptions]);
          } else {
            setOptsRequest([...newOptions]);
          }
        } catch (error) {
          setOptsRequest([]);
        }
      })();
    } else {
      // 防抖调用
      run(...depends);
    }
  }, [restProps, allLabel, allValue, all]);

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
    } else if (opts.length > 0) {
      return opts;
    } else {
      return [];
    }
  }, [isClearDepends, opts, optsRequest]);

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
  );
};

export default SelectWrapper;
