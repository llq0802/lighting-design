import type { ColProps } from 'antd';
import type { RowProps } from 'antd/es/grid/row';
import type { LFormProps } from 'lighting-design/l-form';

type LQueryFormItem =
  | {
      name?: string;
      colProps?: ColProps;
      content: React.ReactNode;
    }
  | React.ReactNode;

export interface LQueryFormProps<T = any> extends LFormProps<T> {
  /**
   *初始状态下是否折叠
   * - 不支持动态设置
   * - 表单项的总数 > showColsNumber 时才会有 `折叠/展开按钮`
   */
  isCollapsed?: boolean;
  /**
   *  显示多少项, 默认不显示
   * - 配置为 number 时,  表单项的总数 > showColsNumber 时会有***收起/展开按钮***
   * - 如果不想有 ***折叠/展开***按钮 就不要配置 showColsNumber
   * */
  showColsNumber?: number;
  /**
   *  `isSpace` 为 `false`时配置响应式
   */
  itemColProps?: ColProps;
  /**
   * 是否水平紧凑模式
   */
  isSpace?: boolean;
  /**
   * 配置每一项的间隔
   */
  gap?: RowProps['gutter'];
  justify?: RowProps['justify'];
  /**
   * 展开/收起 事件的回调
   */
  onCollapsedChange?: (v: boolean) => void;
  items: LQueryFormItem[];
  rowProps?: RowProps;
}
