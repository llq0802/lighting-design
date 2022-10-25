/// <reference types="react" />
/**
 * 测量 DOM 节点 整个重新渲染期间始终存在
 */
declare function useClientRect(): readonly [DOMRect | undefined, import("react").RefObject<HTMLDivElement>];
export default useClientRect;
