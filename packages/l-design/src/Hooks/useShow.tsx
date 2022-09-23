import _cloneDeep from 'lodash/cloneDeep';
import type { RefObject } from 'react';
import { useImperativeHandle, useRef } from 'react';

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
export default function useShow(
  funcRef: ShowInstanceRef,
  options: OptionsType<Record<string, any>>,
) {
  const ref = useRef({});
  const callBackRef = useRef();
  const onShow = options.onShow,
    onHide = options.onHide,
    onFormart = options.onFormart;

  const onCallback = function onCallback(e) {
    callBackRef.current = e;
  };

  useImperativeHandle(funcRef, function () {
    return {
      show: function show(record) {
        ref.current = _cloneDeep(record); // 深拷贝，避免值被修改，造成异常
        onShow?.(ref.current);
      },
      hide: function hide(data) {
        onHide?.(data);
      },
      getData: function () {
        // 传给父组件的数据
        return callBackRef.current;
      },
    };
  });

  return {
    record: onFormart ? onFormart(ref.current) : ref.current,
    onCallback: onCallback,
  };
}
