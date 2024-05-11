import { Form, Space } from 'antd';
import { BUTTON_ALIGN_MAP } from 'lighting-design/constants';
import { useContext, type FC, type ReactElement, type ReactNode } from 'react';
import LFormItem from '../FormItem';
import BaseForm, { LFormContext } from './base/BaseForm';
import type { BaseFormProps } from './interface';

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
  const { render, buttonAlign, wrapperCol, style, ...restSubmitterProps } = submitterProps;
  const submitterConfig =
    submitter === void 0 || submitter
      ? {
          render: (dom: ReactNode) => {
            const newDom = Array.isArray(dom) && dom.length > 1 ? <Space>{dom}</Space> : dom;
            const paddingLeft =
              typeof buttonAlign === 'number'
                ? `${buttonAlign}px`
                : typeof buttonAlign === 'string' && !isNaN(parseFloat(buttonAlign))
                ? `${buttonAlign}`
                : void 0;

            return (
              <LFormItem
                colon={false}
                className="lightd-form-submitter"
                style={{ marginBottom: 0, paddingLeft, ...style }}
                wrapperCol={wrapperCol}
              >
                <div
                  className="lightd-form-submitter-wrapper"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent:
                      typeof buttonAlign === 'string'
                        ? // @ts-ignore
                          BUTTON_ALIGN_MAP[buttonAlign] ?? void 0
                        : void 0,
                  }}
                >
                  {render ? <>{render(newDom as ReactElement[], submitterProps)}</> : newDom}
                </div>
              </LFormItem>
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

/** 获取 LForm 的上下文 */
export function useLFormContext() {
  const ctx = useContext(LFormContext);
  return ctx;
}

export type LFormProps = BaseFormProps;
export type { LFormContextType, LFormSubmitterProps } from './interface';
export default LForm;
