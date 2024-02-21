import type { ColProps } from 'antd';
import type { Gutter } from 'antd/es/grid/row';
import type { BaseFormProps } from 'lighting-design/Form/interface';

export interface LQueryFormProps extends BaseFormProps {
  /**
   *是否折叠
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isCollapsed?: boolean;
  /**
   * 显示多少项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   * */
  showColsNumber?: number;
  /**
   *  配置响应式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  itemColProps?: ColProps;
  /**
   * 是否水平紧凑显示
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isSpace?: boolean;
  /**
   * 重置 查询按钮组 是否紧挨着最后的表单项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  isApproachLastItem?: boolean;
  /**
   * 配置每一项的间隔
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LQueryFormProps
   */
  gutter?: Gutter | [Gutter, Gutter];
  onCollapsedChange?: (v: boolean) => void;
}
