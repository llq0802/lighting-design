import type { StepProps, StepsProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { MutableRefObject, ReactNode } from 'react';
import type { StepsSubmitterProps } from './components/steps-submitter';

/**
 * 步骤表单操作引用类型
 * 提供操作步骤表单的各种方法
 */
export type LStepsFormActionRef = {
  /**
   * 跳转到指定步骤
   * @param num 步骤编号（从0开始）
   */
  toStep: (num: number) => void;

  /**
   * 跳转到最后一步
   */
  toLast: () => void;

  /**
   * 上一步
   */
  prev: () => void;

  /**
   * 下一步
   */
  next: () => void;

  /**
   * 提交表单
   * @param isFinallySubmit 是否为最终提交
   */
  submit: (isFinallySubmit?: boolean) => void;

  /**
   * 重置所有表单项并跳到默认步骤
   */
  reset: () => void;
};

/**
 * 步骤表单组件属性接口
 * 扩展自 LFormProps，但排除了 renderChildren、renderLFrom 和 submitter 属性
 * @template T 表单数据类型
 */
export type LStepsFormProps<T = any> = Omit<LFormProps, 'renderChildren' | 'renderLFrom' | 'submitter'> & {
  /**
   * 步骤项配置数组
   * - 每一项代表一个步骤
   */
  items: (StepProps & {
    /**当前步骤收集的表单名 */
    formName: string;

    /**
     * 当前步骤的表单项数组
     * - 可以是 ReactNode 或包含 name 和 content 的对象
     */
    formItems: (
      | ReactNode
      | {
          /**
           * 当 content 的最外层不是 LFormXXX 或者 Form.Item 时, name 为数组
           * @example
           * name: ['name1', 'name2'] // 每一项的值为 content 中 Form.Item 时, LFormXXX 或者 Form.Item 的 name 数组的第二项
           *
           *
           */
          name: string | string[];

          /**
           * 当 content 的最外层不是 LFormXXX 或者 Form.Item 时, LFormXXX 或者 Form.Item 的 name 为数组
           * @example
           *  name: [formName, 'xxx'] // 第一项必须为 formName
           */
          content: ReactNode;
        }
    )[];

    /**
     * 被隐藏时是否销毁 DOM 结构
     * @default false
     */
    destroyOnHidden?: boolean;

    /**
     * 当前步骤表单提交回调
     * @param valuse 表单数据
     * @returns Promise<any> 返回 Promise
     */
    onFinish?: (valuse: T) => Promise<any>;
  })[];

  /**
   * 设置后变为受控模式。当前表单的步骤数。
   * - 需要配合 onCurrentChange 使用
   */
  current?: number;

  /**
   * current 发生改变的事件
   * @param current 当前步骤编号
   */
  onCurrentChange?: (current: number) => void;

  /**
   * 默认当前的步骤
   * @default 0
   */
  defaultCurrent?: number;

  /**
   * 被隐藏时是否销毁 DOM 结构
   * - 对所有步骤项生效
   * @default false
   */
  destroyOnHidden?: boolean;

  /**
   * 初始化时强制渲染所有dom
   * - true: 初始化时渲染所有步骤的 DOM
   * - false: 只渲染当前步骤的 DOM
   * @default false
   */
  forceRender?: boolean;

  /**
   * 是否将每个LStepsForm.StepForm 的 onFinish 得到的表单数据合并成一个对象到最后提交的 onFinish 的参数中
   * @default true
   */
  isMergeValues?: boolean;

  /**
   * 组件是否准备好
   * - false 时不能`上一步` `下一步` `提交`等操作
   * @default true
   */
  isReady?: boolean;

  /**
   * 实例包含一些方法和属性
   * - 通过 ref 可以访问组件内部的方法
   */
  actionRef?: MutableRefObject<LStepsFormActionRef | undefined>;

  /**
   * 在哪一步为最终的提交操作, 用于触发 onFinish 默认为表单最后一步
   *  - 通常作为中间步骤为最后提交时设置
   * @default items.length - 1 (最后一步)
   */
  submitStepNum?: number;

  /**
   * 默认表单最后一步提交成功触发，
   * - 如果返回 true 或者 Promise.Resolved(true) 就会自动重置所有表单到初始值`(包括StepForm变回第一步)`
   * @param valuse 表单数据
   * @returns Promise<any> 返回 Promise
   */
  onFinish?: (valuse: T) => Promise<any>;

  /**
   *`上一步` `下一步` `提交`按钮的配置项
   * - 设置为 false 可隐藏默认按钮
   */
  submitter?: Omit<StepsSubmitterProps, 'stepNum'> | false;

  /**
   * antd Steps 组件的属性
   * - 传递给内部 Steps 组件的属性
   * - 不能包含 current、items 和 initial 属性，因为它们由组件内部管理
   */
  stepsProps?: Omit<StepsProps, 'current' | 'items' | 'initial'>;

  /**
   * 重新渲染组件的子元素
   * @param doms 包含各个部分 DOM 元素的对象
   * @param doms.stepsDom 步骤条 DOM 元素
   * @param doms.contentDom 内容区域 DOM 元素
   * @param doms.submitterDom 提交按钮区域 DOM 元素
   * @param props 组件属性
   * @returns 自定义渲染的 React 节点
   */
  renderChildren?: (
    doms: {
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode;

  /**
   * 重新渲染整个步骤表单组件
   * @param doms 包含各个部分 DOM 元素的对象
   * @param doms.dom 完整的组件 DOM 元素
   * @param doms.stepsDom 步骤条 DOM 元素
   * @param doms.contentDom 内容区域 DOM 元素
   * @param doms.submitterDom 提交按钮区域 DOM 元素
   * @param props 组件属性
   * @returns 自定义渲染的 React 节点
   */
  renderLStepsForm?: (
    doms: {
      dom: ReactNode;
      stepsDom: ReactNode;
      contentDom: ReactNode;
      submitterDom: ReactNode;
    },
    props: LStepsFormProps,
  ) => ReactNode;

  /**
   * 内容区域类名
   * - 应用于步骤内容区域的 CSS 类名
   */
  contentClassName?: string;

  /**
   * 内容区域样式
   * - 应用于步骤内容区域的内联样式
   */
  contentStyle?: React.CSSProperties;
};
