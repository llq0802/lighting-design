import LForm from 'lighting-design/l-form';
import { useLFormInstance } from 'lighting-design/l-form/hooks';
import React, { useLayoutEffect } from 'react';

type PropsType = any;

const StepsItem: React.FC<PropsType> = ({ stepNum, initialItems, setInitialItems, ...props }) => {
  const formRef = useLFormInstance(props.form);

  // 收集form实例
  useLayoutEffect(() => {
    setInitialItems((p) => {
      return p.map((v) => {
        return {
          form: formRef.current,
          ...v,
        };
      });
    });
  }, []);

  return (
    <LForm form={formRef.current} {...props} submitter={false}>
      {props.children}
    </LForm>
  );
};

export default StepsItem;
