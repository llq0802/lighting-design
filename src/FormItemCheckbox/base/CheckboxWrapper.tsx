import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { CheckboxOptionType, SpinProps } from 'antd';
import { Checkbox, Form, Spin } from 'antd';
import type {
  CheckboxChangeEvent,
  CheckboxGroupProps,
} from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { CSSProperties, FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

export type LCheckboxOptions = CheckboxOptionType;
export type LCheckboxBeforeAllProps =
  | {
      /**
       * 标题 label
       */
      label?: ReactNode;
      /**
       * 样式
       */
      style?: CSSProperties;
      /**
       * 失效状态
       */
      disabled?: boolean;
      /**
       * 变化时的回调函数
       */
      onChange?: (e: CheckboxValueType[]) => void;
    }
  | true;

export type CheckboxWrapperProps = Record<string, any> &
  Partial<{
    /**
     *请求数据源的异步函数
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.13
     *@memberof LFormItemCheckboxProps
     */
    request: (...args: any[]) => Promise<any>;
    debounceTimex: number;
    /**
     *自定义全选
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.13
     *@memberof LFormItemCheckboxProps
     */
    beforeAll: LCheckboxBeforeAllProps | boolean;
    /**
     *多选框组件 Props
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.13
     *@memberof LFormItemCheckboxProps
     */
    checkboxProps: CheckboxGroupProps;
    dependencies: string[];
    outLoading: SpinProps;
    /**
     *依赖项的值为空时展示的内容
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.13
     *@memberof LFormItemCheckboxProps
     */
    notDependRender?: () => ReactNode;
  }>;

const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  value = [],
  onChange,
  dependencies = [],
  options: outOptions = [],
  request,
  debounceTime,
  beforeAll,
  checkboxProps = {},
  disabled,
  outLoading = {},
  notDependRender = () => <span>请先选择依赖项</span>,
  requestOptions,
  name,
  ...restProps
}) => {
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const [optsRequest, setOptsRequest] = useState<LCheckboxOptions[]>([]);
  const isFirst = useIsFirstRender();

  const hasLoading = useMemo(
    () => Reflect.has(outLoading, 'spinning'),
    [outLoading],
  );
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
    const rawOptions = checkboxProps.options || outOptions;
    return rawOptions;
  }, [outOptions, checkboxProps.options]);

  useDeepCompareEffect(() => {
    if (!request) return;
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

      // 防抖调用
      if (!isClearDepends) {
        if (!hasLoading) setLoading(true);
        run(...dependValues);
      }
    }
  }, [dependValues]);

  const outBeforeAll = useMemo(() => {
    if (typeof beforeAll === 'boolean') {
      return {};
    }
    return beforeAll;
  }, [beforeAll]);

  const checkboxOptions = useMemo(() => {
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
  const checkAllChange = useMemoizedFn((e: CheckboxChangeEvent) => {
    let checkAllValue: CheckboxValueType[] = [];
    if (e.target.checked) {
      // 排除disabled为true的数据
      checkAllValue = checkboxOptions
        .filter((item: CheckboxOptionType) => !item.disabled)
        .map((items: CheckboxOptionType) => items.value);
    }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    onChange?.(checkAllValue);
    outBeforeAll?.onChange?.(checkAllValue);
  });
  const handleChange = useMemoizedFn((checkedValue: CheckboxValueType[]) => {
    if (beforeAll) {
      // 排除disabled为true的数据
      const optLength = checkboxOptions.filter(
        (item: CheckboxOptionType) => !item.disabled,
      ).length;

      setIndeterminate(
        !!checkedValue.length && checkedValue.length < optLength,
      );
      setCheckAll(checkedValue.length === optLength);
    }
    checkboxProps?.onChange?.(checkedValue);
    onChange?.(checkedValue);
  });

  useDeepCompareEffect(() => {
    if (beforeAll && !value?.length) {
      setCheckAll(false);
      setIndeterminate(false);
    }
  }, [value]);

  const checkboxDom = (
    <>
      {beforeAll && (
        <Checkbox
          indeterminate={indeterminate}
          style={{ marginRight: 8, ...outBeforeAll?.style }}
          disabled={disabled ?? (outBeforeAll?.disabled || isClearDepends)}
          onChange={checkAllChange}
          checked={checkAll}
        >
          {outBeforeAll?.label || '全选'}
        </Checkbox>
      )}
      <Checkbox.Group
        options={checkboxOptions}
        disabled={disabled ?? isClearDepends}
        {...checkboxProps}
        value={value}
        onChange={handleChange}
      />
    </>
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      {isClearDepends ? notDependRender() : checkboxDom}
    </Spin>
  );
};

export default CheckboxWrapper;
