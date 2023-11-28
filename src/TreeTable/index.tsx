import { useControllableValue, useCreation, useMemoizedFn, useMount, useRafState } from 'ahooks';
import type { TableProps } from 'antd';
import { Checkbox, Table } from 'antd';
import classnames from 'classnames';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import React from 'react';
import './index.less';
import type { LTreeTableData, LTreeTableDataItem, LTreeTableFieldNames, ValueType } from './util';
import { compactTree, findTreeNode, getNodeChilren, transformTreeToList } from './util';

export { LTreeTableData, LTreeTableDataItem, LTreeTableFieldNames };

export type LTreeTableProps = {
  /**
   *  默认值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  defaultValue?: ValueType[];
  /**
   * 勾选的值 (受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  value?: ValueType[];
  /**
   * 勾选后的回调 (受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  onChange?: (values: ValueType[]) => void;
  /**
   *数据项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  treeData: LTreeTableData;
  /**
   *自定义设置字段名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  fieldNames?: LTreeTableFieldNames;
  /**
   *设头部列表标题等Table的字段
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  columns?: Record<string, any>[];
  /**
   *是否合并最后一列
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  lastColumnMerged?: boolean;
  /**
   *是否显示复选框
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  showCheckbox?: boolean;
  /**
   *父子节点选中状态是否不再关联 (各自独立)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkStrictly?: boolean;
  /**
   *全部禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  disabled?: boolean;
  /**
   *当该项为空值时填充展示的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  fillEmpty?: React.ReactNode;
  /**
   *为所有复选框设置类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkboxClassName?: string;
  /**
   *为所有复选框设置样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkboxStyle?: React.CSSProperties;
  /**
   *自定义多选框的label
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  labelRender?: (
    subItem: Record<string, any>,
    record: Record<string, any>,
    idx: number,
  ) => React.ReactNode;
  tableProps?: Record<string, any>;
} & Omit<TableProps<Record<string, any>>, 'columns' | 'dataSource'>;

const prefixCls = 'lightd-tree-table';

const LTreeTable: React.FC<LTreeTableProps> = (props) => {
  const {
    className,

    fieldNames: outFieldNames = emptyObject,
    columns: outColumns = emptyArray,
    treeData = emptyArray,
    lastColumnMerged = false,
    checkStrictly = false,
    disabled: outDisabled = false,

    showCheckbox = true,

    labelRender,
    fillEmpty = '-',

    checkboxClassName,
    checkboxStyle,

    defaultValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    tableProps = emptyObject,
    ...restProps
  } = props;

  const [checkList, setCheckList] = useControllableValue<ValueType[]>({
    defaultValue: defaultValue || [],
    ...props,
  });

  const [indeterminateList, setIndeterminateList] = useRafState<ValueType[]>([]);

  const fieldNames = useCreation(
    () => ({
      label: 'label',
      value: 'value',
      children: 'children',
      ...outFieldNames,
    }),
    [outFieldNames],
  );

  const {
    value: valueKey,
    label: labelKey,
    children: childrenKey,
  } = fieldNames as Required<LTreeTableFieldNames>;

  const { list: realDataSource, columns: innerColumns } = useCreation(
    () => transformTreeToList(treeData, lastColumnMerged, fieldNames),
    [lastColumnMerged, treeData, fieldNames],
  );

  const hiddenCheckboxClassName = useCreation(
    () => (!showCheckbox ? `${prefixCls}-checkbox-hidden` : ''),
    [showCheckbox],
  );

  const compactData = useCreation(
    () => compactTree(treeData, fieldNames, showCheckbox),
    [treeData, fieldNames, showCheckbox],
  );

  // 处理当前值的父级选中与半选中
  const processParentChecked = useMemoizedFn(
    (currentValue?: ValueType, checks?: ValueType[], indetermanites?: ValueType[]) => {
      const newChecks = new Set(checks || []);
      const newIndetermanites = new Set(indetermanites || []);

      // 递归处理父级勾选
      function recursion(parentVal: ValueType) {
        const currParentItem = compactData.find((item) => item[valueKey] === parentVal);

        if (currParentItem) {
          let childAllChecked = true; // 是否在值列表中选中了其所有子项  默认全部都选中
          let childHasOneChecked = false; // 是否在值列表中有一项子项被选中  默认都没有被选中
          let childHasIndetermanite = false; // 是否在半选列表中有一项被选中   默认都没有被选中

          // const childs = currParentItem[childrenKey].filter(
          //   (item) => !item.disbaled,
          // );
          // childs.forEach((item) => {
          //   if (!newChecks.has(item[valueKey])) {
          //     childAllChecked = false;
          //   }
          // });

          currParentItem[childrenKey]?.forEach((item: Record<string, any>) => {
            if (!item.disabled) {
              if (newChecks.has(item[valueKey])) {
                // 有一项子项被选中 就为true
                childHasOneChecked = true;
              } else {
                // 当前没有禁用的子项有一项如果没有勾选 就设为false
                childAllChecked = false;

                if (newIndetermanites.has(item[valueKey])) {
                  // 当前半选择的项,则它的父级也应该半选中
                  childHasIndetermanite = true;
                }
              }
            }
          });

          if (!currParentItem.disabled) {
            //  如果子项自选全部勾选 则它的父级也勾选
            if (childAllChecked) {
              newChecks.add(parentVal);
              newIndetermanites.delete(parentVal);
            } else {
              newChecks.delete(parentVal);
              // 如果有一项选中,或者当前半选列表中已经被选中的项则它的父级也应该半选中
              if (childHasOneChecked || childHasIndetermanite) {
                newIndetermanites.add(parentVal);
              } else {
                newIndetermanites.delete(parentVal);
              }
            }
          }

          // 如果还有父级则继续递归
          if (currParentItem.parent) {
            recursion(currParentItem.parent);
          }
        }
      }

      const curItem = compactData.find((it) => it[valueKey] === currentValue);

      // 不是根节点的时候才执行
      if (curItem?.parent) {
        recursion(curItem.parent);
      }

      return {
        newChecks: [...newChecks],
        newIndetermanites: [...newIndetermanites],
      };
    },
  );

  const handleChange = useMemoizedFn((subItem: LTreeTableDataItem) => {
    const newCheckList = new Set(checkList || []);
    const newIndetermaniteList = new Set(indeterminateList || []);

    const currentValue = subItem[valueKey];
    const currentChecked = newCheckList.has(currentValue);
    // 处理当前层级已选中变为不勾选，不勾选改为勾选
    if (currentChecked) {
      newCheckList.delete(currentValue);
    } else {
      newCheckList.add(currentValue);
      newIndetermaniteList.delete(currentValue);
    }

    if (checkStrictly) {
      setCheckList([...newCheckList]);
      setIndeterminateList([]);
      return;
    }

    const curNode = findTreeNode(
      treeData,
      (item: Record<string, any>) => item?.[valueKey] === currentValue,
      childrenKey,
    );
    const curNodeChilren = curNode?.[childrenKey] || [];
    const curNodeChilrenValues = getNodeChilren(curNodeChilren, childrenKey);
    // 处理所有子级勾选
    curNodeChilrenValues?.forEach((item) => {
      const key = item[valueKey];
      if (currentChecked) {
        // 子项之前被选中 则删除
        if (newCheckList.has(key)) {
          newCheckList.delete(key);
        }

        // 禁用的不勾选
      } else if (!item.disabled) {
        newCheckList.add(key);
        newIndetermaniteList.delete(key);
      }
    });
    // 处理父级勾选
    const { newChecks, newIndetermanites } = processParentChecked(
      currentValue,
      Array.from(newCheckList),
      Array.from(newIndetermaniteList),
    );

    setCheckList(newChecks);
    setIndeterminateList(newIndetermanites);
  });

  useMount(() => {
    // 初始化组件时只处理选中值的半选状态
    if (checkList?.length && !checkStrictly) {
      let newIndetermaniteList = indeterminateList;
      checkList.forEach((itemValue) => {
        const { newIndetermanites } = processParentChecked(
          itemValue,
          checkList,
          newIndetermaniteList,
        );
        newIndetermaniteList = newIndetermanites;
      });
      setIndeterminateList(newIndetermaniteList);
    }
  });

  const realColumns = useCreation(() => {
    // 优化没有数据时的表格标题展示
    const internalColumns: { dataIndex: string }[] = innerColumns?.length
      ? innerColumns
      : outColumns?.length
      ? outColumns.map((item) => item)
      : [];

    return internalColumns.map((item, i) => ({
      ...item,
      title: '-',
      ...outColumns?.[i],
      onCell: (record: Record<string, any>, rowIndex: number) => {
        const col = record[item.dataIndex];
        const outOnCell = outColumns?.[i]?.onCell?.(record, rowIndex) ?? {};
        return {
          ...outOnCell,
          rowSpan: col.rowSpan,
        };
      },
      render: (_, record: Record<string, any>, idx: number) => {
        const col = record[item.dataIndex];

        return col[valueKey]
          ? col?.data?.map((subItem: Record<string, any>) => (
              <Checkbox
                style={checkboxStyle}
                className={classnames(
                  `${prefixCls}-checkbox`,
                  hiddenCheckboxClassName,
                  checkboxClassName,
                )}
                checked={checkList?.includes(subItem[valueKey])}
                indeterminate={indeterminateList?.includes(subItem[valueKey])} // 只控制样式不会改变选中的值
                onChange={() => handleChange(subItem)}
                disabled={outDisabled || subItem.disabled}
                key={subItem[valueKey]}
              >
                {labelRender
                  ? labelRender(subItem, col, idx)
                  : subItem[labelKey] || subItem[valueKey]}
              </Checkbox>
            ))
          : fillEmpty;
      },
    }));
  }, [outColumns, innerColumns, labelKey, valueKey, fillEmpty, checkList, indeterminateList]);

  return (
    <Table
      bordered
      pagination={false}
      {...restProps}
      {...tableProps}
      className={classnames(prefixCls, className, tableProps?.className)}
      dataSource={realDataSource ?? []}
      columns={realColumns}
    />
  );
};

export default LTreeTable;
