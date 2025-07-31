import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemCompositionProps extends LFormItemProps, Pick<LFormProps, 'variant' | 'size' | 'disabled'> {
  /**是否撑满父容器 */
  block?: boolean;
  /**
   * 左侧宽度
   * 右侧组件会自定适应宽度
   */
  leftWidth?: string | number;
  /**左侧收集数据组件 */
  leftComponent: React.ReactNode;
  /**右侧收集数据组件 */
  rightComponent: React.ReactNode;
  /**
   * 转化左侧组件的onChange参数到formState中
   */
  transformLeftOnChangeParams?: (...args: any[]) => any;
  /**
   * 转化右侧组件的onChange参数到formState中
   */
  transformRightOnChangeParams?: (...args: any[]) => any;
}
