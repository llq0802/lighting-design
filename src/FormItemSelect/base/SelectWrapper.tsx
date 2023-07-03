import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { SelectProps, SpinProps } from 'antd';
import { Form, Select, Spin } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

export type SelectWrapperProps = Record<string, any> & {
  request?: (
    ...depends: any[]
  ) => Promise<
    { label: ReactNode; value: string | number; [key: string]: any }[]
  >;
  debounceTime?: number;
  disabled?: boolean;
  placeholder?: string;
  all?: boolean;
  allValue?: number | string;
  allLabel?: ReactNode;
  selectProps?: SelectProps;
  dependencies?: string[];
  outLoading?: SpinProps;
};

export interface LSelectOptions {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

const SelectWrapper: FC<SelectWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  placeholder,
  options: outOptions = [],
  request,
  debounceTime,
  all = false,
  disabled,
  allValue = '',
  allLabel = '全部',
  selectProps = {},
  outLoading = {},
  requestOptions = {},
  name,
  ...restProps
}) => {
  const [optsRequest, setOptsRequest] = useState<LSelectOptions[]>([]);
  const isFirst = useIsFirstRender(); // 组件是否第一次挂载

  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
    [outLoading],
  );
  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

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
      setOptsRequest([]);
      if (!hasLoading) setLoading(false);
    },
  });

  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  const options = useMemo<LSelectOptions[]>(() => {
    const rawOptions = selectProps.options || outOptions;
    if (all && rawOptions?.length > 0) {
      const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
      return retOptions;
    }
    return rawOptions;
  }, [all, allLabel, allValue, outOptions, selectProps.options]);

  const form = Form.useFormInstance();
  useDeepCompareEffect(() => {
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
        form.setFieldValue(name, void 0);
      }
      // 防抖调用
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        run(...dependValues);
      }
    }
  }, [dependValues]);

  const selectOptions = useMemo(() => {
    if (isClearDepends) {
      return [];
    } else if (optsRequest?.length > 0) {
      return optsRequest;
    } else if (options.length > 0) {
      return options;
    } else {
      return [];
    }
  }, [isClearDepends, options, optsRequest]);

  const handleChange = useMemoizedFn(
    (val: string, items: DefaultOptionType | DefaultOptionType[]) => {
      if (selectProps?.onChange) {
        selectProps?.onChange(val, items);
      }
      onChange(val);
    },
  );
  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <Select
        disabled={disabled ?? isClearDepends}
        options={selectOptions}
        placeholder={placeholder}
        allowClear
        style={{ width: '100%' }}
        {...selectProps}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default SelectWrapper;
