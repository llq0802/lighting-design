/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemoizedFn } from 'ahooks';
import type { StepProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import { useContext, useEffect, useRef } from 'react';
import type { BaseFormProps } from '../../../base/BaseForm';
import BaseForm from '../../../base/BaseForm';
import StepsFormContext from './StepsFormContext';
import type { LStepsFormSubmitterProps } from './StepsSubmitter';

export interface LStepFormProps<Values = any>
  extends Omit<
      BaseFormProps<Values>,
      'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'
    >,
    Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  /** antd Steps 组件的items属性*/
  stepItemProps?: StepProps;
  /** 上一步下一步提交按钮的配置 优先级比StepsForm的submitter高*/
  submitter?: Omit<LStepsFormSubmitterProps, 'total' | 'current' | 'form'> | false;
  /** 当前步骤 内部使用*/
  readonly stepNum?: number;
}
const prefixCls = 'lightd-form-step';

function StepForm<Values = any>({
  title,
  subTitle,
  icon,
  description,
  stepItemProps,
  submitter,

  stepNum,

  name,
  className,
  onFinish,
  form: outForm,
  ...restProps
}: LStepFormProps<Values>) {
  const ctx = useContext(StepsFormContext);
  const [form] = Form.useForm();
  const _lformRef = useRef<Record<string, any>>({});

  useEffect(() => {
    // 存储每个表单实例
    ctx.formInstanceListRef.current[stepNum as number] = outForm || form;
    // 解决在modal 可能未加载时拿不到 form
    setTimeout(() => {
      // 存储每个表单的初始值
      ctx.formInitialValues.current[stepNum as number] = _lformRef.current;
      ctx?.forgetUpdate();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinsh = useMemoizedFn(async (values) => {
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
      ctx?.onFormFinish(name as string, values);
      if (ctx.total - 1 === stepNum) {
        // 最后一步触发提交
        ctx.submit();
        return;
      }
      // 表单验证通过到下一步
      ctx.next();
    }
  });

  return (
    <BaseForm
      _lformRef={_lformRef}
      name={name}
      className={classnames(prefixCls, className)}
      form={outForm || form}
      onFinish={handleFinsh}
      {...restProps}
    />
  );
}

export default StepForm;
