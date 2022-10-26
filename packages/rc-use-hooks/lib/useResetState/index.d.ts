import type { Dispatch, SetStateAction } from 'react';
declare type ResetState = () => void;
declare const useResetState: <S>(initialState: S | (() => S)) => [S, Dispatch<SetStateAction<S>>, ResetState];
export default useResetState;
