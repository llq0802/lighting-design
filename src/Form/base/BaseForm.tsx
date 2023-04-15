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

export interface BaseFormProps extends Omit<FormProps, 'onReset' | 'title'> {
  /** lable的宽度 */
  labelWidth?: number | 'auto';
  /** 渲染Form组件的children (Form.Item) */
  contentRender?: (
    formItemsDom: ReactNode[],
    submitterDom: ReactNode,
    form: FormInstance,
  ) => ReactNode;
  /** 重新渲染Form*/
  formRender?: (formDom: ReactElement, submitterDom: ReactNode) => ReactNode;
  /** 表单是否渲染完成  false时，禁止触发 submit。true 时，会对表单初始值重新赋值。 */
  isReady?: boolean;
  /** 表单提交按钮的loading (用户提交时会自动管理)*/
  loading?: boolean;
  /** 默认按钮配置 */
  submitter?: false | Omit<LFormSubmitterProps, 'form'>;
  /** 重置按钮事件回调 */
  onReset?: (event: MouseEvent<HTMLElement>) => void;
  /** 是否按Enter键能提交表单 */
  isEnterSubmit?: boolean;
  /** 在onFinish调用之前转化表单值 */
  transformValues?: (values: Record<string, any>) => Record<string, any>;

  children?: ReactNode;

  /** 内部使用 */
  _lformRef?: any;
}

export const LFormContext = createContext<{
  layout: string;
  labelColProps: Record<string, any>;
  disabled?: boolean;
}>({
  layout: 'horizontal',
  labelColProps: {},
  disabled: undefined,
});

function BaseForm(props: BaseFormProps): JSX.Element {
  const {
    _lformRef,

    labelWidth = 'auto',
    contentRender,
    formRender,
    submitter = {},
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
    // 组件第一次加载的时候并且form渲染完成收集初始值.
    // 如果组件被包裹在弹窗或者抽屉组件中 没有预渲染的话则会提示form绑定失败 获取不到初始值
    const initValues = initialValues || formRef.current?.getFieldsValue(); // 解决form实例与moadl绑定失败的问题
    // console.log('initValues', initValues);
    setInitFormValues({ ...initValues });
  }, [initialValues]);

  useUpdateEffect(() => {
    setLoading(outLoading);
  }, [outLoading]);

  useImperativeHandle(_lformRef, () => {
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

  const formId = useMemo(() => name || uniqueId('lightd-form'), [name]);

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
        onValuesChange={onValuesChange}
        onFinish={handleOnFinish}
        onKeyPress={(event) => {
          const buttonHtmlType = submitterProps?.submitButtonProps?.htmlType;
          if (
            isEnterSubmit &&
            buttonHtmlType !== 'submit' &&
            event.key === 'Enter' &&
            isReady
          ) {
            formRef.current?.submit();
          }
        }}
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
