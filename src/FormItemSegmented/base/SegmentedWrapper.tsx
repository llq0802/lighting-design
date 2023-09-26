import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { SegmentedProps, SpinProps } from 'antd';
import { Form, Segmented, Spin } from 'antd';
import type {
  SegmentedLabeledOption,
  SegmentedValue,
} from 'antd/lib/segmented';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

export type SegmentedWrapperProps = Record<string, any> & {
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  options?: SegmentedProps['options'];
  /**
   *antd分段组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemSegmentedoProps
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
   *@version 2.1.20
   *@memberof LFormItemSegmentedoProps
   */
  notDependRender?: ReactNode;
};

const SegmentedWrapper: FC<SegmentedWrapperProps> = ({
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
  const [optsRequest, setOptsRequest] = useState<
    (SegmentedValue | SegmentedLabeledOption)[]
  >([]);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );

  const hasLoading = useMemo(
    () => Reflect.has(outLoading ?? {}, 'spinning'),
    [outLoading],
  );
  const isFirst = useIsFirstRender(); // 组件是否第一次挂载

  const { run } = useRequest(request || (async () => []), {
    ...requestOptions,
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      if (!hasLoading) setLoading(false);
      setOptsRequest([...result]);
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setOptsRequest([]);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  const opts = useMemo(() => {
    const rawOptions = segmentedProps?.options || outOptions;
    return rawOptions;
  }, [outOptions, segmentedProps?.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirst) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
          setOptsRequest(newOptions);
        } catch (error) {
          setOptsRequest([]);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (value !== void 0) {
        form.setFieldValue(name, void 0);
      }
      // 防抖调用
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        run(...dependValues);
      }
    }
  }, [dependValues]);

  const segmentedOptions = useMemo(() => {
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

  const handleChange = useMemoizedFn((val: SegmentedValue) => {
    if (segmentedProps?.onChange) {
      segmentedProps?.onChange(val);
    }
    onChange?.(val);
  });

  const SegmentedDom = (
    //  @ts-ignore
    <Segmented
      {...restProps}
      disabled={disabled ?? isClearDepends}
      {...segmentedProps}
      options={segmentedOptions}
      value={value}
      onChange={handleChange}
    />
  );
  return (
    <Spin
      spinning={loading}
      style={{ marginLeft: 40, width: 'fit-content' }}
      {...outLoading}
    >
      {!isClearDepends ? SegmentedDom : notDependRender}
    </Spin>
  );
};

export default SegmentedWrapper;
