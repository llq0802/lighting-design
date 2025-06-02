import type { FormProps } from 'antd';
import { Form } from 'antd';
import { LFormContextProvider } from './context';
import { useLFormInstance } from './hooks';
import type { LFormProps } from './interface';

function BaseForm<T extends any>(props: LFormProps<T>): React.ReactElement {
  const { form: outForm, onValuesChange, children, ...restProps } = props;
  const formRef = useLFormInstance(outForm);

  const innerOnValuesChange: FormProps['onValuesChange'] = (changedValues, allValues) => {
    const [currentName, currentValue] = Object.entries(changedValues)?.[0] || [];
    onValuesChange?.(currentName, currentValue, allValues);
  };

  return (
    <Form<T> {...restProps} form={formRef.current} onValuesChange={innerOnValuesChange}>
      <Form.Item noStyle shouldUpdate>
        {(formInstance) => {
          formRef.current = formInstance;
          return null;
        }}
      </Form.Item>
      {children}
    </Form>
  );
}

function LForm<T extends any>(props: LFormProps<T>): React.ReactElement {
  return (
    <LFormContextProvider>
      <BaseForm<T> {...props} />
    </LFormContextProvider>
  );
}

export default LForm;
