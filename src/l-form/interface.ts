import type { FormInstance, FormProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';
import type { LFormSubmitterProps } from './components/base-submitter';
import type { LFormContextType } from './context';

/**
 * 表单组件属性接口
 * 扩展自 Ant Design 的 FormProps，但排除了 onValuesChange、onFinish 和 onReset 属性
 * 同时继承了 LFormContextType 的属性
 * @template T 表单数据类型
 */
export type LFormProps<T = any> = Omit<FormProps<T>, 'onValuesChange' | 'onFinish' | 'onReset'> &
  LFormContextType & {
    /**
     * 重新渲染 LForm 组件的所有 children
     * - LForm 下面所有的 Form.Item
     * @param params 包含表单元素和提交按钮的参数对象
     * @param params.formItemsDom 表单项的 DOM 元素
     * @param params.submitterDom 提交按钮的 DOM 元素
     * @param params.form 表单实例
     * @param props 表单组件的属性
     * @returns 自定义渲染的 React 节点
     */
    renderChildren?: (
      params: { formItemsDom: ReactNode; submitterDom: ReactNode; form: FormInstance<T> },
      props: LFormProps,
    ) => ReactNode;

    /**
     * 重新渲染整个 LForm
     * @param params 包含各种 DOM 元素的参数对象
     * @param params.dom 完整的表单 DOM 元素
     * @param params.formItemsDom 表单项的 DOM 元素
     * @param params.submitterDom 提交按钮的 DOM 元素
     * @param params.form 表单实例
     * @param props 表单组件的属性
     * @returns 自定义渲染的 React 节点
     */
    renderLFrom?: (
      params: {
        dom: ReactElement;
        formItemsDom: ReactNode;
        submitterDom: ReactNode;
        form: FormInstance<T>;
      },
      props: LFormProps,
    ) => ReactNode;

    /**
     * 表单是否准备完成
     * - false时，禁止触发提交
     * - true 时，会对初始值重新赋值。
     * @default true
     */
    isReady?: boolean;

    /**
     * 内置默认的***提交/重置***按钮配置
     * - 满足大多数场景的按钮配置, 也可通过[submitter.render](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Form\components\base-submitter.tsx#L26-L26)自定义渲染后绑定[form](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L74-L74)的各种方法
     * - 为[false](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L111-L111)不会渲染内置的按钮, 需要自行通过[form](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L74-L74)实例设置重置或提交
     */
    submitter?: false | Omit<LFormSubmitterProps<T>, 'isReady' | 'formInstance'>;

    /**
     * 在 onFinish 调用之前转化表单值
     * - 返回结果是 onFinish 的参数
     * @param values 表单原始值
     * @returns 转换后的表单值
     */
    transformValues?: (values: T) => T & Record<string, any>;

    /**
     * 提交数据时触发。
     * - 如果是异步函数，会自动管理***提交/重置***按钮的 loading，外部无需再设置 loading。
     * @param values 表单数据
     * @returns any 返回值
     */
    onFinish?: (values: T) => any;

    /**
     * 字段值更新时触发
     * - 不建议单独设置表单项的 onChange, 而是统一在此设置
     * @param currentName 当前改变的字段名
     * @param currentValue 当前改变的字段值
     * @param allValues 表单所有的数据
     */
    onValuesChange?(currentName: keyof T & string, currentValue: T[keyof T], allValues: T): void;

    /** 子元素 */
    children?: ReactNode;
    /**
     * submitter 的重置按钮点击时触发
     *  - 当 submitter 为 false 时，不会触发
     * - 当 render 时 重新渲染时不使用 reserDom 不会触发
     */
    onReset?: (event: React.MouseEvent<HTMLElement>) => void;
  };
