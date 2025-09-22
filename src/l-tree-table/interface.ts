import type { TableProps } from 'antd';
import type { LTreeTableData, LTreeTableDataItem, LTreeTableFieldNames, ValueType } from './util';

export { LTreeTableDataItem, LTreeTableFieldNames };

export type LTreeTableProps = {
  /**
   *  默认值
   */
  defaultValue?: ValueType[];
  /**
   * 勾选的值 (受控)
   */
  value?: ValueType[];
  /**
   * 勾选后的回调 (受控)
   */
  onChange?: (values: ValueType[]) => void;
  /**
   *数据项
   */
  treeData: LTreeTableData;
  /**
   *自定义设置字段名
   */
  fieldNames?: LTreeTableFieldNames;
  /**
   *设头部列表标题等Table的字段
   */
  columns?: Record<string, any>[];
  /**
   *是否合并最后一列
   */
  lastColumnMerged?: boolean;
  /**
   *是否显示复选框
   */
  showCheckbox?: boolean;
  /**
   *父子节点选中状态是否不再关联 (各自独立)
   */
  checkStrictly?: boolean;
  /**
   *全部禁用
   */
  disabled?: boolean;
  /**
   *当该项为空值时填充展示的内容
   */
  fillEmpty?: React.ReactNode;
  /**
   *为所有复选框设置类名
   */
  checkboxClassName?: string;
  /**
   *为所有复选框设置样式
   */
  checkboxStyle?: React.CSSProperties;
  /**
   *自定义多选框的label
   */
  labelRender?: (subItem: Record<string, any>, record: Record<string, any>, idx: number) => React.ReactNode;
  tableProps?: Record<string, any>;
} & Omit<TableProps<Record<string, any>>, 'columns' | 'dataSource'>;
