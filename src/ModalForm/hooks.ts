import type { FormInstance } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { useLayoutEffect, useState } from 'react';

export const useModalFormInitialValues = ({
  open,
  initialValues,
  isAntdReset,
  form,
}: {
  open: boolean;
  initialValues?: Store;
  isAntdReset: boolean;
  form: FormInstance;
}) => {
  const [initVal, setIninVal] = useState(() => initialValues || {});
  useLayoutEffect(() => {
    if (!isAntdReset && open) {
      const newInitialValues = { ...form.getFieldsValue(), ...initialValues };
      form?.setFieldsValue(newInitialValues);
      setIninVal(newInitialValues);
    }
  }, [open, JSON.stringify(initialValues)]);

  return initVal;
};
