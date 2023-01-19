import { useDeepCompareEffect, useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import type { RateProps, SpinProps } from 'antd';
import { Rate, Spin } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type RateWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    disabled: boolean;
    debounceTime: number;
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
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);
  const isFirst = useRef<boolean>(true);

  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
    [outLoading],
  );

  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result: number) => {
      if (!hasLoading) setLoading(false);
      setReqvalue(result);
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setReqvalue(0);
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
    () => dependValues.some((nameValue) => nameValue === '' || nameValue == undefined),
    [dependValues],
  );

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
          setReqvalue(newOptions);
        } catch (error) {
          setReqvalue(0);
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
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
      <Rate
        disabled={disabled ?? isClearDepends}
        {...rateProps}
        value={selectValue}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default RateWrapper;
