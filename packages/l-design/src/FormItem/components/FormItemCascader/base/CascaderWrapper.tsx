import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { CascaderProps, SpinProps } from 'antd';
import { Cascader, Spin } from 'antd';
import type { FC } from 'react';
import { useMemo, useRef, useState } from 'react';

export type CascaderWrapperProps = Record<string, any> & {
  options?: CascaderProps<any>['options'];
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  cascaderProps?: CascaderProps<any>;
  dependencies?: string[];
  outLoading?: SpinProps;
};

export interface CascaderOption {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: CascaderOption[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}

const CascaderWrapper: FC<CascaderWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  cascaderProps = {},
  placeholder,
  outLoading,
  disabled,
  ...restProps // LFormItem传过来的其他值
}) => {
  const [optsRequest, setOptsRequest] = useState<CascaderOption[]>([]);
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

  // 获取依赖项
  const dependValues = useMemo(() => {
    if (!dependencies.length) {
      return [];
    }
    return dependencies?.map((nameStr) => restProps[nameStr]);
  }, [dependencies, restProps]);
  // 判断依赖项是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      dependencies.length > 0 &&
      dependValues.some(
        (nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length,
      ),
    [dependValues, dependencies.length],
  );

  const opts = useMemo(
    () => cascaderProps.options || outOptions,
    [cascaderProps.options, outOptions],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    if (isClearDepends) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
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
  }, [restProps]);

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

  return (
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
      <Cascader
        disabled={disabled}
        placeholder={placeholder}
        options={selectOptions}
        {...cascaderProps}
        value={value}
        onChange={onChange}
      />
    </Spin>
  );
};

export default CascaderWrapper;
