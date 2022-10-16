export declare type SetState<S extends Record<string, any>> = <K extends keyof S>(state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)) => void;
/**
 * 管理 object 类型 state 的 Hooks，可合并更新。
 * @param initialState
 * @returns
 */
declare const useSetState: <S extends Record<string, any>>(initialState: S | (() => S)) => [S, SetState<S>];
export default useSetState;
