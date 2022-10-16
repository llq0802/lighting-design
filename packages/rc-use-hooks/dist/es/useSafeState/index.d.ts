import * as React from 'react';
/**
 * 安全更新状态 防止组件卸载时执行setState
 * @param initialState
 */
declare function useSafeState<S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];
declare function useSafeState<S = undefined>(): [
    S | undefined,
    React.Dispatch<React.SetStateAction<S | undefined>>
];
export default useSafeState;
