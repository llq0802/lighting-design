import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type {
  CheckboxOptionType,
  RadioChangeEvent,
  RadioGroupProps,
  SpinProps,
} from 'antd';
import { Form, Radio, Spin } from 'antd';
import { useIsFirstRender } from 'lighting-design/_utils';
import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

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

export const publicSpinStyle = { marginLeft: 40, width: 'fit-content' };

const RadioWrapper: FC<RadioWrapperProps> = ({
  name,
  value,
  onChange,
  outLoading = {},
  dependencies = [],
  disabled,
  options: outOptions = [],
  request,
  debounceTime,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  notDependRender = () => <span>请先选择依赖项</span>,

  radioProps = {},

  formInstance,
  ...restProps
}) => {
  const [optsRequest, setOptsRequest] = useState<LRadioOptions[]>([]);
  const [loading, setLoading] = useSafeState(outLoading?.spinning || false);
  const isFirst = useIsFirstRender(); // 组件是否第一次挂载

  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
    [outLoading],
  );

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  // 获取依赖项的值
  const dependValues = useMemo(() => {
    if (!dependencies.length) {
      return [];
    }
    return dependencies?.map((nameStr) => restProps[nameStr]);
  }, [dependencies, restProps]);
  // 判断依赖项的值是否有空或undefined或者空数组
  const isClearDepends = useMemo(
    () =>
      dependencies.length &&
      dependValues.some(
        (nameValue) =>
          nameValue === undefined || nameValue === '' || !nameValue?.length,
      ),
    [dependencies.length, dependValues],
  );

  const opts = useMemo(() => {
    const rawOptions = radioProps.options || outOptions;
    if (all && rawOptions?.length) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, radioProps.options]);

  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
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

  const form = Form.useFormInstance();
  useDeepCompareEffect(() => {
    // 没有请求函数
    if (!request) return;
    // 依赖项的值是否空数据
    if (isClearDepends) return;
    // 组件第一次加载时调用request
    if (isFirst) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
          if (all && newOptions?.length > 0) {
            setOptsRequest([
              { label: allLabel, value: allValue },
              ...newOptions,
            ]);
          } else {
            setOptsRequest([...newOptions]);
          }
        } catch (error) {
          setOptsRequest([]);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (value !== undefined) {
        // formInstance.setFieldValue(name, undefined);
        form.resetFields([name]);
      }
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);

  // 依赖清除
  // useDeepCompareEffect(() => {
  //   if (isClearDepends && value !== undefined) {
  //     onChange(undefined);
  //   }
  // }, [isClearDepends]);

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

  const handleChange = useMemoizedFn((val: RadioChangeEvent) => {
    if (radioProps?.onChange) {
      radioProps?.onChange(val);
    }
    onChange(val);
  });

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
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {isClearDepends ? notDependRender() : radioDom}
    </Spin>
  );
};

export default RadioWrapper;
