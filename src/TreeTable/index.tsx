import { useControllableValue, useCreation } from 'ahooks';
import type { TableProps } from 'antd';
import { Checkbox, Table } from 'antd';
import classnames from 'classnames';
import React from 'react';
import './index.less';
import type { LTreeTableData, LTreeTableFieldNames, ValueType } from './util';
import { findTreeNode, transformTreeToList } from './util';

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

  const { list, columns } = useCreation(
    () => transformTreeToList(treeData, lastColumnMerged, fieldNames),
    [lastColumnMerged, treeData, fieldNames],
  );

  const hiddenCheckboxClassName = useCreation(() => {
    return !showCheckbox ? `${prefixCls}-checkbox-hidden` : '';
  }, [showCheckbox]);

  const handleChange = (subItem: Record<string, any>) => {
    const newCheckList = new Set(checkList);
    const currentValue = subItem[valueKey];
    const currentChecked = newCheckList.has(currentValue);

    const curNode = findTreeNode(
      treeData,
      (item) => item[valueKey] === currentValue,
    );

    console.log('curNode', curNode);

    // 已选中变为不勾选，不勾选改为勾选
    if (currentChecked) {
      newCheckList.delete(currentValue);
    } else {
      newCheckList.add(currentValue);
    }

    setCheckList([...newCheckList]);
  };

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
