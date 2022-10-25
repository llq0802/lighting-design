import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import usePersistFn from '../usePersistFn';

type ResetState = () => void;

const useResetState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, ResetState] => {
  const [state, setState] = useState(initialState);

  const resetState = usePersistFn(() => {
    setState(initialState);
  });

  return [state, setState, resetState];
};

export default useResetState;
