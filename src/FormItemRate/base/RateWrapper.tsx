import {
  useDeepCompareEffect,
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
import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

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
  outLoading = {},
  dependencies = [],
  request,
  debounceTime,
  rateProps = {},
  disabled,
  name,
  ...restProps
}) => {
  const [reqValue, setReqvalue] = useState(0);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const isFirst = useIsFirstRender();

  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
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

  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isClearDepends) return;
    if (isFirst) {
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
      if (value !== void 0) {
        form.setFieldValue(name, void 0);
      }
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);

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
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
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
