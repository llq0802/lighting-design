import _cloneDeep from 'lodash/cloneDeep';
import type { RefObject} from 'react';
import { useCallback } from 'react';
import { useImperativeHandle, useRef } from 'react';

export declare type ShowInstance<T = any> = {
  onShow: (record: T) => void;
  onHide: (data?: any) => void;
  getChildData: () => any;
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
 * 父调用子组件方法，并传值更新状态
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */

export default function useShow(
  funcRef: ShowInstanceRef,
  options: OptionsType<Record<string, any>>,
) {
  const ref = useRef({});
  const childrenDataRef = useRef<null | any>(null);
  const onShow = options.onShow,
    onFormart = options.onFormart,
    onHide = options.onHide;

  const onCallback = useCallback(
     <T = any>(data: T) =>{
      childrenDataRef.current = data;
    },[]
  )

  useImperativeHandle(funcRef, function () {
    return {
      onShow: function show(record) {
        ref.current = _cloneDeep(record);
        onShow(ref.current);
      },
      onHide: function hide(data) {
        if (onHide) onHide(data);
      },
      getChildData: function getData() {
        // 传给父组件的数据
        return childrenDataRef.current;
      },
    };
  });

  return {
    parentData: onFormart ? onFormart(ref.current) : ref.current,
    setParentData:onCallback,
  };
}
