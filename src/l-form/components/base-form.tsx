import { useMemoizedFn } from 'ahooks';
import type { FormProps } from 'antd';
import { Form } from 'antd';
import { useState, type JSXElementConstructor, type ReactElement } from 'react';
import { useLFormInstance } from '../hooks';
import type { LFormProps } from '../interface';
import Submitter from './base-submitter';

function BaseForm<T extends any>(props: LFormProps<T>): React.ReactElement {
  const {
    submitter,
    isEnterSubmit,
    transformValues,
    onReset,
    children,
    renderChildren,
    renderLFrom,
    //
    form: outForm,
    onValuesChange,
    onFinish,
    ...restProps
  } = props;
  const formRef = useLFormInstance<T>(outForm);
  const [loading, setLoading] = useState(false);

  const innerOnValuesChange: FormProps['onValuesChange'] = useMemoizedFn((changedValues, allValues) => {
    const [currentName, currentValue] = Object.entries(changedValues)?.[0] || [];
    onValuesChange?.(currentName, currentValue, allValues);
  });

  const innerOnFinish = useMemoizedFn(async (values: T) => {
    if (typeof onFinish !== 'function') return;
    const formValues = transformValues ? transformValues(values) : values;
    const ret = onFinish?.(formValues);
    if (ret instanceof Promise) {
      setLoading(true);
      return ret
        .then((r) => {
          setLoading(false);
          return r;
        })
        .catch((e) => {
          setLoading(false);
          return Promise.reject(e);
        });
    }
  });

  const childrenDom = renderChildren ? renderChildren(children, 9, formRef.current) : children;

  const showSubmitter = typeof submitter === 'boolean' ? submitter : true;

  const formDom = (
    <Form<T> {...restProps} form={formRef.current} onValuesChange={innerOnValuesChange} onFinish={innerOnFinish}>
      <Form.Item noStyle shouldUpdate>
        {(formInstance) => {
          formRef.current = formInstance;
          return null;
        }}
      </Form.Item>
      {childrenDom}
      <Submitter />
    </Form>
  );

  const returnDom = renderLFrom ? renderLFrom(formDom, 9) : formDom;

  return returnDom as ReactElement<any, string | JSXElementConstructor<any>>;
}

export default BaseForm;
