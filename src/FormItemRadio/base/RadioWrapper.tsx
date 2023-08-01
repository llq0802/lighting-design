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
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

export type RadioWrapperProps = Record<string, any> & {
  /**
   * 请求数据源的异步函数
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  request?: (...depends: any[]) => Promise<LRadioOptions[]>;
  /**
   * 当依赖项发生变化时重新请求的防抖时间
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  debounceTime?: number;
  /**
   * 是否需要全部的选项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  all?: boolean;
  /**
   * 全部选项的值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  allValue?: number | string;
  /**
   * 全部选项的名称
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  allLabel?: ReactNode;
  /**
   * 单选组件 Props
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  radioProps?: RadioGroupProps;
  dependencies?: string[];
  outLoading?: SpinProps;
  /**
   * 依赖项的值为空时展示的内容
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.14
   * @memberof LFormItemRadioProps
   */
  notDependRender?: ReactNode;
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

  notDependRender = <span>请先选择依赖项</span>,

  radioProps = {},
  requestOptions = {},

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

  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  // // 获取依赖项的值
  // const dependValues = useMemo(() => {
  //   if (!dependencies.length) {
  //     return [];
  //   }
  //   return dependencies?.map((nameStr) => restProps[nameStr]);
  // }, [dependencies, restProps]);

  // // 判断依赖项的值是否有空或undefined或者空数组
  // const isClearDepends = useMemo(() => {
  //   if (!dependValues.length) return false;

  //   if (dependValues.length === 1) {
  //     return dependValues.some(
  //       (nameValue) =>
  //         nameValue === undefined ||
  //         nameValue === null ||
  //         nameValue === '' ||
  //         !nameValue?.length,
  //     );
  //   }
  //   return dependValues.every(
  //     (nameValue) =>
  //       nameValue === undefined ||
  //       nameValue === null ||
  //       nameValue === '' ||
  //       !nameValue?.length,
  //   );
  // }, [dependValues]);

  // const dependValues = Form.useWatch(dependencies, form);
  // // 判断依赖项的值是否有空或undefined或者空数组
  // const isClearDepends = useMemo(
  //   () =>
  //     dependencies.length &&
  //     (dependValues === undefined ||
  //       dependValues === '' ||
  //       !dependValues.length),
  //   [dependValues],
  // );

  const opts = useMemo(() => {
    const rawOptions = radioProps.options || outOptions;
    if (all && rawOptions?.length) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, radioProps.options]);

  const { run } = useRequest(request || (async () => []), {
    ...requestOptions,
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

  useDeepCompareEffect(() => {
    // 没有请求函数
    if (!request) return;
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
      if (value !== void 0) {
        // formInstance.setFieldValue(name, undefined);
        // form.resetFields([name]);
        form.setFieldValue(name, void 0);
      }
      // 防抖调用
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        run(...dependValues);
      }
    }
  }, [dependValues]);

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
    onChange?.(val);
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
      {isClearDepends ? notDependRender : radioDom}
    </Spin>
  );
};

export default RadioWrapper;
