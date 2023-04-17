import {
  useDeepCompareEffect,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { CascaderProps, SpinProps } from 'antd';
import { Cascader, Form, Spin } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

export type CascaderWrapperProps = Record<string, any> & {
  options?: CascaderProps<any>['options'];
  request?: (...args: any[]) => Promise<any>;
  debounceTime?: number;
  cascaderProps?: CascaderProps<any>;
  dependencies?: string[];
  outLoading?: SpinProps;
};

export interface LCascaderOption {
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
  children?: LCascaderOption[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}

const CascaderWrapper: FC<CascaderWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  cascaderProps = {},
  placeholder,
  outLoading = {},
  disabled,
  name,
  ...restProps // LFormItem传过来的其他值
}) => {
  const [optsRequest, setOptsRequest] = useState<LCascaderOption[]>([]);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
    [outLoading],
  );
  const isFirst = useIsFirstRender(); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
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

  const opts = useMemo(
    () => cascaderProps.options || outOptions,
    [cascaderProps.options, outOptions],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    if (isClearDepends) return;
    // 组件第一次加载时调用request
    if (isFirst) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newOptions = await request(...dependValues);
          setOptsRequest([...newOptions]);
        } catch (error) {
          setOptsRequest([]);
        }
        if (!hasLoading) setLoading(false);
      })();
    } else {
      if (value?.length) {
        form.setFieldValue(name, void 0);
      }
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);

  const selectOptions = useMemo<LCascaderOption[]>(() => {
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

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <Cascader
        disabled={disabled ?? isClearDepends}
        placeholder={placeholder}
        options={selectOptions}
        {...cascaderProps}
        value={value}
        onChange={onChange}
      />
    </Spin>
  );
};

export default CascaderWrapper;