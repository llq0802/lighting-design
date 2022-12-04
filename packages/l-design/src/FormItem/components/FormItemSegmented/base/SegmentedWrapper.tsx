import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { SegmentedProps } from 'antd';
import { Segmented } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/lib/segmented';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type SegmentedWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  segmentedProps?: SegmentedProps;
  dependencies?: string[];
  options?: SegmentedProps['options'];
};

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  segmentedProps = {},
  ...restProps
}) => {
  const [optsRequest, setOpts] = useState<(SegmentedValue | SegmentedLabeledOption)[]>([]);
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
          const newOptions = await request(...depends);
          setOpts([...newOptions]);
        } catch (error) {
          setOpts([]);
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
        // @ts-ignore
        segmentedProps?.onChange(val);
      }
      onChange(val);
    },
    [onChange, segmentedProps],
  );

  return (
    // @ts-ignore
    <Segmented
      disabled={isClearDepends}
      {...segmentedProps}
      options={selectOptions}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SegmentedWrapper;
