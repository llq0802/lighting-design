/* eslint-disable @typescript-eslint/no-unused-vars */
import type { StepProps } from 'antd';
import { Form } from 'antd';
import { useContext, useEffect } from 'react';
import type { BaseFormProps } from '../../../base/BaseForm';
import BaseForm from '../../../base/BaseForm';
import StepsFormContext from './StepsFormContext';
import type { StepsFormSubmitterProps } from './StepsSubmitter';

export interface StepFormProps<Values = any>
  extends Omit<
      BaseFormProps<Values>,
      'title' | 'onReset' | 'contentRender' | 'submitter' | 'ready'
    >,
    Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  stepProps?: StepProps;
  submitter?: Omit<StepsFormSubmitterProps, 'total' | 'current' | 'form'> | false;
  readonly step?: number;
  next: () => void;
}

function StepForm<Values = any>({
  submitter,
  step,
  next,
  title,
  icon,
  subTitle,
  description,
  stepProps,

  name,
  onFinish,
  form: outForm,
  ...restProps
}: StepFormProps<Values>) {
  const ctx = useContext(StepsFormContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (ctx && ctx?.formInstanceListRef) {
      ctx.formInstanceListRef.current[step as number] = outForm || form;
    }
    // Modal组件可能未加载时拿不到 form实例
    ctx?.forgetUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseForm
      name={name}
      form={outForm || form}
      onFinish={async (values) => {
        let ret: unknown = typeof onFinish === 'function' ? onFinish(values) : true;
        if (ret instanceof Promise) {
          try {
            ctx?.setLoading(true);
            ret = await ret;
          } catch (err) {
            console.error(err); // eslint-disable-line
            ret = false;
          } finally {
            ctx?.setLoading(false);
          }
        }
        // 只要onFinish不返回false 就触发自带的下一步和提交
        if (ret !== false) {
          ctx?.onFormFinish(name, values);
          if (ctx.total - 1 === step) {
            // 最后一步触发提交
            ctx.submit();
            return;
          }
          ctx.next();
        }
      }}
      {...restProps}
    />
  );
}

export default StepForm;
