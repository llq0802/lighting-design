import { createContext, useContext } from 'react';

export type LFormContextType = {};

export const LFormContext = createContext<LFormContextType>({});

export const LFormContextProvider = (props: { children: React.ReactNode }) => {
  const value = {};

  return <LFormContext.Provider value={value}>{props?.children}</LFormContext.Provider>;
};

export const useLFormContext = () => {
  return useContext(LFormContext);
};
