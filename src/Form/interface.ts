import type { ButtonProps, FormInstance, FormProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';

export interface LFormSubmitterProps {
  /** 表单的初始值 */
  initFormValues?: Record<string, any>;
  /** 重置按钮名称*/
  resetText?: ReactNode;
  /** 提交按钮名称*/
  submitText?: ReactNode;
  /** 重置按钮的Props 如果配置preventDefault为`true`则不会触发表单重置事件 */
  resetButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 提交按钮的Props 如果配置preventDefault为`true`则不会触发表单提交事件 */
  submitButtonProps?: ButtonProps & { preventDefault?: boolean };
  /** 重置回调 */
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
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  labelWidth?: number | 'auto' | string;
  /**
   * 渲染Form组件的children (Form.Item)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance<T>,
  ) => ReactNode;
  /**
   * 重新渲染Form
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /**
   * 表单是否渲染完成  false时，禁止触发 submit。true 时，会对表单初始值重新赋值。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  isReady?: boolean;
  /**
   * 表单提交按钮的loading (用户提交时会自动管理)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  loading?: boolean;
  /**
   * 默认按钮配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /**
   * 重置按钮事件回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onReset?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * 内部的重置按钮是否使用 form.resetFields()
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  isAntdReset?: boolean;
  /**
   * 是否按Enter键能提交表单
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  isEnterSubmit?: boolean;
  /**
   * 在 onFinish 调用之前转化表单值 返回结果是 onFinish 的参数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  transformValues?: (values: T) => T;
  /**
   * 提交数据时触发。如果是异步函数，会自动管理 提交和重置按钮的 loading，外部无需再设置 loading。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onFinish?: (values: T) => any;
  /**
   * 字段值更新时触发回调事件 (不建议设置每一项的onChange,而是统一在此设置)
   * @param currentName 当前改变的字段名
   * @param currentValue 当前改变的字段值
   * @param allValues 表单所有的数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onValuesChange?(currentName: string, currentValue: any, allValues: T): void;

  children?: ReactNode;

  /** 内部使用：表单初始值。（因为_formInitValRef.current是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到） */
  _formInitValRef?: any;
}
