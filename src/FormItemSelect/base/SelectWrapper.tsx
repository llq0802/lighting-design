import { useMemoizedFn, useMount, useRequest } from 'ahooks';
import type { SelectProps, SpinProps } from 'antd';
import { Form, Select, Spin } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import { getOptions, useDependValues, useIsClearDependValues } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import useDeepUpdateEffect from 'lighting-design/useDeepUpdateEffect';
import type { FC, ReactNode } from 'react';
import { useImperativeHandle, useMemo } from 'react';

export type SelectWrapperProps = Record<string, any> & {
  request?: (
    ...depends: any[]
  ) => Promise<{ label: ReactNode; value: string | number; [key: string]: any }[]>;
  debounceTime?: number;
  disabled?: boolean;
  placeholder?: string;
  /**
   *是否需要全部选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  all?: boolean;
  /**
   *全部选项的值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allValue?: number | string;
  /**
   *全部选项的名称
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allLabel?: ReactNode;
  /**
   *下拉选择器组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  selectProps?: SelectProps;
  dependencies?: string[];
  outLoading?: SpinProps;
};

export interface LSelectOptions {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

// const SelectWrapper: FC<SelectWrapperProps> = ({
//   value,
//   onChange,
//   dependencies = emptyArray,
//   placeholder,
//   options: outOptions = emptyArray,
//   request,
//   debounceTime,
//   all = false,
//   disabled,
//   allValue = '',
//   allLabel = '全部',
//   selectProps = emptyObject,
//   outLoading,
//   requestOptions = emptyObject,
//   name,
//   ...restProps
// }) => {
//   const [optsRequest, setOptsRequest] = useState<LSelectOptions[]>([]);
//   const isFirst = useIsFirstRender(); // 组件是否第一次挂载

//   const form = Form.useFormInstance();

//   const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);

//   const hasLoading = useMemo(() => Reflect.has(outLoading ?? {}, 'spinning'), [outLoading]);

//   useUpdateEffect(() => {
//     if (hasLoading) setLoading(outLoading?.spinning || false);
//   }, [outLoading]);

//   const { run } = useRequest(request || (async () => []), {
//     ...requestOptions,
//     manual: true,
//     debounceWait: debounceTime,
//     onSuccess: (result) => {
//       if (!hasLoading) setLoading(false);
//       if (all && result?.length > 0) {
//         setOptsRequest([{ label: allLabel, value: allValue }, ...result]);
//       } else {
//         setOptsRequest([...result]);
//       }
//     },
//     onError: () => {
//       setOptsRequest([]);
//       if (!hasLoading) setLoading(false);
//     },
//   });

//   const dependValues = useDependValues(dependencies, restProps);
//   const isClearDepends = useIsClearDependValues(dependValues);

//   const options = useMemo<LSelectOptions[]>(() => {
//     const rawOptions = selectProps.options || outOptions;
//     if (all && rawOptions?.length > 0) {
//       const retOptions = [{ label: allLabel, value: allValue }, ...rawOptions];
//       return retOptions;
//     }
//     return rawOptions;
//   }, [all, allLabel, allValue, outOptions, selectProps.options]);

//   useDeepCompareEffect(() => {
//     if (!request) return;
//     // 组件第一次加载时调用request
//     if (isFirst) {
//       (async () => {
//         try {
//           if (!hasLoading) setLoading(true);
//           const newOptions = await request(...dependValues);
//           if (all && newOptions?.length > 0) {
//             setOptsRequest([{ label: allLabel, value: allValue }, ...newOptions]);
//           } else {
//             setOptsRequest([...newOptions]);
//           }
//         } catch (error) {
//           setOptsRequest([]);
//         }
//         if (!hasLoading) setLoading(false);
//       })();
//     } else {
//       if (value !== void 0) {
//         form.setFieldValue(name, void 0);
//       }
//       // 防抖调用
//       if (!isClearDepends) {
//         if (!hasLoading) setLoading(true);
//         run(...dependValues);
//       }
//     }
//   }, [dependValues]);

//   const selectOptions = useMemo(() => {
//     if (isClearDepends) {
//       return [];
//     } else if (optsRequest?.length > 0) {
//       return optsRequest;
//     } else if (options.length > 0) {
//       return options;
//     } else {
//       return [];
//     }
//   }, [isClearDepends, options, optsRequest]);

//   const handleChange = useMemoizedFn(
//     (val: string, items: DefaultOptionType | DefaultOptionType[]) => {
//       if (selectProps?.onChange) {
//         selectProps?.onChange(val, items);
//       }
//       onChange?.(val);
//     },
//   );
//   return (
//     <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
//       <Select
//         {...restProps}
//         disabled={disabled ?? isClearDepends}
//         options={selectOptions}
//         placeholder={placeholder}
//         allowClear
//         {...selectProps}
//         style={{ width: '100%', ...selectProps?.style }}
//         value={value}
//         onChange={handleChange}
//       />
//     </Spin>
//   );
// };

const SelectWrapper: FC<SelectWrapperProps> = ({
  value,
  onChange,
  dependencies = emptyArray,
  placeholder,
  options: outOptions = emptyArray,
  request,
  debounceTime,
  all = false,
  disabled,
  allValue = '',
  allLabel = '全部',
  selectProps = emptyObject,
  outLoading,
  requestOptions = emptyObject,
  name,
  actionRef,
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
    if (!request || outOptions?.length || selectProps.options?.length) return;
    run(...dependValues);
  });
  useImperativeHandle(actionRef, () => requestRes);

  useDeepUpdateEffect(() => {
    if (!request || outOptions?.length || selectProps.options?.length) return;
    form.setFieldValue(name, void 0);
    if (!hasEmptyDepends) run(...dependValues);
  }, dependValues);

  const selectOptions = useMemo(() => {
    const innerOptions = getOptions(outOptions, selectProps.options, data);
    if (all && innerOptions?.length > 0) {
      return [{ label: allLabel, value: allValue }, ...innerOptions];
    }
    return innerOptions;
  }, [all, outOptions, data, selectProps.options]);

  const handleChange = useMemoizedFn(
    (val: string, items: DefaultOptionType | DefaultOptionType[]) => {
      if (selectProps?.onChange) {
        selectProps?.onChange(val, items);
      }
      onChange?.(val);
    },
  );
  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <Select
        {...restProps}
        disabled={disabled ?? hasEmptyDepends}
        options={selectOptions}
        placeholder={placeholder}
        allowClear
        {...selectProps}
        style={{ width: '100%', ...selectProps?.style }}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default SelectWrapper;
