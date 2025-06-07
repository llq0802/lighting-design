import { Form } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import BaseForm from './components/base-form';
import { LFormContextProvider } from './context';
import type { LFormProps } from './interface';

function LForm<T extends any = any>(props: LFormProps<T>): React.ReactElement {
  const { labelWidth, wrapperWidth, alignItems, formItemBottom, ...restProps } = props;

  return (
    <LFormContextProvider
      disabled={props.disabled}
      size={props.size}
      labelWidth={labelWidth}
      wrapperWidth={wrapperWidth}
      alignItems={alignItems}
      formItemBottom={formItemBottom}
    >
      <BaseForm<T> {...restProps} />
    </LFormContextProvider>
  );
}

LForm.Item = LFormItem;
LForm.List = Form.List;
LForm.Provider = Form.Provider;
LForm.ErrorList = Form.ErrorList;
LForm.useForm = Form.useForm;
LForm.useFormInstance = Form.useFormInstance;
LForm.useWatch = Form.useWatch;

export default LForm;
export { useLFormContext } from './context';
export * from './interface';
