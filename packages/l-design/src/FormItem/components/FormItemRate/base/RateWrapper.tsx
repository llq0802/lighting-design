import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { RateProps } from 'antd';
import { Rate } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type RateWrapperProps = Record<string, any> &
  Partial<{
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    dependencies: string[];
    rateProps: RateProps;
  }>;

const RateWrapper: FC<RateWrapperProps> = ({
  value = 0,
  onChange,
  dependencies = [],
  request,
  debounceTime,
  rateProps = {},

  ...restProps
}) => {
  const [reqValue, setReqvalue] = useState(0);
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
          const newOptions = await request(...depends);
          setReqvalue(newOptions);
        } catch (error) {
          setReqvalue(0);
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
      <Rate disabled={isClearDepends} {...rateProps} value={selectValue} onChange={handleChange} />
    </>
  );
};

export default RateWrapper;
