import { useDeepCompareEffect, useRequest } from 'ahooks';
import type { TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';
import type { FC } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export type TreeSelectWrapperProps = Record<string, any> & {
  treeData?: TreeSelectProps['treeData'];
  request?: (...args: any[]) => Promise<any>;
  treeCheckable?: boolean;
  debounceTime?: number;
  treeSelectProps?: TreeSelectProps;
  dependencies?: string[];
};

export type TreeSelectOption = {
  value: string;
  title: string;
  children: TreeSelectOption[];
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
  treeSelectProps = {},
  ...restProps // LFormItem传过来的其他值
}) => {
  const [inTreeData, setInTreeData] = useState<TreeSelectOption[]>([]);

  const isFirstRender = useRef<boolean>(true); // 组件是否第一次挂载
  const { run } = useRequest(request || (async () => []), {
    manual: true,
    debounceWait: debounceTime,
    onSuccess: (result) => {
      setInTreeData([...result]);
    },
    onError: () => {
      setInTreeData([]);
    },
  });
  // 获取依赖项
  const depends = useMemo(
    () => dependencies?.map((nameStr) => restProps[nameStr]),
    [dependencies, restProps],
  );
  // 判断依赖项是否有空或undefined null或者空数组
  const isClearDepends = useMemo(
    () =>
      depends.some((nameValue) => nameValue === '' || nameValue == undefined || !nameValue?.length),
    [depends],
  );

  const memoTreeDate = useMemo(
    () => treeSelectProps.treeData || outTreeData,
    [treeSelectProps.treeData, outTreeData],
  );

  useDeepCompareEffect(() => {
    if (!request) return;
    // 组件第一次加载时调用request
    if (isFirstRender.current) {
      isFirstRender.current = false;
      (async () => {
        try {
          const newData = await request(...depends);
          setInTreeData([...newData]);
        } catch (error) {
          setInTreeData([]);
        }
      })();
    } else {
      // 防抖调用
      run(...depends);
    }
  }, [restProps]);

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

  const handleChange = useCallback(
    (vals: string | string[], labelList: React.ReactNode[], extra: any) => {
      if (treeSelectProps?.onChange) {
        treeSelectProps.onChange(vals, labelList, extra);
      }
      onChange(vals);
    },
    [onChange, treeSelectProps],
  );

  return (
    <TreeSelect
      treeData={treeSelectData}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="请选择"
      style={{ width: '100%' }}
      treeCheckable={treeCheckable}
      {...treeSelectProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TreeSelectWrapper;
