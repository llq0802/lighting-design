import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { CheckboxOptionType, RadioChangeEvent, RadioGroupProps, SpinProps } from 'antd';
import { Radio, Spin } from 'antd';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type RadioWrapperProps = Record<string, any> & {
  request?: (...depends: any[]) => Promise<LRadioOptions[]>;
  debounceTime?: number;
  all?: boolean;
  allValue?: number | string;
  allLabel?: ReactNode;
  radioProps?: RadioGroupProps;
  dependencies?: string[];
  outLoading?: SpinProps;
  notDependRender?: () => ReactNode;
};
export type LRadioOptions = CheckboxOptionType;

const RadioWrapper: FC<RadioWrapperProps> = ({
  value,
  onChange,
  outLoading,
  dependencies = [],
  disabled,
  options: outOptions = [],
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',

  notDependRender = () => <span>请先选择依赖项</span>,

  radioProps = {},

  ...restProps
}) => {
  const [optsRequest, setOptsRequest] = useState<LRadioOptions[]>([]);
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);
  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
    [outLoading],
  );

  const isFirst = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    defaultParams: [],
    onSuccess: (result) => {
      if (!hasLoading) setLoading(false);

      if (all && result?.length > 0) {
        setOptsRequest([{ label: allLabel, value: allValue }, ...result]);
      } else {
        setOptsRequest([...result]);
      }
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setOptsRequest([]);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  // 获取依赖项的注意
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
        (nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length,
      ),
    [dependencies.length, dependValues],
  );

  const opts = useMemo(() => {
    const rawOptions = radioProps.options || outOptions;
    if (all && rawOptions?.length > 0) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, radioProps.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isClearDepends) return;
    if (isFirst.current) {
      isFirst.current = false;
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
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
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);
  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const radioOptions = useMemo(() => {
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
    (val: RadioChangeEvent) => {
      if (radioProps?.onChange) {
        radioProps?.onChange(val);
      }
      onChange(val);
    },
    [onChange, radioProps],
  );

  const radioDom = (
    <Radio.Group
      options={radioOptions}
      disabled={disabled ?? isClearDepends}
      {...radioProps}
      value={value}
      onChange={handleChange}
    />
  );

  return (
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
      {isClearDepends ? notDependRender() : radioDom}
    </Spin>
  );
};

export default RadioWrapper;
