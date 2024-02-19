import { useMount, useRafState, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { FormInstance } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { useState } from 'react';

/**
 * 设置与监听loading
 * @param {boolean} outLoading 初始值 loading
 * @return
 */
export const useLoading = (
  outLoading: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [loading, setLoading] = useRafState(() => outLoading);
  useUpdateLayoutEffect(() => setLoading(outLoading), [outLoading]);
  return [loading, setLoading];
};

/**
 * 获取 LForm 的初始值并通过 isReady 重新设置初始值
 */
export const useLFormInitialValues = ({
  form,
  isReady,
  isAntdReset,
  initialValues = {},
}: {
  isReady: boolean;
  isAntdReset: boolean;
  initialValues?: Store;
  form: FormInstance;
}) => {
  const [innerInitVal, setInnerInitVal] = useState(() => initialValues);
  useUpdateEffect(() => {
    // 准备完成后，重新设置表单的初始值
    if (isReady) {
      if (isAntdReset) {
        // formRef.current?.resetFields?.(); // 会重置整个 Field，
        // 因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。
        form?.resetFields?.();
      } else {
        const newInitVal = { ...form?.getFieldsValue(), ...initialValues };
        setInnerInitVal(newInitVal);
        form?.setFieldsValue(newInitVal);
      }
    }
  }, [isReady, JSON.stringify(initialValues)]);
  useMount(() => {
    if (isAntdReset) return;
    setInnerInitVal({ ...form?.getFieldsValue(), ...initialValues });
  });
  return innerInitVal;
};
