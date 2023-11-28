import { useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { SegmentedProps, SpinProps } from 'antd';
import { Form, Segmented, Spin } from 'antd';
import type { SegmentedValue } from 'antd/lib/segmented';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type SegmentedWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  options?: SegmentedProps['options'];
  /**
   *antd分段组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  segmentedProps?:
    | SegmentedProps
    | {
        onChange?: (value: SegmentedValue) => void;
        options?: SegmentedProps['options'];
      };
  dependencies?: string[];

  outLoading?: SpinProps;
  /**
   *依赖项的值为空时展示的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSegmentedoProps
   */
  notDependRender?: ReactNode;
};

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
  actionRef,
  value,
  onChange,
  dependencies = emptyArray,
  notDependRender = <span>请先选择依赖项</span>,
  options: outOptions = emptyArray,
  request,
  outLoading,
  disabled,
  debounceTime,
  segmentedProps = emptyObject,
  requestOptions = emptyObject,
  name,
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
  useMount(() => {
    if (!request || outOptions?.length || segmentedProps.options?.length) return;
    run(...dependValues);
  });

  useDeepUpdateEffect(() => {
    if (!request || outOptions?.length || segmentedProps.options?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const segmentedOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, segmentedProps.options, data);
    return innerOptions;
  }, [outOptions, data, segmentedProps.options]);

  useImperativeHandle(actionRef, () => requestRes);

  const handleChange = useMemoizedFn((val: SegmentedValue) => {
    onChange?.(val);
    if (segmentedProps?.onChange) {
      segmentedProps?.onChange(val);
    }
  });

  const SegmentedDom = (
    <Segmented
      {...restProps}
      disabled={disabled ?? hasEmptyDepends}
      {...segmentedProps}
      options={segmentedOptions}
      value={value}
      onChange={handleChange}
    />
  );
  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {!hasEmptyDepends ? SegmentedDom : notDependRender}
    </Spin>
  );
};

export default SegmentedWrapper;
