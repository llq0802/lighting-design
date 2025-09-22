import type { ColProps, FormProps, RowProps, SpinProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { ReactNode } from 'react';

/**
 * 描述列表组件属性接口
 * 用于展示只读信息的列表组件
 * @template T 数据记录类型，默认为 Record<string, ReactNode>
 */
export type LDescriptionsProps<T = Record<string, ReactNode>> = {
  /**
   * 左上角标题
   * - 显示在描述列表左上角的标题内容
   */
  title?: ReactNode;

  /**
   * 右上角额外元素
   * - 显示在描述列表右上角的额外内容，通常是一些操作按钮
   */
  extra?: ReactNode;

  /**
   * 类名
   * - 应用于组件根节点的 CSS 类名
   */
  className?: string;

  /**
   * 样式
   * - 应用于组件根节点的内联样式
   */
  style?: React.CSSProperties;

  /**
   * 头部类名 控制 [title](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Descriptions\index.tsx#L107-L107)与[extra](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Descriptions\index.tsx#L108-L108)的容器
   * - 应用于标题和额外内容容器的 CSS 类名
   */
  headerClassName?: string;

  /**
   * 头部样式 控制 [title](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Descriptions\index.tsx#L107-L107)与[extra](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Descriptions\index.tsx#L108-L108)的容器
   * - 应用于标题和额外内容容器的内联样式
   */
  headerStyle?: React.CSSProperties;

  /**
   * 列字段配置
   * - 定义描述列表中每一项的配置信息
   */
  columns?: LDescriptionItem<T>[];

  /**
   * 一行展示几列 也可以设置 [ColProps](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\interface.ts#L5-L5)的配置来设置响应式展示几列
   * - 可以是固定数字或响应式配置对象
   * @default 3
   */
  column?: number | ColProps;

  /**
   * 每一项的间距
   * - 控制描述列表项之间的间距，同 Row 组件的 gutter 属性
   */
  gap?: RowProps['gutter'];

  /**
   * 水平对齐方式
   * - 控制描述列表项的水平对齐方式，同 Row 组件的 justify 属性
   */
  justify?: RowProps['justify'];

  /**
   * 行属性
   * - 传递给内部 Row 组件的属性
   */
  rowProps?: RowProps;

  /**
   * 列属性
   * - 传递给内部 Col 组件的属性
   */
  colProps?: ColProps;

  /**
   * 布局模式
   * - horizontal: 标题和内容水平排列
   * - vertical: 标题和内容垂直排列
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical';

  /**
   * 每一项标题对齐方式
   * - 控制标题文本的对齐方式
   * @default 'right'
   */
  titleAlign?: 'left' | 'right';

  /**
   * 每一项标题宽度 只在 layout 为 horizontal 生效
   * - 设置标题区域的固定宽度
   */
  titleWidth?: number | string;

  /**
   * 每一项标题过长时是否换行
   * - true: 标题过长时换行显示
   * - false: 标题过长时截断显示省略号
   * @default false
   */
  titleWrap?: boolean;

  /**
   * 每一项标题后面是否加上`：`符号
   * - true: 在标题后添加冒号
   * - false: 不添加冒号
   * @default true
   */
  colon?: boolean;

  /**
   * 每一项的[marginBottom](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-form\components\base-submitter.tsx#L83-L83)值
   * - 控制每个描述项的底部外边距
   */
  itemBottom?: number | string;

  /**
   * loading 配置
   * - false: 不显示加载状态
   * - true: 显示默认加载状态
   * - SpinProps: 自定义加载状态配置
   */
  loading?: boolean | SpinProps;

  /**
   * 字段数据
   * - 描述列表要展示的数据记录
   */
  record?: T;

  /**
   * 重新渲染每一项的标题
   * - 同 Form 组件的 requiredMark 属性
   */
  renderTitle?: FormProps['requiredMark'];

  /**
   * 最后一项是否占满剩余行
   * - true: 最后一项占满剩余空间
   * - false: 最后一项按正常大小显示
   * @default false
   */
  isLastBlock?: boolean;
};

/**
 * 描述列表项配置接口
 * 定义描述列表中每一项的配置信息
 * @template T 数据记录类型
 */
export type LDescriptionItem<T> = {
  /**
   * 当前项的标题
   * - 显示在该项内容前的标题
   */
  title?: ReactNode;

  /**
   * 当前项的key
   * - 对应数据记录中的字段名，用于获取该项的值
   */
  dataIndex: string;

  /**
   * 当前项标题宽度
   * - 覆盖全局的 titleWidth 设置
   */
  titleWidth?: number | string;

  /**
   * 当前项列属性
   * - 覆盖全局的 colProps 设置
   */
  colProps?: ColProps;

  /**
   * 表单项属性
   * - 传递给内部表单项的属性，但排除 name 属性
   */
  formItemProps?: Omit<LFormItemProps, 'name'>;

  /**
   * 提示信息
   * - 显示在标题旁边的提示信息
   */
  tooltip?: LFormItemProps['tooltip'];

  /**
   * 对齐方式
   * - 控制该项内容的对齐方式
   */
  alignItems?: LFormItemProps['alignItems'];

  /**
   * 是否必填
   * - 标记该项是否为必填项
   */
  required?: boolean;

  /**
   * 空节点展示的内容
   * - 当该项的值为空时显示的内容
   */
  emptyNode?: ReactNode;

  /**
   * 重新渲染当前项
   * @param curVal 当前字段的值
   * @param record 完整的数据记录
   * @param index 当前项的索引
   * @returns 自定义渲染的内容
   */
  render?: (curVal: T[keyof T], record: T, index: number) => ReactNode;
};
