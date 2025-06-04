import type { FormInstance, FormProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';
import type { LFormSubmitterProps } from './components/base-submitter';
import type { LFormContextType } from './context';

export type LFormProps<T = any> = Omit<FormProps, 'onValuesChange' | 'onReset' | 'onFinish'> &
  LFormContextType & {
    /**
     * 重新渲染 LForm 组件的所有children
     * - LForm 下面所有的 Form.Item
     */
    renderChildren?: (formItemsDom: ReactNode, submitterDom: ReactNode, form: FormInstance<T>) => ReactNode;
    /**
     * 重新渲染整个 LForm
     */
    renderLFrom?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
    /**
     * 表单是否准备完成
     * - false时，禁止触发提交
     * - true 时，会对初始值重新赋值。
     * - 通常用于异步设置表单的初始值
     */
    isReady?: boolean;
    /**
     * 内置默认的***提交/重置***按钮配置
     * - 满足大多数场景的按钮配置, 也可通过`submitter.render`自定义渲染后绑定`form`的各种方法
     * - 为`false`不会渲染内置的按钮, 需要自行通过`form`实例设置重置或提交
     */
    submitter?: false | Omit<LFormSubmitterProps, 'formItemBottom'>;
    /**
     * 点击提交按钮并且表单提交完成后回调
     * - `submitter` 的 `submitButtonProps.preventDefault`为`false`时生效
     * - 优先级比 submitter 的 onFinish 低;
    /**
     * 点击重置按钮并且表单重置完成后回调
     * - `submitter` 的 `resetButtonProps.preventDefault`为`false`时生效
     * - 优先级比 submitter 的 onReset 低
     */
    onReset?: (event: React.MouseEvent<HTMLElement>) => void;

    /**
     * 在 onFinish 调用之前转化表单值
     * - 返回结果是 onFinish 的参数
     */
    transformValues?: (values: T) => T & Record<string, any>;
    /**
     * 提交数据时触发。
     * - 如果是异步函数，会自动管理***提交/重置***按钮的 loading，外部无需再设置 loading。
     */
    onFinish?: (values: T) => any;
    /**
     * 字段值更新时触发
     * - 不建议单独设置表单项的 onChange, 而是统一在此设置
     * @param currentName 当前改变的字段名
     * @param currentValue 当前改变的字段值
     * @param allValues 表单所有的数据
     */
    onValuesChange?(currentName: string, currentValue: any, allValues: T): void;
    children?: ReactNode;
  };
