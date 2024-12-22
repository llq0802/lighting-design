import type { ButtonProps, FormInstance, StepProps, StepsProps } from 'antd';
import type { BaseFormProps, LFormSubmitterProps } from 'lighting-design/Form/interface';
import type { FormEvent, MutableRefObject, ReactElement, ReactNode } from 'react';

export type LStepsFormActionRef =
  | {
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
    }
  | undefined;

export interface LStepsFormSubmitterProps
  extends Pick<
    LFormSubmitterProps,
    'submitText' | 'submitButtonProps' | 'wrapperCol' | 'buttonAlign'
  > {
  /** 上一步按钮的文字 */
  prevText?: ReactNode;
  /** 点击上一步按钮的回调 */
  onPrev?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击上一步按钮的Props*/
  prevButtonProps?: ButtonProps;
  /** 是否显示上一步按钮 */
  showPrev?: boolean;
  /** 下一步按钮的文字 */
  nextText?: ReactNode;
  /** 点击下一步按钮的回调 */
  onNext?: (event?: FormEvent<HTMLFormElement>) => void;
  /** 点击下一步按钮的Props*/
  nextButtonProps?: ButtonProps;
  /** 是否显示下一步按钮 */
  showNext?: boolean;

  /** 点击提交按钮的回调 */
  onSubmit?: (event?: FormEvent<HTMLFormElement>) => void;

  /** 强制显示上一步按钮，优先级比 showPrev 高 */
  forceShowPrev?: boolean;
  /** 强制显示下一步按钮，优先级比 showNext 高 */
  forceShowNext?: boolean;
  /** 强制显示提交按钮 */
  forceShowSubmit?: boolean;

  /** 自定义渲染 */
  render?:
    | ((dom: ReactElement[], props: LStepsFormSubmitterProps) => ReactNode[] | ReactNode | false)
    | false;
}

export interface LStepFormProps
  extends Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'>,
    Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  /** antd Steps 组件的items属性*/
  stepItemProps?: StepProps;
  /** 上一步下一步提交按钮的配置 优先级比StepsForm的submitter高*/
  submitter?: Omit<LStepsFormSubmitterProps, 'total' | 'current' | 'form'> | false;
  /** 当前步骤(索引) 内部使用*/
  readonly _stepNum?: number;
}

export type LStepsFormProps = {
  /**
   * 指定步骤条方向。
   * - 目前支持水平（horizontal）和 竖直（vertical）两种方向
   *@see https://ant.design/components/grid-cn#col
   */
  direction?: 'horizontal' | 'vertical';
  /**
   *  Steps 组件最外层容器类名
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperClassName?: string;
  /**
   *  Steps 组件最外层容器样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsWrapperStyle?: React.CSSProperties;

  /**
   * 组件最外层容器样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  style?: React.CSSProperties;
  /**
   * 设置后变为受控模式。当前表单的步骤数。
   *@see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   *@see https://ant.design/components/grid-cn#col
   */
  current?: number;
  /**
   * current 发生改变的事件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onCurrentChange?: (current: number) => void;
  /**
   * 组件最外层容器类名
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  className?: string;
  /**
   * 表单外层容器的类名
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentClassName?: string;
  /**
   * 表单外层容器的样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  contentStyle?: React.CSSProperties;
  /**
   * 默认当前的步骤
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  defaultCurrent?: number;
  /**
   * 被隐藏时是否销毁 DOM 结构
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  destroyStepForm?: boolean;
  /**
   * 是否将每个LStepsForm.StepForm 的 onFinish 得到的表单数据合并成一个对象到最后提交的 onFinish 的参数中
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isMergeValues?: boolean;
  /**
   * 最终提交完成后否后需要重置所有 `LStepsForm.StepForm` 到初始值
   */
  isResetFields?: boolean;
  /**
   * 内部的重置按钮是否使用 form.resetFields()
   * - true 时会每次重置就会重新挂载`LStepsForm.StepForm`的子组件
   * - false 时不会每次重置就会重新挂载`LStepsForm.StepForm`的子组件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isAntdReset?: boolean;
  /**
   * 组件是否准备好
   * - false 时不能`上一步` `下一步` `提交`等操作
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  isReady?: boolean;
  /**
   * 实例包含一些方法和属性
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  actionRef?: MutableRefObject<LStepsFormActionRef>;
  /**
   * 在哪步为最终的提交操作, 用于触发 onFinish 默认为表单最后一步
   *  - 通常作为中间步骤为最后提交时设置
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitStepNum?: number;
  /**
   * 默认表单最后一步提交成功触发，
   * - 如果返回 true 或者 Promise.Resolved(true) 就会自动重置所有表单到初始值`(包括StepForm变回第一步)`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  onFinish?: (valuse: Record<string, any>) => Promise<void | boolean>;

  /**
   *上一步下一步提交按钮的配置项
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  submitter?: LStepsFormSubmitterProps | false;

  /**
   *antd Steps 组件的属性
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsProps?: StepsProps;
  /**
   * 统一设置 LStepsForm.StepForm的表单配置
   * - 某些属性方法不支持
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  formProps?: Omit<BaseFormProps, 'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'>;
  /**
   * 重新渲染整个组件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsFormRender?: (stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode;
  /**
   * 重新渲染每个表单组件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepFormRender?: (dom: ReactNode, index: number) => ReactNode;
  /**
   * 重新渲染每个步骤条组件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LStepsFormProps
   */
  stepsRender?: (dom: ReactNode, items: StepProps[]) => ReactNode;
  children: ReactElement[];
};
