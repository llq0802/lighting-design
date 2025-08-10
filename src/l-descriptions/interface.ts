import type { ColProps, FormProps, RowProps, SpinProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { ReactNode } from 'react';

export type LDescriptionsProps<T = Record<string, ReactNode>> = {
  wrapperCol?: FormProps['wrapperCol'];
  labelCol?: FormProps['labelCol'];
  /**
   *左上角标题
   */
  title?: ReactNode;
  /**
   *右上角额外元素
   */
  extra?: ReactNode;
  /**
   *类名
   */
  className?: string;
  /**
   *样式
   */
  style?: React.CSSProperties;

  /**
   *头部类名 控制 `title`与`extra`的容器
   */
  headerClassName?: string;
  /**
   *头部样式 控制 `title`与`extra`的容器
   */
  headerStyle?: React.CSSProperties;
  /**
   *列字段配置
   */
  columns?: LDescriptionItem<T>[];
  /**
   *一行展示几列 也可以设置 `ColProps`的配置来设置响应式展示几列
   */
  column?: number | ColProps;
  /**
   *每一项的间距
   */
  gap?: RowProps['gutter'];
  justify?: RowProps['justify'];
  rowProps?: RowProps;
  colProps?: ColProps;
  /**
   *布局模式
   */
  layout?: 'horizontal' | 'vertical';
  /**
   *每一项标题对齐方式
   */
  titleAlign?: 'left' | 'right';
  /**
   *每一项标题宽度 只在 layout 为 horizontal 生效
   */
  titleWidth?: number | string;
  /**
   *每一项标题过长时是否换行
   */
  titleWrap?: boolean;
  /**
   *每一项标题后面是否加上`：`符号
   */
  colon?: boolean;
  /**
   *每一项的`marginBottom`值
   */
  itemBottom?: number | string;
  /**
   *loading 配置
   */
  loading?: boolean | SpinProps;
  /**
   *字段数据
   */
  record?: Record<T & string, ReactNode>;
  /**
   *重新渲染每一项的标题
   */
  renderTitle?: FormProps['requiredMark'];
  /**最后一项是否占满剩余行 */
  isLastBlock?: boolean;
};

export type LDescriptionItem<T> = {
  /** 当前项的标题 */
  title?: ReactNode;
  /** 当前项的key */
  dataIndex: string;
  titleWidth?: number | string;
  colProps?: ColProps;
  formItemProps?: Omit<LFormItemProps, 'name'>;
  tooltip?: LFormItemProps['tooltip'];
  alignItems?: LFormItemProps['alignItems'];
  required?: boolean;
  /** 空节点展示的内容 */
  emptyNode?: ReactNode;
  /** 是否禁用当前项 */
  disabled?: boolean;
  /** 重新渲染当前项 */
  render?: (curVal: ReactNode, record: T, index: number) => ReactNode;
};
