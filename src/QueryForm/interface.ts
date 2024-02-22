import type { ColProps } from 'antd';
import type { Gutter } from 'antd/es/grid/row';
import type { BaseFormProps } from 'lighting-design/Form/interface';

export interface LQueryFormProps extends BaseFormProps {
  /**
   *初始状态下是否折叠
   * - 不支持动态设置
   * - 表单项的总数 > showColsNumber 时才会有 `折叠/展开按钮`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isCollapsed?: boolean;
  /**
   *  显示多少项, 默认不显示
   * - 配置为 number 时,  表单项的总数 > showColsNumber 时会有收起/展开
   * - 如果不想有 ***折叠/展开***按钮 就不要配置 showColsNumber
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   * */
  showColsNumber?: number;
  /**
   *  `isSpace` 为 `false`时配置响应式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  itemColProps?: ColProps;
  /**
   * 是否水平紧凑显示
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isSpace?: boolean;
  /**
   * ***重置/查询按钮组*** 是否紧挨着最后的表单项
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isApproachLastItem?: boolean;
  /**
   * 配置每一项的间隔
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  gutter?: Gutter | [Gutter, Gutter];
  /**
   * 展开/收起 事件的回调
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  onCollapsedChange?: (v: boolean) => void;
}
