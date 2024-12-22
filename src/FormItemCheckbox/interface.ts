import type { CheckboxOptionType, CheckboxProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';
import type { CSSProperties, ReactNode } from 'react';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';

export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'beforeAll'>,
    Pick<
      LFormItemSelectProps,
      | 'fieldNames'
      | 'actionRef'
      | 'requestOptions'
      | 'request'
      | 'spin'
      | 'autoRequest'
      | 'refreshDeps'
    > {
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCheckboxProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  options?: CheckboxOptionType[] | Record<string, any>[];
  checkboxProps?: CheckboxProps;
}
export type LCheckboxBeforeAllProps =
  | {
      /**
       * 标题 label
       */
      label?: ReactNode;
      /**
       * 样式
       */
      style?: CSSProperties;
      /**
       * 失效状态
       */
      disabled?: boolean;
      /**
       * 变化时的回调函数
       */
      onChange?: (checked: boolean) => void;
    }
  | true;
