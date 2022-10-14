import type { RefObject } from 'react';
export declare type ShowInstance<T = any> = {
    show: (record: T) => void;
    hide: (data?: any) => void;
    getData: () => any;
};
export declare type ShowInstanceRef<T = any> = RefObject<ShowInstance<T>>;
export declare type OptionsType<T> = {
    /** show触发事件 */
    onShow: (record: T) => void;
    /** 格式化record */
    onFormart?: (record: T) => T;
    /** hide触发事件 */
    onHide?: (data?: any) => void;
};
/**
 * 父调用子组件方法，并传值
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
export default function useShow(funcRef: ShowInstanceRef, options: OptionsType<Record<string, any>>): {
    record: Record<string, any>;
    onCallback: (e: any) => void;
};
