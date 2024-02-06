import type { FormInstance, StepProps, StepsProps } from 'antd';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import type { ReactElement, ReactNode } from 'react';
import type { LStepsFormSubmitterProps } from './StepsSubmitter';

export type LStepsFormActionRef = {
  /** 表单实例数组 */
  formInstanceList: FormInstance<any>[];
  /** 到指定步骤 */
  toStep: (num: number) => void;
  /** 上一步 */
  prev: () => void;
  /** 下一步 */
  next: (submitted?: boolean) => void;
  /** 提交 */
  submit: (isFinallySubmit?: boolean) => void;
  /** 重置 */
  reset: () => void;
};

export type LStepsFormProps = {
  /**
   * 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  direction?: 'horizontal' | 'vertical';
  /**
   *  Steps 组件最外层容器类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperClassName?: string;
  /**
   *  Steps 组件最外层容器样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperStyle?: React.CSSProperties;

  /**
   * 组件最外层容器样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  style?: React.CSSProperties;
  /**
   * 设置后变为受控模式。当前表单的步骤数。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  current?: number;
  /**
   *  发生改变的事件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onCurrentChange?: (current: number) => void;

  /**
   * 组件最外层容器类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  className?: string;
  /**
   * 表单外层容器的类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentClassName?: string;
  /**
   * 表单外层容器的样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentStyle?: React.CSSProperties;
  /**
   * 默认当前的步骤
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  defaultCurrent?: number;

  /**
   * 被隐藏时是否销毁 DOM 结构
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  destroyStepForm?: boolean;
  /**
   * 是否将 onFinish 的得到的所有 form 数据合并
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isMergeValues?: boolean;
  /**
   * 是否提交完成后需要重置
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isResetFields?: boolean;
  /**
   * 内部的重置按钮是否使用 form.resetFields() true时会每次重置就会重新挂挂载子组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isAntdReset?: boolean;
  /**
   * 是否准备好
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isReady?: boolean;
  /**
   * 实例包含一些方法和属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  actionRef?: MutableRefObject<LStepsFormActionRef | undefined>;
  /**
   * 在哪步为最终的提交操作, 用于触发 onFinish 默认为表单最后一步
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitStepNum?: number;

  /**
   * 默认表单最后一步提交成功触发，如果返回true就会自动重置表单(包括StepForm变回第一步)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onFinish?: (valuse: Record<string, any>) => Promise<void | boolean>;

  /**
   *上一步下一步提交按钮的配置项
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitter?: LStepsFormSubmitterProps | false;

  /**
   *antd Steps 组件的属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsProps?: StepsProps;
  /**
   *LForm 组件的属性
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  formProps?: Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'>;
  /**
   * 重新渲染整个组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsFormRender?: (stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode;
  /**
   * 重新渲染每个表单组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepFormRender?: (dom: ReactNode, index: number) => ReactNode;
  /**
   * 重新渲染步骤组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsRender?: (dom: ReactNode, items: StepProps[]) => ReactNode;
  children: ReactElement[];
};
