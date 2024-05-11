import { useMemoizedFn } from 'ahooks';
import type { FormInstance } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import { Children, createContext, useImperativeHandle, useMemo } from 'react';
import { isFunction, uniqueId } from '../../_utils';
import type { BaseFormProps, LFormContextType } from '../interface';
import Submitter from './Submitter';
import { useLFormInitialValues, useLFormInstance, useLoading } from './hooks';

const prefixCls = 'lightd-form';

export const LFormContext = createContext<LFormContextType>({
  layout: 'horizontal',
  labelColProps: {},
  disabled: void 0,
  size: void 0,
  formItemBottom: void 0,
  initialValues: {},
});

function BaseForm<T extends Record<string, any>>(props: BaseFormProps<T>): JSX.Element {
  const {
    labelWidth = 'auto',
    formItemBottom,
    contentRender,
    formRender,
    submitter = false,
    loading: outLoading = false,
    isEnterSubmit = true,
    isReady = true,
    isAntdReset = true,
    disabled = false,
    onReset,
    transformValues,
    name,
    size,
    layout = 'horizontal',
    labelCol,
    form: outForm,
    onFinish,
    children,
    initialValues,
    className,
    onValuesChange,
    _formInitValRef,
    ...restProps
  } = props;

  const formRef = useLFormInstance(outForm);
  const formId = useMemo(() => name || uniqueId('lightd-form'), []);
  const [loading, setLoading] = useLoading(outLoading);

  const innerInitVal = useLFormInitialValues({
    form: formRef.current,
    isAntdReset,
    isReady,
    initialValues,
  });

  useImperativeHandle(_formInitValRef, () => innerInitVal);

  const formItems = Children.toArray(children);

  const submitterProps = useMemo(
    () => (typeof submitter === 'boolean' || !submitter ? {} : submitter),
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

  const handleOnFinish = useMemoizedFn(async (values: T) => {
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

  const handleKeyDown = useMemoizedFn((e) => {
    const htmlType = submitterProps?.submitButtonProps?.htmlType;
    if (!isEnterSubmit && e.key === 'Enter' && htmlType !== 'submit') {
      e.preventDefault();
    }
    restProps.onKeyDown?.(e);
  });

  const submitterDom = useMemo(() => {
    return submitter ? (
      <Submitter
        isAntdReset={isAntdReset}
        isEnterSubmit={isEnterSubmit}
        isReady={isReady}
        innerInitVal={innerInitVal}
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
  }, [innerInitVal, isReady, loading, !!submitter, submitterProps]);

  const formContent = contentRender
    ? contentRender(formItems, submitterDom, formRef?.current)
    : formItems;

  const formDom = (
    <LFormContext.Provider
      value={{
        size,
        disabled,
        layout,
        labelColProps,
        initialValues: innerInitVal,
        formItemBottom,
      }}
    >
      <Form<T>
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
        onKeyDown={handleKeyDown}
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
