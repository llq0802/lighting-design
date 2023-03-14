import {
  useDeepCompareEffect,
  useMemoizedFn,
  useRequest,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
import type { SpinProps, TreeSelectProps } from 'antd';
import { Spin, TreeSelect } from 'antd';
import type { FC } from 'react';
import { useMemo, useRef, useState } from 'react';

export type TreeSelectWrapperProps = Record<string, any> & {
  treeData?: TreeSelectProps['treeData'];
  request?: (...dependValues: any[]) => Promise<LTreeSelectOption[]>;
  treeCheckable?: boolean;
  debounceTime?: number;
  treeSelectProps?: TreeSelectProps;
  dependencies?: string[];
  loadData?: TreeSelectProps['loadData'];
  outLoading?: SpinProps;
};

export type LTreeSelectOption = {
  value: string;
  title: string;
  placeholder: string;
  children: LTreeSelectOption[];
  disabled: boolean;
  disableCheckbox: boolean;
  selectable: boolean;
  checkable: boolean;
  /** 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标 */
  isLeaf: boolean;
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
  outLoading,

  ...restProps // LFormItem传过来的其他值
}) => {
  const [inTreeData, setInTreeData] = useState<LTreeSelectOption[]>([]);
  const [loading, setLoading] = useSafeState<boolean>(outLoading?.spinning || false);
  const isFirstRender = useRef<boolean>(true); // 组件是否第一次挂载
  const hasLoading = useMemo(
    (): boolean => Reflect.has(typeof outLoading === 'object' ? outLoading : {}, 'spinning'),
    [outLoading],
  );

  const { run } = useRequest(request || (async () => []), {
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

  // 获取依赖项的值
  const dependValues = useMemo(() => {
    if (!dependencies.length) {
      return [];
    }
    return dependencies?.map((nameStr) => restProps[nameStr]);
  }, [dependencies, restProps]);

  // 判断依赖项的值是否有空或undefined
  const isClearDepends = useMemo(
    () =>
      dependencies.length > 0 &&
      dependValues?.some(
        (nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length,
      ),
    [dependencies.length, dependValues],
  );

  const memoTreeDate = useMemo(
    () => treeSelectProps.treeData || outTreeData,
    [treeSelectProps.treeData, outTreeData],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    if (isClearDepends) return;
    // 组件第一次加载时调用request
    if (isFirstRender.current) {
      isFirstRender.current = false;
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
      if (!hasLoading) setLoading(true);
      // 防抖调用
      run(...dependValues);
    }
  }, [dependValues]);

  // 依赖清除
  useDeepCompareEffect(() => {
    if (isClearDepends && value != undefined) {
      onChange(undefined);
    }
  }, [value, isClearDepends]);

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
      onChange(vals);
    },
  );

  return (
    <Spin spinning={loading} style={{ marginLeft: 40, width: 'fit-content' }} {...outLoading}>
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
