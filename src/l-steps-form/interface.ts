import type { StepProps, StepsProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { MutableRefObject, ReactNode } from 'react';
import type { StepsSubmitterProps } from './components/steps-submitter';

export type LStepsFormActionRef = {
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

export type LStepsFormProps<T = any> = Omit<LFormProps, 'renderChildren' | 'renderLFrom' | 'submitter'> & {
  items: (StepProps & {
    formName: string;
    formItems: (ReactNode | { name: string; content: ReactNode })[];
  })[];
  /**
   * 设置后变为受控模式。当前表单的步骤数。
   */
  current?: number;
  /**
   * current 发生改变的事件
   */
  onCurrentChange?: (current: number) => void;
  /**
   * 默认当前的步骤
   */
  defaultCurrent?: number;
  /**
   * 被隐藏时是否销毁 DOM 结构
   */
  destroyOnHidden?: boolean;
  /**
   * 初始化时强制渲染所有dom
   */
  forceRender?: boolean;
  /**
   * 是否将每个LStepsForm.StepForm 的 onFinish 得到的表单数据合并成一个对象到最后提交的 onFinish 的参数中
   */
  isMergeValues?: boolean;
  /**
   * 组件是否准备好
   * - false 时不能`上一步` `下一步` `提交`等操作
   */
  isReady?: boolean;
  /**
   * 实例包含一些方法和属性
   */
  actionRef?: MutableRefObject<LStepsFormActionRef | undefined>;
  /**
   * 在哪一步为最终的提交操作, 用于触发 onFinish 默认为表单最后一步
   *  - 通常作为中间步骤为最后提交时设置
   */
  submitStepNum?: number;
  /**
   * 默认表单最后一步提交成功触发，
   * - 如果返回 true 或者 Promise.Resolved(true) 就会自动重置所有表单到初始值`(包括StepForm变回第一步)`
   */
  onFinish?: (valuse: T) => Promise<any>;

  /**
   *`上一步` `下一步` `提交`按钮的配置项
   */
  submitter?: StepsSubmitterProps | false;

  /**
   *antd Steps 组件的属性
   */
  stepsProps?: Omit<StepsProps, 'current' | 'items' | 'initial'>;

  renderChildren?: (
    doms: {
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode;
  renderLStepsForm?: (
    doms: {
      dom: ReactNode;
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
};
