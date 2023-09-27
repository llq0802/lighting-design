import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { RateProps, SpinProps } from 'antd';
import { Form, Rate, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

export type RateWrapperProps = Record<string, any> &
  Partial<{
    /**
     *请求总共的星数的异步函数
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.21
     *@memberof LFormItemRateProps
     */
    request: (...args: any[]) => Promise<number>;
    disabled: boolean;
    debounceTime: number;
    dependencies: string[];
    /**
     *antd评分组件 Props
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.21
     *@memberof LFormItemRateProps
     */
    rateProps: RateProps;
    outLoading: SpinProps;
  }>;

const RateWrapper: FC<RateWrapperProps> = ({
  value,
  onChange,
  count,
  outLoading,
  dependencies = emptyArray,
  request,
  debounceTime,
  rateProps = emptyObject,
  requestOptions = emptyObject,
  disabled,
  name,
  ...restProps
}) => {
  const [reqCount, setReqCount] = useState(0);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const isFirst = useIsFirstRender();

  const hasLoading = useMemo(
    () => Reflect.has(outLoading ?? {}, 'spinning'),
    [outLoading],
  );

  const { run } = useRequest(request || (async () => 0), {
    ...requestOptions,
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result: number) => {
      if (!hasLoading) setLoading(false);
      setReqCount(result);
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setReqCount(0);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
          setReqCount(newOptions);
        } catch (error) {
          setReqCount(0);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (value !== void 0 || value !== 0) {
        form.setFieldValue(name, void 0);
      }
      // 防抖调用
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        run(...dependValues);
      }
    }
  }, [dependValues]);

  const currentCount = useMemo(() => {
    if (isClearDepends) {
      return 0;
    } else if (reqCount) {
      return reqCount;
    } else {
      return count;
    }
  }, [isClearDepends, reqCount, count]);

  const handleChange = useMemoizedFn((num: number) => {
    if (rateProps?.onChange) {
      rateProps?.onChange(num);
    }
    onChange?.(num);
  });

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <Rate
        {...restProps}
        count={currentCount}
        disabled={disabled ?? isClearDepends}
        {...rateProps}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default RateWrapper;
