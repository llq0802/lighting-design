import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { SegmentedProps, SpinProps } from 'antd';
import { Segmented, Spin } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/lib/segmented';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type SegmentedWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  options?: SegmentedProps['options'];
  segmentedProps?:
    | SegmentedProps
    | { onChange?: (value: SegmentedValue) => void; options?: SegmentedProps['options'] };
  dependencies?: string[];
  outLoading?: SpinProps;
};

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  outLoading,
  debounceTime,
  segmentedProps = {},

  ...restProps
}) => {
  const [optsRequest, setOpts] = useState<(SegmentedValue | SegmentedLabeledOption)[]>([]);
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);

  const isFirst = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      setOpts([...result]);
    },
    onError: () => {
      setOpts([]);
    },
  });

  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
    [outLoading],
  );

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

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
    const rawOptions = segmentedProps?.options || outOptions;
    return rawOptions;
  }, [outOptions, segmentedProps?.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...depends);
          setOpts(newOptions);
          if (!hasLoading) setLoading(false);
        } catch (error) {
          setOpts([]);
          if (!hasLoading) setLoading(false);
        }
      })();
    } else {
      // 防抖调用
      run(...depends);
    }
  }, [restProps]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const selectOptions = useMemo(() => {
    if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (opts.length > 0) {
      return opts;
    } else {
      return [];
    }
  }, [opts, optsRequest]);

  const handleChange = useCallback(
    (val: SegmentedValue) => {
      if (segmentedProps?.onChange) {
        segmentedProps?.onChange(val);
      }
      onChange(val);
    },
    [onChange, segmentedProps],
  );

  return (
    <>
      <Spin spinning={loading} style={{ marginLeft: 32, width: 'fit-content' }} {...outLoading}>
        {/* @ts-ignore */}
        <Segmented
          disabled={isClearDepends}
          {...segmentedProps}
          options={selectOptions}
          value={value}
          onChange={handleChange}
        />
      </Spin>
    </>
  );
};

export default SegmentedWrapper;
