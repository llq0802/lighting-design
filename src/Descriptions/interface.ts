import type { ColProps, FormItemProps, FormProps, RowProps, SpinProps } from 'antd';
import type { ReactNode } from 'react';

export type LDescriptionsProps = {
  wrapperCol?: FormProps['wrapperCol'];
  labelCol?: FormProps['labelCol'];
  /**
   *左上角标题
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  title?: ReactNode;
  /**
   *右上角额外元素
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  extra?: ReactNode;
  /**
   *类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  className?: string;
  /**
   *样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  style?: React.CSSProperties;
  /**
   *头部样式 控制 `title`与`extra`的容器
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  headerStyle?: React.CSSProperties;
  /**
   *列字段配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  columns?: LDescriptionItem[];
  /**
   *一行展示几列 也可以设置 `ColProps`的配置来设置响应式展示几列
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  column?: number | ColProps;
  /**
   *每一项的间距
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  gutter?: RowProps['gutter'];
  /**
   *布局模式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  layout?: FormProps['layout'];
  /**
   *每一项标题对齐方式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleAlign?: 'left' | 'right';
  /**
   *每一项标题宽度 只在 layout 为 horizontal 生效
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleWidth?: number | string;
  /**
   *每一项标题过长时是否换行
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  titleWrap?: boolean;
  /**
   *每一项标题后面是否加上`：`符号
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  colon?: boolean;
  /**
   *最后一项是否占满包含块
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  isLastBlock?: boolean;
  /**
   *每一项的`marginBottom`值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  marginBottom?: number | string;
  /**
   *loading配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  loading?: boolean | SpinProps;
  /**
   *字段数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  record?: Record<string, ReactNode>;
  /**
   *重新渲染每一项的标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDescriptionsProps
   */
  renderTitle?: FormProps['requiredMark'];
};

export type LDescriptionItem = {
  /** 当前项的标题 */
  title?: ReactNode;
  /** 当前项的key */
  dataIndex: string;
  span?: number;
  style?: React.CSSProperties;
  titleWidth?: number | string;
  col?: ColProps;
  colStyle?: React.CSSProperties;
  tooltip?: FormItemProps['tooltip'];
  required?: boolean;
  /** 空节点展示的内容 */
  emptyNode?: ReactNode;
  /** 是否禁用当前项 */
  disabled?: boolean;
  /** 重新渲染当前项 */
  render?: (curVal: ReactNode, record: Record<string, ReactNode>, index: number) => ReactNode;
};
