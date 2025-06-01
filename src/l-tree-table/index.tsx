import { useControllableValue, useCreation, useMemoizedFn, useMount, useRafState } from 'ahooks';
import { Checkbox, Table } from 'antd';
import classnames from 'classnames';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import React from 'react';
import './index.less';
import type { LTreeTableProps } from './interface';
import type { LTreeTableDataItem, LTreeTableFieldNames, ValueType } from './util';
import { compactTree, findTreeNode, getNodeChilren, transformTreeToList } from './util';

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
      const newChecks = new Set(checks || emptyArray);
      const newIndetermanites = new Set(indetermanites || emptyArray);

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
    const newIndetermaniteList = new Set(indeterminateList || emptyArray);

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
      setIndeterminateList(emptyArray);
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
      : emptyArray;

    return internalColumns.map((item, i) => ({
      ...item,
      title: '-',
      ...outColumns?.[i],
      onCell: (record: Record<string, any>, rowIndex: number) => {
        const col = record[item.dataIndex];
        const outOnCell = outColumns?.[i]?.onCell?.(record, rowIndex) ?? emptyObject;
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
      dataSource={realDataSource ?? emptyArray}
      columns={realColumns}
    />
  );
};

export default LTreeTable;
export * from './interface';
