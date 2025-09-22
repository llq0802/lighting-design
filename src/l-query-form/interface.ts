import type { ColProps } from 'antd';
import type { RowProps } from 'antd/es/grid/row';
import type { LFormProps } from 'lighting-design/l-form';

/**
 * 查询表单项类型
 * 可以是包含 name、colProps 和 content 的对象，也可以是 ReactNode
 */
type LQueryFormItem =
  | {
      /** 表单项名称 */
      name?: string;
      /** 列属性配置 */
      colProps?: ColProps;
      /** 表单项内容 */
      content: React.ReactNode;
    }
  | React.ReactNode;

/**
 * 查询表单组件属性接口
 * 扩展自 LFormProps，提供查询表单特有的功能
 * @template T 表单数据类型
 */
export interface LQueryFormProps<T = any> extends LFormProps<T> {
  /**
   * 初始状态下是否折叠
   * - 不支持动态设置
   * - 表单项的总数 > showColsNumber 时才会有 `折叠/展开按钮`
   * @default true
   */
  isCollapsed?: boolean;

  /**
   * 显示多少项, 默认不显示
   * - 配置为 number 时,  表单项的总数 > showColsNumber 时会有***收起/展开按钮***
   * - 如果不想有 ***折叠/展开***按钮 就不要配置 showColsNumber
   * @default 4
   */
  showColsNumber?: number;

  /**
   * 配置每一项的间隔
   * - 控制表单项之间的间距，同 Row 组件的 gutter 属性
   */
  gap?: RowProps['gutter'];

  /**
   * 水平对齐方式
   * - 控制表单项的水平对齐方式，同 Row 组件的 justify 属性
   */
  justify?: RowProps['justify'];

  /**
   * 展开/收起 事件的回调
   * @param v 当前折叠状态，true 表示折叠，false 表示展开
   */
  onCollapsedChange?: (v: boolean) => void;

  /**
   * 表单项数组
   * - 定义查询表单中的所有表单项
   */
  items: LQueryFormItem[];

  /**
   * 行属性
   * - 传递给内部 Row 组件的属性
   */
  rowProps?: RowProps;

  /**
   * 列数 默认 4 列
   * - 必须是 24 的整数倍
   * - 也可以设置 [ColProps](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\interface.ts#L5-L5) 来设置响应式
   * @default 4
   */
  column?: number | ColProps;

  /**
   * 重置提交按钮的外层容器的样式
   * - 应用于提交按钮容器的内联样式
   */
  submitterWrapperStyle?: React.CSSProperties;

  /**
   * 展开/收起 容器类名
   * - 应用于折叠按钮容器的 CSS 类名
   */
  collapseClassName?: string;
}
