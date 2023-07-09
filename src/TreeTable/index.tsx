import { useControllableValue, useCreation, useMemoizedFn } from 'ahooks';
import type { TableProps } from 'antd';
import { Checkbox, Table } from 'antd';
import classnames from 'classnames';
import React, { useEffect } from 'react';
import './index.less';
import type { LTreeTableData, LTreeTableFieldNames, ValueType } from './util';
import {
  compactTree,
  findTreeNode,
  getNodeChilren,
  transformTreeToList,
} from './util';

export type LTreeTableProps = {
  /**
   * 勾选的值 (受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  value?: ValueType[];
  /**
   * 勾选后的回调 (受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  onChange?: (values: ValueType[]) => void;
  /**
   *数据项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  treeData: LTreeTableData;
  /**
   *自定义设置字段名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  fieldNames?: LTreeTableFieldNames;
  /**
   *设头部列表标题等Table的字段
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  columnTitles?: Record<string, any>[];
  /**
   *是否合并最后一列
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  lastColumnMerged?: boolean;
  /**
   *是否显示复选框
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  showCheckbox?: boolean;
  /**
   *自定义多选框的label
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.4
   *@memberof LTreeTableProps
   */
  labelRender?: (
    subItem: Record<string, any>,
    record: Record<string, any>,
    idx: number,
  ) => React.ReactNode;
} & TableProps<Record<string, any>>;

const prefixCls = 'lightd-tree-table';

const LTreeTable: React.FC<LTreeTableProps> = (props) => {
  const {
    fieldNames: outFieldNames = {},
    columnTitles = [],
    treeData = [],
    lastColumnMerged = true,
    showCheckbox = true,
    labelRender,
    className,
    ...restProps
  } = props;

  const [checkList, setCheckList] = useControllableValue<ValueType[]>({
    defaultValue: [],
    ...props,
  });

  const fieldNames = React.useMemo(
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
  } = fieldNames;

  useEffect(() => {
    if (checkList?.length) {
      handleChange();
    }
  }, []);

  const { list, columns } = useCreation(
    () => transformTreeToList(treeData, lastColumnMerged, fieldNames),
    [lastColumnMerged, treeData, fieldNames],
  );

  const hiddenCheckboxClassName = useCreation(() => {
    return !showCheckbox ? `${prefixCls}-checkbox-hidden` : '';
  }, [showCheckbox]);

  const compactData = useCreation(
    () => compactTree(treeData, fieldNames, showCheckbox),
    [treeData, fieldNames, showCheckbox],
  );
  const processParentChecked = React.useCallback(
    (currentValue?: ValueType, checks?: ValueType[]) => {
      const newChecks = new Set(checks || []);

      // 递归处理父级勾选
      function recursion(parentVal: ValueType) {
        const currParentItem = compactData.find(
          (item) => item[valueKey] === parentVal,
        );

        if (currParentItem) {
          let childAllChecked = true; // 是否选中了其所有子项

          currParentItem[childrenKey]?.forEach((item) => {
            if (!item.disabled) {
              if (!newChecks.has(item[valueKey])) {
                // 当前子项没有勾选 就设为false
                childAllChecked = false;
              }
            }
          });
          // 如果子项自选全部勾选 则它的父级也勾选
          if (childAllChecked) {
            newChecks.add(parentVal);
          } else {
            newChecks.delete(parentVal);
          }

          if (currParentItem.parent) {
            recursion(currParentItem.parent);
          }
        }
      }

      const currItem = compactData.find(
        (item) => item[valueKey] === currentValue,
      );

      // 不是根节点的时候才执行
      if (currItem?.parent) {
        recursion(currItem.parent);
      }

      return Array.from(newChecks);
    },
    [childrenKey, compactData, valueKey],
  );

  const handleChange = useMemoizedFn((subItem: Record<string, any>) => {
    const newCheckList = new Set(checkList);
    const currentValue = subItem[valueKey];
    const currentChecked = newCheckList.has(currentValue);

    // 处理当前层级已选中变为不勾选，不勾选改为勾选
    if (currentChecked) {
      newCheckList.delete(currentValue);
    } else {
      newCheckList.add(currentValue);
    }

    const curNode = findTreeNode(
      treeData,
      (item) => item?.[valueKey] === currentValue,
    );
    const curNodeChilren = curNode?.[childrenKey] || [];
    const curNodeChilrenValues = getNodeChilren(curNodeChilren, childrenKey);

    // 处理所有子级勾选
    curNodeChilrenValues?.forEach((item) => {
      if (currentChecked) {
        if (newCheckList.has(item[valueKey])) {
          newCheckList.delete(item[valueKey]);
        }
        // 禁用的不勾选
      } else if (!item.disabled) {
        newCheckList.add(item[valueKey]);
      }
    });

    // 处理父级勾选
    const checks = processParentChecked(currentValue, Array.from(newCheckList));

    setCheckList([...checks]);
  });

  const realColumns = useCreation(() => {
    // 优化没有数据时的表格标题展示
    const internalColumns: { dataIndex: string }[] =
      columns?.length > 0
        ? columns
        : columnTitles?.length > 0
        ? columnTitles.map((item) => item)
        : [];

    return internalColumns.map((item, i) => ({
      ...item,
      onCell: (record: Record<string, any>) => {
        const col = record[item.dataIndex];
        return { rowSpan: col.rowSpan };
      },
      render: (_, record: Record<string, any>, idx: number) => {
        const col = record[item.dataIndex];
        return col[valueKey]
          ? col?.data?.map((subItem) => (
              <Checkbox
                className={classnames(
                  `${prefixCls}-checkbox`,
                  hiddenCheckboxClassName,
                )}
                checked={checkList.includes(subItem[valueKey])}
                onChange={() => handleChange(subItem)}
                disabled={subItem.disabled}
                key={subItem[valueKey]}
              >
                {labelRender
                  ? labelRender(subItem, record, idx)
                  : subItem[labelKey] || subItem[valueKey]}
              </Checkbox>
            ))
          : '-';
      },
      title: '-',
      ...columnTitles?.[i],
    }));
  }, [columnTitles, columns, labelKey, valueKey]);

  return (
    <Table
      className={classnames(prefixCls, className)}
      columns={realColumns}
      dataSource={list}
      bordered
      pagination={false}
      {...restProps}
    />
  );
};

export default LTreeTable;
