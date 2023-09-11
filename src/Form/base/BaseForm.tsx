import {
  useDeepCompareEffect,
  useMemoizedFn,
  useSafeState,
  useUpdateEffect,
} from 'ahooks';
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
  useState,
} from 'react';
import { uniqueId } from '../../_utils';
import type { LFormSubmitterProps } from './Submitter';
import Submitter from './Submitter';

const prefixCls = 'lightd-form';

export interface BaseFormProps
  extends Omit<FormProps, 'onReset' | 'title' | 'onValuesChange'> {
  /**
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  labelWidth?: number | 'auto';
  /**
   * 渲染Form组件的children (Form.Item)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
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
   *@version 2.1.18
   *@memberof LFormProps
   */
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /**
   * 表单是否渲染完成  false时，禁止触发 submit。true 时，会对表单初始值重新赋值。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  isReady?: boolean;
  /**
   * 表单提交按钮的loading (用户提交时会自动管理)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  loading?: boolean;
  /**
   * 默认按钮配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /**
   * 重置按钮事件回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  onReset?: (event: MouseEvent<HTMLElement>) => void;
  /**
   * 是否按Enter键能提交表单
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  isEnterSubmit?: boolean;
  /**
   * 在 onFinish 调用之前转化表单值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@memberof LFormProps
   */
  transformValues?: (values: Record<string, any>) => Record<string, any>;
  /**
   * 字段值更新时触发回调事件 (不建议设置每一项的onChange,而是统一在此设置)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
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
}>({
  layout: 'horizontal',
  labelColProps: {},
  disabled: void 0,
});

function BaseForm(props: BaseFormProps): JSX.Element {
  const {
    _lformRef,

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
  const [loading, setLoading] = useSafeState(outLoading);
  const [initFormValues, setInitFormValues] = useState(initialValues ?? {}); // 内部初始值
  const formId = useMemo(() => name || uniqueId('lightd-form'), [name]);

  useUpdateEffect(() => {
    // 准备完成后，重新设置初始值
    if (isReady) {
      formRef.current?.setFieldsValue({ ...initialValues });
      // setInitFormValues({ ...initialValues });
      // resetFields 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
      // formRef.current?.resetFields?.();
    }
  }, [isReady]);

  // 深度比较 优化性能
  useDeepCompareEffect(() => {
    setTimeout(() => {
      // 组件第一次加载的时候并且form渲染完成收集初始值.
      // 如果组件被包裹在弹窗或者抽屉组件中 没有预渲染的话则会提示form绑定失败 获取不到初始值
      const initValues = initialValues || formRef.current?.getFieldsValue(); // 解决form实例与moadl绑定失败的问题
      setInitFormValues({ ...initValues });
    });
  }, [initialValues]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  useImperativeHandle(_lformRef, () => {
    // 因为initFormValues是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到
    return initFormValues;
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

  const submitterProps = useMemo(() => {
    return typeof submitter === 'boolean' || !submitter ? {} : submitter;
  }, [submitter]);

  const submitterDom = useMemo(() => {
    return submitter ? (
      <Submitter
        initFormValues={initFormValues}
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
  }, [initFormValues, isReady, loading, onReset, submitter, submitterProps]);

  const formItems = Children.toArray(children);

  const formContent = contentRender
    ? contentRender(formItems, submitterDom, formRef?.current)
    : formItems;

  const handleOnFinish = useMemoizedFn(async (values) => {
    if (typeof onFinish !== 'function') {
      return;
    }
    const formValues = transformValues
      ? transformValues(values) ?? values
      : values;
    const ret: unknown = onFinish(formValues);
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
        disabled,
        layout,
        labelColProps,
        // formInstance: formRef.current,
      }}
    >
      <Form
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
