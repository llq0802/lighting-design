import { useDeepCompareEffect, useRequest, useUpdateEffect } from 'ahooks';
import type { RateProps, SpinProps } from 'antd';
import { Rate, Spin } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type RateWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    disabled: boolean;
    debounceTimex: number;
    dependencies: string[];
    rateProps: RateProps;
    outLoading: SpinProps;
  }>;

const RateWrapper: FC<RateWrapperProps> = ({
  value = 0,
  onChange,
  outLoading,
  dependencies = [],
  request,
  debounceTime,
  rateProps = {},
  disabled,
  ...restProps
}) => {
  const [reqValue, setReqvalue] = useState(0);
  const [loading, setLoading] = useState<boolean>(outLoading?.spinning || false);
  const isFirst = useRef<boolean>(true);
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result: number) => {
      setReqvalue(result);
    },
    onError: () => {
      setReqvalue(0);
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
    () => depends.some((nameValue) => nameValue === '' || nameValue == undefined),
    [depends],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst.current) {
      isFirst.current = false;
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...depends);
          setReqvalue(newOptions);
          if (!hasLoading) setLoading(false);
        } catch (error) {
          setReqvalue(0);
          if (!hasLoading) setLoading(false);
        }
      })();
    } else {
      run(...depends);
    }
  }, [restProps]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

  const selectValue = useMemo(() => {
    if (request) {
      return reqValue;
    } else {
      return value || 0;
    }
  }, [reqValue, request, value]);

  const handleChange = useCallback(
    (num: number) => {
      if (rateProps?.onChange) {
        rateProps?.onChange(num);
      }
      onChange(num);
    },
    [onChange, rateProps],
  );

  return (
    <>
      {loading ? (
        <Spin spinning style={{ marginLeft: 16 }} {...outLoading} />
      ) : (
        <Rate
          disabled={disabled ?? isClearDepends}
          {...rateProps}
          value={selectValue}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default RateWrapper;
