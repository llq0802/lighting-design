import { useMemoizedFn, useRafState, useUpdateEffect } from 'ahooks';
import type { FormInstance, FormProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import {
  Children,
  createContext,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { isFunction, uniqueId } from '../../_utils';
import type { LFormSubmitterProps } from './Submitter';
import Submitter from './Submitter';

const prefixCls = 'lightd-form';

export interface BaseFormProps
  extends Omit<FormProps, 'onReset' | 'title' | 'onValuesChange'> {
  /**
   *LForm 下面所有的 LFormItemXXX 或者 Form.Item 的 name 的属性值组成的字段数组
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  allFields?: string[];
  /**
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  labelWidth?: number | 'auto';
  /**
   * 渲染Form组件的children (Form.Item)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance,
  ) => ReactNode;
  /**
   * 重新渲染Form
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /**
   * 表单是否渲染完成  false时，禁止触发 submit。true 时，会对表单初始值重新赋值。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  isReady?: boolean;
  /**
   * 表单提交按钮的loading (用户提交时会自动管理)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  loading?: boolean;
  /**
   * 默认按钮配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /**
   * 重置按钮事件回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  onReset?: (event: MouseEvent<HTMLElement>) => void;
  /**
   * 是否按Enter键能提交表单
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  isEnterSubmit?: boolean;
  /**
   * 在 onFinish 调用之前转化表单值 返回结果是 onFinish 的参数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  transformValues?: (values: Record<string, any>) => Record<string, any>;
  /**
   * 提交数据时触发。如果是异步函数，会自动管理 提交和重置按钮的 loading，外部无需再设置 loading。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  onFinish?: (values: Record<string, any>) => any;
  /**
   * 字段值更新时触发回调事件 (不建议设置每一项的onChange,而是统一在此设置)
   * @param currentName 当前改变的字段名
   * @param currentValue 当前改变的字段值
   * @param allValues 表单所有的数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormProps
   */
  onValuesChange?(
    currentName: string,
    currentValue: any,
    allValues: Record<string, any>,
  ): void;

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
  labelColProps: {},
  disabled: void 0,
  size: void 0,
});

function BaseForm(props: BaseFormProps): JSX.Element {
  const {
    _lformRef,
    allFields,

    labelWidth = 'auto',
    contentRender,
    formRender,
    submitter,
    loading: outLoading = false,
    isEnterSubmit = true,
    isReady = true,
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
  const [loading, setLoading] = useRafState(outLoading);
  const formId = useMemo(() => name || `${uniqueId('lightd-form')}}}`, [name]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  useUpdateEffect(() => {
    // 准备完成后，重新设置初始值
    if (isReady) {
      // 动态设置表单的初始值
      formRef.current?.setFieldsValue({ ...initialValues });
      // resetFields 会重置整个 Field，
      // 因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
      // formRef.current?.resetFields?.();
    }
  }, [isReady]);

  const formItems = Children.toArray(children);

  const getFieldObj = useMemoizedFn((formItems: any[], fields?: any[]) => {
    let ret: Record<string, any> = {};

    if (!submitter) {
      return ret;
    }

    if (fields?.length) {
      fields.forEach((field: any) => {
        if (field && typeof field !== 'object') {
          ret[field] = initialValues?.[field] ?? void 0;
        } else if (field === 0) {
          ret[0] = initialValues?.[0] ?? void 0;
        }
      });

      return ret;
    }

    formItems.forEach((item: any) => {
      const itemName = item?.props?.name;
      const child = item?.props?.children;
      if (Children.toArray(child)?.length) {
        ret = {
          ...ret,
          ...getFieldObj(Children.toArray(child), fields),
        };
      } else {
        if (itemName && typeof itemName !== 'object') {
          ret[itemName] = initialValues?.[itemName] ?? void 0;
        } else if (itemName === 0) {
          ret[0] = initialValues?.[0] ?? void 0;
        }
      }
    });
    return ret;
  });

  const initFieldValues = useMemo(
    () => getFieldObj(formItems, allFields),
    [formItems, allFields?.join(''), submitter],
  );

  useImperativeHandle(_lformRef, () => {
    // 因为 initFieldValues 是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到
    return initFieldValues;
  });

  const labelColProps = useMemo(() => {
    const labelFlex =
      layout !== 'vertical' && labelWidth && labelWidth !== 'auto'
        ? { flex: `0 0 ${labelWidth}px` }
        : {};
    return {
      ...labelFlex,
      ...labelCol,
    };
  }, [layout, labelWidth, labelCol]);

  const handleOnFinish = useMemoizedFn(async (values) => {
    if (!isFunction(onFinish)) return;

    const formValues = transformValues
      ? transformValues(values) ?? values
      : values;
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

  const submitterProps = useMemo(
    () => (typeof submitter === 'boolean' || !submitter ? {} : submitter),
    [submitter],
  );

  const submitterDom = useMemo(() => {
    return submitter ? (
      <Submitter
        initFormValues={initFieldValues}
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
  }, [initFieldValues, isReady, loading, onReset, submitter, submitterProps]);

  const formContent = contentRender
    ? contentRender(formItems, submitterDom, formRef?.current)
    : formItems;

  const onKeyUp = useMemoizedFn((event) => {
    const buttonHtmlType = submitterProps?.submitButtonProps?.htmlType;
    if (
      isEnterSubmit &&
      buttonHtmlType !== 'submit' &&
      event.key === 'Enter' &&
      isReady
    ) {
      formRef.current?.submit();
    }
  });

  const innerOnValuesChange = useMemoizedFn((changedValues, allValues) => {
    const [currentName, currentValue] = Object.entries(changedValues)?.[0];
    onValuesChange?.(currentName, currentValue, allValues);
  });

  const formDom = (
    <LFormContext.Provider
      value={{
        size,
        disabled,
        layout,
        labelColProps,
        // formInstance: formRef.current,
      }}
    >
      <Form
        size={size}
        name={formId}
        layout={layout}
        form={formRef.current}
        labelCol={labelColProps}
        initialValues={initialValues}
        className={classnames(prefixCls, className)}
        onFinish={handleOnFinish}
        onKeyUp={onKeyUp}
        onValuesChange={innerOnValuesChange}
        {...restProps}
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

  return (
    formRender ? formRender(formDom, submitterDom) : formDom
  ) as JSX.Element;
}

export default BaseForm;

// rules: [
//   {
//     pattern: /^(?!0)\d{1,3}$/,
//     message: '只能输入1~999整数',
//     required: true
//   },
// ],
