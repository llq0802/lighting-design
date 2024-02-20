import { Form, Space } from 'antd';
import { BUTTON_ALIGN_MAP, emptyObject } from 'lighting-design/constants';
import type { FC, ReactElement, ReactNode } from 'react';
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
  const submitterProps = typeof submitter === 'boolean' || !submitter ? emptyObject : submitter;
  const { render, ...restSubmitterProps } = submitterProps;
  const submitterConfig =
    submitter === void 0 || submitter
      ? {
          render: (dom: ReactNode) => {
            //  默认配置的dom
            const newDom = Array.isArray(dom) && dom.length > 1 ? <Space>{dom}</Space> : dom;
            return (
              <Form.Item
                colon={false}
                className="lightd-form-submitter"
                style={{
                  marginBottom: 0,
                  paddingLeft:
                    typeof submitter?.buttonAlign === 'number'
                      ? `${submitter?.buttonAlign}px`
                      : typeof submitter?.buttonAlign === 'string' &&
                        !isNaN(parseFloat(submitter?.buttonAlign))
                      ? `${submitter?.buttonAlign}`
                      : 0,
                }}
                wrapperCol={submitterProps?.wrapperCol}
              >
                <div
                  className="lightd-form-submitter-wrapper"
                  style={{
                    display: 'flex',
                    justifyContent:
                      typeof submitter?.buttonAlign === 'string'
                        ? // @ts-ignore
                          BUTTON_ALIGN_MAP[submitter?.buttonAlign]
                        : 'initial',
                  }}
                >
                  {render ? <>{render(newDom as ReactElement[], submitterProps)}</> : newDom}
                </div>
              </Form.Item>
            );
          },

          ...restSubmitterProps,
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
export type { LFormSubmitterProps } from './base/Submitter';
