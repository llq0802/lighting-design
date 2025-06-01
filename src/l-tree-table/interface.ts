import type { TableProps } from 'antd';
import type { LTreeTableData, LTreeTableDataItem, LTreeTableFieldNames, ValueType } from './util';

export { LTreeTableData, LTreeTableDataItem, LTreeTableFieldNames };

export type LTreeTableProps = {
  /**
   *  默认值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  defaultValue?: ValueType[];
  /**
   * 勾选的值 (受控)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  value?: ValueType[];
  /**
   * 勾选后的回调 (受控)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  onChange?: (values: ValueType[]) => void;
  /**
   *数据项
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  treeData: LTreeTableData;
  /**
   *自定义设置字段名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  fieldNames?: LTreeTableFieldNames;
  /**
   *设头部列表标题等Table的字段
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  columns?: Record<string, any>[];
  /**
   *是否合并最后一列
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  lastColumnMerged?: boolean;
  /**
   *是否显示复选框
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  showCheckbox?: boolean;
  /**
   *父子节点选中状态是否不再关联 (各自独立)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkStrictly?: boolean;
  /**
   *全部禁用
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  disabled?: boolean;
  /**
   *当该项为空值时填充展示的内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  fillEmpty?: React.ReactNode;
  /**
   *为所有复选框设置类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkboxClassName?: string;
  /**
   *为所有复选框设置样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  checkboxStyle?: React.CSSProperties;
  /**
   *自定义多选框的label
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTreeTableProps
   */
  labelRender?: (
    subItem: Record<string, any>,
    record: Record<string, any>,
    idx: number,
  ) => React.ReactNode;
  tableProps?: Record<string, any>;
} & Omit<TableProps<Record<string, any>>, 'columns' | 'dataSource'>;
