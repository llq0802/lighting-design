import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import React, { useEffect } from 'react';
import { useStepsContext } from '../context';

type PropsType = any;

const StepsItem: React.FC<PropsType> = ({ currentIndex, isSelected, name, onFinish, form, ...props }) => {
  const { setLoading, formDataRef, stepNum, submitStepNum, setInitialItems, submit, next } = useStepsContext();
  const formRef = useLFormInstance(form);

  // 收集form实例
  useEffect(() => {
    setInitialItems((p) => {
      p[currentIndex].form = formRef.current;
      return [...p];
    });
  }, []);

  const handleFinish = async (values) => {
    const res: unknown = typeof onFinish === 'function' ? onFinish?.(values) : true;
    if (res instanceof Promise) {
      try {
        setLoading(true);
        await res;
      } finally {
        setLoading(false);
      }
    }

    formDataRef.current[name] = values;

    if (submitStepNum === stepNum) {
      // 最后一步触发提交
      submit();
      return;
    }
    // 表单验证通过到下一步
    next();
  };

  return (
    <LForm
      name={name}
      form={formRef.current}
      onFinish={handleFinish}
      {...props}
      style={{
        display: isSelected ? 'block' : 'none',
        ...props.style,
      }}
      submitter={false}
    />
  );
};

export default StepsItem;
