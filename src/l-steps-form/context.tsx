import { createContext, useContext } from 'react';

export type StepsContextType = {} & Record<string, any>;

const StepsContext = createContext<StepsContextType>({} as StepsContextType);

const StepsProviderContext = ({ children, value }: { children: React.ReactNode; value: StepsContextType }) => {
  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>;
};

export default StepsProviderContext;

export const useStepsContext = () => {
  const ctx = useContext(StepsContext);
  return ctx;
};
