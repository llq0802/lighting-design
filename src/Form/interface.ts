import type { ButtonProps, FormInstance, FormProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';

export interface LFormSubmitterProps {
  /** 内部的表单的初始值 */
  innerInitVal?: Record<string, any>;
  /** 重置按钮名称*/
  resetText?: ReactNode;
  /** 提交按钮名称*/
  submitText?: ReactNode;
  /** 重置按钮的Props 如果配置preventDefault为`true`则不会触发表单重置事件 */
  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 提交按钮的Props 如果配置preventDefault为`true`则不会触发表单提交事件 */
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 点击重置按钮并且表单重置完成后回调 */
  onReset?: (event: React.MouseEvent<HTMLElement>) => void;
  /** 提交回调 */
  onSubmit?: (event: React.MouseEvent<HTMLElement>) => void;
  /** 是否能按enter建提交 */
  isEnterSubmit?: boolean;
  /** 表单是否准备完成 */
  isReady?: boolean;
  /** 内部的重置按钮是否使用 form.resetFields() */
  isAntdReset?: boolean;
  /** 是否展示重置按钮 */
  showReset?: boolean;
  /** form实例 */
  form?: FormInstance;
  /** 同Form的wrapperCol */
  wrapperCol?: FormProps['wrapperCol'];
  /** 重新渲染函数 */
  render?: (dom: ReactElement[], props: LFormSubmitterProps) => ReactNode[] | ReactNode | false;
  /** 按钮位置 */
  buttonAlign?: 'left' | 'right' | 'center' | number | string;
}

export interface BaseFormProps<T = Record<string, any>>
  extends Omit<FormProps<T>, 'onReset' | 'onValuesChange'> {
  /**
   *lable宽度。 同 labelCol={{ flex: '90px' }}
   * - 不要与`labelCol`属性同时设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  labelWidth?: number | 'auto' | string;
  /**
   * 重新渲染 LForm 组件的所有children
   * - Form下面所有的Form.Item
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance<T>,
  ) => ReactNode;
  /**
   * 重新渲染整个 LForm
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /**
   * 表单是否渲染完成
   * - false时，禁止触发提交
   * - true 时，会对初始值重新赋值。
   * - 通常用于异步设置表单的初始值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  isReady?: boolean;
  /**
   * 表单***提交/重置***按钮的 loading
   * - 通常无需外部设置
   * - onFinish是异步函数提交时会自动管理
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  loading?: boolean;
  /**
   * 内置默认的***提交/重置***按钮配置
   * - 满足大多数场景的按钮配置, 也可通过`submitter.render`自定义渲染后绑定`form`的各种方法
   * - 为`false`不会渲染内置的按钮, 需要自行通过`form`实例设置重置或提交
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /**
   * 点击重置按钮并且表单重置完成后回调
   * - `submitter` 的 `resetButtonProps.preventDefault`为`false`时生效
   * - 优先级比 submitter 的 onReset 低
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onReset?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * 内置的重置按钮是否使用 `antd 的 form.resetFields()`
   * - 根据 LForm 的子组件的实际情况设置
   * - `true` 时会每次重置就会重新挂挂载子组件
   * - `false` 时不会重新挂挂载子组件 , 如LFormItem或者Form.Item中的数据通过异步获取建议设置为`false`
   */
  isAntdReset?: boolean;
  /**
   * 是否按`Enter`键能提交表单
   * - 如果设置 `submitter.render` 且不使用内部 `dom (提交按钮)` 则无效
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  isEnterSubmit?: boolean;
  /**
   * 在 onFinish 调用之前转化表单值
   * - 返回结果是 onFinish 的参数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  transformValues?: (values: T) => T;
  /**
   * 提交数据时触发。
   * - 如果是异步函数，会自动管理***提交/重置***按钮的 loading，外部无需再设置 loading。
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onFinish?: (values: T) => any;
  /**
   * 字段值更新时触发回调事件
   * - 不建议单独设置表单项的 onChange, 而是统一在此设置
   * @param currentName 当前改变的字段名
   * @param currentValue 当前改变的字段值
   * @param allValues 表单所有的数据
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onValuesChange?(currentName: string, currentValue: any, allValues: T): void;

  children?: ReactNode;
  /** 内部使用：表单初始值。（因为_formInitValRef.current是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到） */
  _formInitValRef?: any;
}
