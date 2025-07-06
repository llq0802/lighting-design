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

  const handleFinsh = async (values) => {
    console.log('===values==>', values);
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

    if (submitStepNum === stepNumRef.current) {
      // 最后一步触发提交
      submit();
      return;
    }
    // 表单验证通过到下一步
    next();
  };

  return (
    <LForm form={formRef.current} {...props} submitter={false} clearOnDestroy>
      {props.children?.map?.((itemDom, i) => {
        const rowKey = itemDom?.key || itemDom?.props?.name + `${i}`;
        return <React.Fragment key={rowKey}>{itemDom}</React.Fragment>;
      })}
    </LForm>
  );
};

export default StepsItem;
