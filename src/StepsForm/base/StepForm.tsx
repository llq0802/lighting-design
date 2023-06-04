/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemoizedFn } from 'ahooks';
import type { StepProps } from 'antd';
import { Form } from 'antd';
import classnames from 'classnames';
import type { BaseFormProps } from 'lighting-design/Form/base/BaseForm';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import { useContext, useEffect, useRef } from 'react';
import StepsFormContext from './StepsFormContext';
import type { LStepsFormSubmitterProps } from './StepsSubmitter';

export interface LStepFormProps
  extends Omit<
      BaseFormProps,
      'title' | 'onReset' | 'contentRender' | 'submitter' | 'isReady'
    >,
    Pick<StepProps, 'title' | 'icon' | 'subTitle' | 'description'> {
  /** antd Steps 组件的items属性*/
  stepItemProps?: StepProps;
  /** 上一步下一步提交按钮的配置 优先级比StepsForm的submitter高*/
  submitter?:
    | Omit<LStepsFormSubmitterProps, 'total' | 'current' | 'form'>
    | false;
  /** 当前步骤(索引) 内部使用*/
  readonly _stepNum?: number;
}
const prefixCls = 'lightd-form-step';

function StepForm({
  title,
  subTitle,
  icon,
  description,
  stepItemProps,
  submitter,

  _stepNum,

  name,
  className,
  onFinish,
  form: outForm,
  ...restProps
}: LStepFormProps) {
  const ctx = useContext(StepsFormContext);
  const [form] = Form.useForm();
  const _lformRef = useRef<Record<string, any>>({});

  useEffect(() => {
    // 解决在modal 可能未加载时拿不到 form
    setTimeout(() => {
      // 存储每个表单实例
      ctx.formInstanceListRef.current[_stepNum as number] = outForm || form;
      ctx?.forgetUpdate();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 存储每个表单的初始值 (保证获取到初始值， 因为_lformRef.current是上一次的初始值，在BaseForm的父组件中需要手动更新一次组件才能获取到)
  ctx.formInitialValues.current[_stepNum as number] = _lformRef.current;

  // 当前表单的提交
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
      if (ctx.total - 1 === _stepNum) {
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
