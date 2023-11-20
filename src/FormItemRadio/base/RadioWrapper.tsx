import { useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { CheckboxOptionType, RadioChangeEvent, RadioGroupProps, SpinProps } from 'antd';
import { Form, Radio, Spin } from 'antd';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type RadioWrapperProps = Record<string, any> & {
  /**
   * 请求数据源的异步函数
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  request?: (...depends: any[]) => Promise<LRadioOptions[]>;
  /**
   * 当依赖项发生变化时重新请求的防抖时间
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  debounceTime?: number;
  /**
   * 是否需要全部的选项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  all?: boolean;
  /**
   * 全部选项的值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  allValue?: number | string;
  /**
   * 全部选项的名称
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  allLabel?: ReactNode;
  /**
   * 单选组件 Props
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  radioProps?: RadioGroupProps;
  dependencies?: string[];
  outLoading?: SpinProps;
  /**
   * 依赖项的值为空时展示的内容
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRadioProps
   */
  notDependRender?: ReactNode;
};
export type LRadioOptions = CheckboxOptionType;

export const publicSpinStyle = { marginLeft: 40, width: 'fit-content' };

const RadioWrapper: FC<RadioWrapperProps> = ({
  name,
  actionRef,
  value,
  onChange,
  outLoading,
  dependencies = emptyArray,
  disabled,
  options: outOptions,
  request,
  debounceTime,
  all = false,
  allValue = 'all',
  allLabel = '全部',

  notDependRender = <span>请先选择依赖项</span>,

  radioProps = emptyObject,
  requestOptions = emptyObject,

  ...restProps
}) => {
  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const hasEmptyDepends = useIsClearDependValues(dependValues);

  const requestRes = useRequest(request || (async () => []), {
    ...requestOptions,
    manual: true,
    debounceWait: debounceTime,
  });
  const { run, loading, data } = requestRes;
  useMount(async () => {
    if (!request || outOptions?.length || radioProps.options?.length) return;
    run(...dependValues);
  });

  useDeepUpdateEffect(() => {
    if (!request || outOptions?.length || radioProps.options?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const radioOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, radioProps.options, data);
    if (all && innerOptions?.length > 0) {
      return [{ label: allLabel, value: allValue }, ...innerOptions];
    }
    return innerOptions;
  }, [all, outOptions, data, radioProps.options]);

  useImperativeHandle(actionRef, () => requestRes);

  const handleChange = useMemoizedFn((val: RadioChangeEvent) => {
    if (radioProps?.onChange) {
      radioProps?.onChange(val);
    }
    onChange?.(val);
  });

  const radioDom = (
    <Radio.Group
      {...restProps}
      options={radioOptions}
      disabled={disabled ?? hasEmptyDepends}
      {...radioProps}
      value={value}
      onChange={handleChange}
    />
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {hasEmptyDepends ? notDependRender : radioDom}
    </Spin>
  );
};

export default RadioWrapper;
