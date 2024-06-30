import type { FormInstance } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { useLayoutEffect, useState } from 'react';

export const useModalFormInitialValues = ({
  open,
  initialValues = {},
  isAntdReset,
  form,
  isReady = true,
}: {
  isReady?: boolean;
  open: boolean;
  initialValues?: Store;
  isAntdReset: boolean;
  form: FormInstance;
}) => {
  const [initVal, setIninVal] = useState(() => initialValues);
  useLayoutEffect(() => {
    if (!isAntdReset && open && isReady) {
      const newInitialValues = { ...form.getFieldsValue(), ...initialValues };
      form?.setFieldsValue(newInitialValues);
      setIninVal(newInitialValues);
    }
  }, [open, isReady, JSON.stringify(initialValues)]);

  return initVal;
};
