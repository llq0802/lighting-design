import type { FormProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item';
import { createContext, useContext } from 'react';

export type LFormContextType = Pick<LFormItemProps, 'labelWidth' | 'wrapperWidth' | 'formItemBottom' | 'alignItems'> & {
  disabled?: boolean;
  size?: FormProps['size'];
};

export const LFormContext = createContext<LFormContextType>({} as LFormContextType);

export const LFormContextProvider = (props: { children: React.ReactNode } & LFormContextType) => {
  const { children, ...rest } = props;
  return <LFormContext.Provider value={rest}>{props?.children}</LFormContext.Provider>;
};

export const useLFormContext = () => {
  return useContext(LFormContext);
};

export const useMergeFormProps = (formItemProps: LFormItemProps) => {
  const { labelWidth, wrapperWidth, formItemBottom, alignItems } = formItemProps;
  const res = useLFormContext() ?? {}; // 有可能不被包裹在LForm中
  return {
    labelWidth: labelWidth || res.labelWidth,
    wrapperWidth: wrapperWidth || res.wrapperWidth,
    formItemBottom: formItemBottom || res.formItemBottom,
    alignItems: alignItems || res.alignItems,
  };
};
