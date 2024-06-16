import { fastDeepClone } from 'lighting-design/_utils';
import { useCallback, useImperativeHandle, useRef } from 'react';

export declare type UseShowInstance<T extends Record<string, any> = Record<string, any>> = {
  /** 触发子组件的onShow方法并传值 */
  onShow: (record: T) => void;
  /** 触发子组件的onHide方法并传值 */
  onHide: (data?: T) => void;
  /** 获取子组件的数据 */
  getChildData: () => any;
};

export declare type UseShowOptions<T extends Record<string, any>> = {
  /** show触发事件 */
  onShow?(data: T): void;
  /** hide触发事件 */
  onHide?: (data?: T) => void;
  /** 格式化data */
  onFormart?: (data: T) => any;
};

export declare type UseShowInstanceRef = React.MutableRefObject<UseShowInstance | undefined>;

export declare type UseShowResult = {
  /** 父组件调用onShow传的参数值 */
  parentData: Record<string, any> | undefined;
  /** 向父组件传数据 （父组件调用 getChildData() ） */
  setParentData: <T>(data: T) => void;
};

/**
 * 父调用子组件方法，并传值更新状态
 * @deprecated 即将废弃，请使用 rc-use-hookss/useShow
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
export default function useShow(
  funcRef: UseShowInstanceRef,
  options: UseShowOptions<Record<string, any>>,
): UseShowResult {
  const ref = useRef<any>();
  const childrenDataRef = useRef<any>();
  const opsOnShow = options.onShow,
    opsOnFormart = options.onFormart,
    opsOnHide = options.onHide;

  const onCallback = useCallback(<T = any>(data: T) => {
    childrenDataRef.current = data;
  }, []);

  useImperativeHandle(funcRef, () => {
    return {
      onShow(data) {
        ref.current = fastDeepClone(data);
        if (opsOnShow) opsOnShow(ref.current);
      },

      onHide(data) {
        if (opsOnHide) opsOnHide(fastDeepClone(data));
      },

      getChildData() {
        return childrenDataRef.current;
      },
    };
  });

  return {
    parentData: opsOnFormart ? opsOnFormart(ref.current) : ref.current,
    setParentData: onCallback,
  };
}
