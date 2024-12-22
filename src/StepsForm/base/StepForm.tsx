/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import BaseForm from 'lighting-design/Form/base/BaseForm';
import { useLFormInstance } from 'lighting-design/Form/base/hooks';
import { isFunction } from 'lighting-design/_utils';
import { useContext, useEffect } from 'react';
import type { LStepFormProps } from '../interface';
import StepsFormContext from './StepsFormContext';

const prefixCls = 'lightd-form-step';

function StepForm({
  title,
  subTitle,
  icon,
  description,
  stepItemProps,

  submitter, // 不传入 到基础的 BaseForm

  _stepNum,
  name,
  className,
  onFinish,
  form: outForm,
  ...restProps
}: LStepFormProps) {
  const ctx = useContext(StepsFormContext);
  const formRef = useLFormInstance(outForm);

  useEffect(() => {
    // 存储每个表单实例
    ctx.formInstanceListRef.current[_stepNum as number] = formRef.current;
    if (!ctx?.isAntdReset && ctx.isReady) {
      // 存储每个表单的初始值 (保证获取到初始值)
      const newInitialValues = formRef.current.getFieldsValue();
      ctx.formInitialValues.current[_stepNum as number] = newInitialValues;
    }
  }, [ctx.isReady, JSON.stringify(restProps?.initialValues)]);

  // 当前表单的提交
  const handleFinsh = useMemoizedFn(async (values) => {
    let ret: unknown = isFunction(onFinish) ? onFinish?.(values) : true;
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
      if (ctx.submitStepNum === _stepNum) {
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
      name={name}
      className={classnames(prefixCls, className)}
      form={formRef.current}
      onFinish={handleFinsh}
      {...restProps}
      isAntdReset
      submitter={false}
      isEnterSubmit={false}
    />
  );
}

export default StepForm;
