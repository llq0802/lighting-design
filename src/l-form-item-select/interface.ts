import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { SelectProps, SpinProps } from 'antd';
import type { LFormItemActionRef } from 'lighting-design/interface';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';
import type { ReactNode } from 'react';

export interface LFormItemSelectProps extends LFormItemProps, Pick<LFormProps, 'variant' | 'disabled' | 'size'> {
  placeholder?: string;
  showSearch?: SelectProps['showSearch'];
  mode?: SelectProps['mode'];
  fieldNames?: SelectProps['fieldNames'];
  optionFilterProp?: SelectProps['filterOption'];
  filterOption?: SelectProps['filterOption'];
  /**
   * 数据源
   * -  数据优先级 : `selectProps.options` > `组件本身的 options` > `request 返回值`
   */
  options?: SelectProps['options'] | Record<string, any>[];
  /**
   * 异步请求数据源的函数
   * - 数据优先级 : `selectProps.options` > `组件本身的 options` > `request 返回值`
   * - 不能与 `options` 同时配置
   */
  request?: (...args: any[]) => Promise<{ label: ReactNode; value: string | number; [key: string]: any }[]>;

  /**
   *ahooks 的 useRequest  的配置项
   *@see https://ahooks.js.org/zh-CN/hooks/use-request/basic
   */
  requestOptions?: Options<any, any>;
  /**
   *配置 request 时 useRequest 的返回值实例
   * - 包含全部 ahooks useRequest 的返回值
   * - 一般用于自定义控制 request 的请求逻辑
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef | undefined>;
  /**
   *配置`request`时自定义`loading`效果
   */
  spin?: SpinProps;
  selectProps?: SelectProps;
}
