import { Form, Space } from 'antd';
import type { FC, ReactNode } from 'react';
import LFormItem from '../FormItem';
import type { BaseFormProps } from './base/BaseForm';
import BaseForm from './base/BaseForm';

export type LFormProps = BaseFormProps;

const LForm: FC<LFormProps> & {
  // ts中的typeof是 根据已有的值 来获取值的类型  来简化代码的书写
  // keyof 作用：获取接口、对象（配合 typeof）、类等的所有属性名组成的联合类型。
  Item: typeof LFormItem;
  List: typeof Form.List;
  useForm: typeof Form.useForm;
  Provider: typeof Form.Provider;
  ErrorList: typeof Form.ErrorList;
  useFormInstance: typeof Form.useFormInstance;
  useWatch: typeof Form.useWatch;
} = ({ submitter, ...restProps }) => {
  const submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;

  const submitterConfig =
    typeof submitter === 'undefined' || submitter
      ? {
          render: (dom: ReactNode) => (
            <Form.Item
              label=""
              colon={false}
              style={{ marginBottom: 0 }}
              wrapperCol={submitterProps?.wrapperCol}
            >
              <div style={{ display: 'flex', justifyContent: submitter?.buttonAlign ?? 'left' }}>
                {Array.isArray(dom) && dom.length > 1 ? <Space>{dom}</Space> : dom}
              </div>
            </Form.Item>
          ),
          ...submitterProps,
        }
      : false;

  return (
    <BaseForm
      submitter={submitterConfig}
      contentRender={(itemsDom, submitterDom) => (
        <>
          {itemsDom}
          {submitterDom}
        </>
      )}
      {...restProps}
    />
  );
};

LForm.Item = LFormItem;
LForm.List = Form.List;
LForm.Provider = Form.Provider;
LForm.ErrorList = Form.ErrorList;
LForm.useForm = Form.useForm;
LForm.useFormInstance = Form.useFormInstance;
LForm.useWatch = Form.useWatch;

export default LForm;
