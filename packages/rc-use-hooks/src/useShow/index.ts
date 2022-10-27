import _cloneDeep from 'lodash/cloneDeep';
import type { RefObject } from 'react';
import { useCallback, useImperativeHandle, useRef } from 'react';

export declare type OnShowInstance<T = any> = {
  onShow: (record: T) => void;
  onHide: (data?: any) => void;
  getChildData: () => any;
};

export declare type ShowInstanceRef<T = any> = RefObject<OnShowInstance<T>>;

export declare type OnShowOptionsType<T> = {
  /** show触发事件 */
  onShow: (record: T) => void;
  /** 格式化record */
  onFormart?: (record: T) => T;
  /** hide触发事件 */
  onHide?: (data?: any) => void;
};

export declare type R = {
  parentData: Record<string, any>;
  setParentData: <T = any>(data: T) => void;
};

/**
 * 父调用子组件方法，并传值更新状态
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
export default function useShow(
  funcRef: ShowInstanceRef,
  options: OnShowOptionsType<Record<string, any>>,
): R {
  const ref = useRef({});
  const childrenDataRef = useRef<null | any>(null);
  const opsOnShow = options.onShow,
    opsOnFormart = options.onFormart,
    opsOnHide = options.onHide;

  const onCallback = useCallback(<T = any>(data: T) => {
    childrenDataRef.current = data;
  }, []);

  useImperativeHandle(funcRef, () => {
    return {
      onShow: function (record) {
        ref.current = _cloneDeep(record);
        if (opsOnShow) opsOnShow(ref.current);
      },

      onHide: function (data) {
        if (opsOnHide) opsOnHide(data);
      },

      getChildData: function () {
        // 传给父组件的数据
        return childrenDataRef.current;
      },
    };
  });

  return {
    parentData: opsOnFormart ? opsOnFormart(ref.current) : ref.current,
    setParentData: onCallback,
  };
}
