import type { Options, Result } from 'ahooks/lib/useRequest/src/types';
import type { SelectProps, SpinProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { ReactNode } from 'react';

export type LFormItemActionRef = Result<any, any[]> | undefined;

export interface LFormItemSelectProps
  extends LFormItemProps,
    Pick<SelectProps, 'mode' | 'fieldNames' | 'showSearch' | 'variant'> {
  selectProps?: SelectProps;
  /**
   * 数据源
   * -  数据优先级 : `selectProps.options` > `组件本身的 options` > `request 返回值`
   * - 不能与 `request` 同时配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  options?: SelectProps['options'] | Record<string, any>[];
  /**
   *配置`request`时自定义`loading`效果
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   *@See (https://ant.design/components/spin-cn/#api)
   */
  spin?: SpinProps;
  /**
   *配置 request 时 useRequest 的返回值实例
   * - 包含全部 ahooks useRequest 的返回值
   * - 一般用于自定义控制 request 的请求逻辑
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
  /**
   *ahooks 的 useRequest  的配置项
   *@see https://ahooks.js.org/zh-CN/hooks/use-request/basic
   */
  requestOptions?: Options<any, any>;

  /**
   * 异步请求数据源的函数
   * - 数据优先级 : `selectProps.options` > `组件本身的 options` > `request 返回值`
   * - 不能与 `options` 同时配置
   */
  request?: (
    ...args: any[]
  ) => Promise<{ label: ReactNode; value: string | number; [key: string]: any }[]>;
  /**
   * 组件初始化时是否自动请求
   * 默认为 true
   * - false 时则 refreshDeps 不再生效，需要通过绑定 actionRef 后的 run/runAsync 手动触发请求
   */
  autoRequest?: boolean;
  /**
   * request 的依赖项数组
   * -  autoRequest 为 true 时生效
   * - 在依赖变化时会自动调用 request
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  refreshDeps?: any[];
  /**
   *是否需要全部选项
   * - 只在单选生效
   * - 如果想在多选也有全部选项 , 配置selectProps.dropdownRender自行执行处理
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  all?: boolean;
  /**
   *全部选项的值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allValue?: number | string;
  /**
   *全部选项的名称
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSelectProps
   */
  allLabel?: ReactNode;
}
