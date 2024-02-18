import { useMemoizedFn, useUpdateEffect } from 'ahooks';
import type { FormInstance, FormProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import { Children, createContext, useMemo, useRef } from 'react';
import { isFunction, uniqueId, useLoading } from '../../_utils';
import type { LFormSubmitterProps } from './Submitter';
import Submitter from './Submitter';

const prefixCls = 'lightd-form';

export interface BaseFormProps extends Omit<FormProps, 'onReset' | 'title' | 'onValuesChange'> {
  /**
   *LForm 下面所有的 LFormItemXXX 或者 Form.Item 的 name 的属性值组成的字段数组
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  allFields?: string[] | [string, string][];
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
    form: FormInstance,
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
  onReset?: (event: MouseEvent<HTMLElement>) => void;
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
  transformValues?: (values: Record<string, any>) => Record<string, any>;
  /**
   * 提交数据时触发。如果是异步函数，会自动管理 提交和重置按钮的 loading，外部无需再设置 loading。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onFinish?: (values: Record<string, any>) => any;
  /**
   * 字段值更新时触发回调事件 (不建议设置每一项的onChange,而是统一在此设置)
   * @param currentName 当前改变的字段名
   * @param currentValue 当前改变的字段值
   * @param allValues 表单所有的数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormProps
   */
  onValuesChange?(currentName: string, currentValue: any, allValues: Record<string, any>): void;

  children?: ReactNode;

  /** 内部使用：表单初始值。（因为_lformRef.current是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到） */
  _lformRef?: any;
}

export const LFormContext = createContext<{
  layout: string;
  labelColProps: Record<string, any>;
  disabled?: boolean;
  size?: string;
}>({
  layout: 'horizontal',
  labelColProps: emptyObject,
  disabled: void 0,
  size: void 0,
});

function BaseForm(props: BaseFormProps): JSX.Element {
  const {
    labelWidth = 'auto',
    contentRender,
    formRender,
    submitter,
    loading: outLoading = false,
    isEnterSubmit = true,
    isReady = true,
    isAntdReset = true,
    onReset,
    transformValues,

    name,
    size,
    layout = 'horizontal',
    disabled,
    labelCol,
    form: outForm,
    onFinish,
    children,
    initialValues,
    className,
    onValuesChange,

    ...restProps
  } = props;

  const [form] = Form.useForm();
  const formRef = useRef(outForm || form);
  const formId = useMemo(() => name || uniqueId('lightd-form'), [name]);
  const [loading, setLoading] = useLoading(outLoading);

  useUpdateEffect(() => {
    // 准备完成后，重新设置初始值
    if (isReady) {
      // 动态设置表单的初始值
      // formRef.current?.setFieldsValue({ ...initialValues });
      // formRef.current?.resetFields?.(); // 会重置整个 Field，
      // 因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
      if (isAntdReset) {
        formRef.current?.resetFields?.();
      } else {
        formRef.current?.setFieldsValue({ ...initialValues });
      }
    }
  }, [isReady, JSON.stringify(initialValues)]);

  const formItems = Children.toArray(children);

  // const innerInitialValues = useMemo(() => {
  //   return getFormItemInitValues(formItems, initialValues);
  // }, [JSON.stringify(initialValues)]);
  // console.log('==innerInitialValues====>', innerInitialValues);

  const submitterProps = useMemo(
    () => (typeof submitter === 'boolean' || !submitter ? emptyObject : submitter),
    [submitter],
  );

  const labelColProps = useMemo(() => {
    let labelFlex = {};
    if (layout === 'vertical' || labelWidth === 'auto') {
      labelFlex = {};
    } else if (labelWidth && typeof labelWidth === 'number') {
      labelFlex = { flex: `0 0 ${labelWidth}px` };
    } else if (labelWidth && typeof labelWidth === 'string') {
      labelFlex = { flex: `0 0 ${labelWidth}` };
    } else {
      labelFlex = {};
    }
    return {
      ...labelFlex,
      ...labelCol,
    };
  }, [layout, labelWidth, JSON.stringify(labelCol)]);

  const handleOnFinish = useMemoizedFn(async (values) => {
    if (!isFunction(onFinish)) return;
    const formValues = transformValues ? transformValues(values) ?? values : values;
    const ret: unknown = onFinish?.(formValues);
    if (ret instanceof Promise) {
      setLoading(true);
      return ret
        .then((res) => {
          setLoading(false);
          return res;
        })
        .catch((err) => {
          setLoading(false);
          return Promise.reject(err);
        });
    }
  });

  const innerOnValuesChange = useMemoizedFn((changedValues, allValues) => {
    const [currentName, currentValue] = Object.entries(changedValues)?.[0];
    onValuesChange?.(currentName, currentValue, allValues);
  });

  const handleOnKeyPress = useMemoizedFn((e) => {
    const htmlType = submitterProps?.submitButtonProps?.htmlType;
    if (!isEnterSubmit && e.key === 'Enter' && htmlType !== 'submit') {
      e.preventDefault();
    }

    if (restProps?.onKeyDown) {
      restProps?.onKeyDown(e);
    }
  });

  const submitterDom = useMemo(() => {
    return submitter ? (
      <Submitter
        isAntdReset={isAntdReset}
        isReady={isReady}
        isEnterSubmit={isEnterSubmit}
        initFormValues={initialValues}
        // initFormValues={innerInitialValues}
        onReset={onReset}
        {...submitterProps}
        form={formRef?.current}
        resetButtonProps={{
          disabled: loading || !isReady,
          ...submitterProps?.resetButtonProps,
        }}
        submitButtonProps={{
          loading,
          disabled: !isReady,
          ...submitterProps?.submitButtonProps,
        }}
      />
    ) : null;
  }, [JSON.stringify(initialValues), isReady, loading, !!submitter, submitterProps, isEnterSubmit]);

  const formContent = contentRender
    ? contentRender(formItems, submitterDom, formRef?.current)
    : formItems;

  const formDom = (
    <LFormContext.Provider value={{ size, disabled, layout, labelColProps }}>
      <Form
        size={size}
        name={formId}
        layout={layout}
        form={formRef.current}
        labelCol={labelColProps}
        initialValues={initialValues}
        className={classnames(prefixCls, className)}
        onFinish={handleOnFinish}
        onValuesChange={innerOnValuesChange}
        {...restProps}
        onKeyDown={handleOnKeyPress}
      >
        <Form.Item noStyle shouldUpdate>
          {(formInstance) => {
            // 支持 fromRef，这里 ref 里面可以随时拿到最新的值
            formRef.current = formInstance as FormInstance;
            return null;
          }}
        </Form.Item>
        {formContent}
      </Form>
    </LFormContext.Provider>
  );

  return (formRender ? formRender(formDom, submitterDom) : formDom) as JSX.Element;
}

export default BaseForm;
