import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { SpinProps, TreeSelectProps } from 'antd';
import { Form, Spin, TreeSelect } from 'antd';
import { publicSpinStyle } from 'lighting-design/FormItemRadio/base/RadioWrapper';
import {
  useDependValues,
  useIsClearDependValues,
  useIsFirstRender,
} from 'lighting-design/_utils';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

export type TreeSelectWrapperProps = Record<string, any> & {
  /**
   *数据化配置选项内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormItemTreeSelectProps
   */
  treeData?: TreeSelectProps['treeData'];
  /**
   *请求数据异步函数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormItemTreeSelectProps
   */
  request?: (...dependValues: any[]) => Promise<LTreeSelectOption[]>;
  /**
   *是否显示 Checkbox
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormItemTreeSelectProps
   */
  treeCheckable?: boolean;
  debounceTime?: number;
  /**
   *antd树选择组件的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormItemTreeSelectProps
   */
  treeSelectProps?: TreeSelectProps;
  dependencies?: string[];
  /**
   *异步加载数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormItemTreeSelectProps
   */
  loadData?: TreeSelectProps['loadData'];
  outLoading?: SpinProps;
};

export type LTreeSelectOption = {
  value: string;
  title: string;
  placeholder?: string;
  children?: LTreeSelectOption[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  /** 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标 */
  isLeaf?: boolean;
};

const TreeSelectWrapper: FC<TreeSelectWrapperProps> = ({
  value,
  onChange,
  dependencies = [],
  treeData: outTreeData = [],
  treeCheckable = false,
  request,
  debounceTime,
  disabled,
  placeholder,
  loadData,
  treeSelectProps = {},
  outLoading = {},
  requestOptions = {},
  name,
  ...restProps // LFormItem传过来的其他值
}) => {
  const [inTreeData, setInTreeData] = useState<LTreeSelectOption[]>([]);
  const [loading, setLoading] = useSafeState<boolean>(
    outLoading?.spinning || false,
  );
  const isFirstRender = useIsFirstRender(); // 组件是否第一次挂载

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

      setInTreeData([...result]);
    },
    onError: () => {
      if (!hasLoading) setLoading(false);
      setInTreeData([]);
    },
  });

  useUpdateEffect(() => {
    if (hasLoading) setLoading(outLoading?.spinning || false);
  }, [outLoading]);

  const form = Form.useFormInstance();
  const dependValues = useDependValues(dependencies, restProps);
  const isClearDepends = useIsClearDependValues(dependValues);

  const memoTreeDate = useMemo(
    () => treeSelectProps.treeData || outTreeData,
    [treeSelectProps.treeData, outTreeData],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirstRender) {
      (async () => {
        try {
          if (!hasLoading) setLoading(true);
          const newData = await request(...dependValues);
          setInTreeData([...newData]);
        } catch (error) {
          setInTreeData([]);
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

  const treeSelectData = useMemo(() => {
    if (isClearDepends) {
      return [];
    } else if (inTreeData?.length > 0) {
      return inTreeData;
    } else if (memoTreeDate?.length > 0) {
      return memoTreeDate;
    } else {
      return [];
    }
  }, [isClearDepends, memoTreeDate, inTreeData]);

  const handleChange = useMemoizedFn(
    (vals: string | string[], labelList: React.ReactNode[], extra: any) => {
      if (treeSelectProps?.onChange) {
        treeSelectProps.onChange(vals, labelList, extra);
      }
      onChange?.(vals);
    },
  );

  return (
    <Spin spinning={loading} style={publicSpinStyle} {...outLoading}>
      <TreeSelect
        allowClear
        disabled={disabled ?? isClearDepends}
        placeholder={placeholder}
        treeData={treeSelectData}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        style={{ width: '100%' }}
        treeCheckable={treeCheckable}
        loadData={loadData}
        {...treeSelectProps}
        value={value}
        onChange={handleChange}
      />
    </Spin>
  );
};

export default TreeSelectWrapper;
