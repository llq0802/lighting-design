import _cloneDeep from 'lodash/cloneDeep';
import { useCallback, useImperativeHandle, useRef } from 'react';

/**
 * 父调用子组件方法，并传值更新状态
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
export default function useShow(funcRef, options) {
  var ref = useRef({});
  var childrenDataRef = useRef(null);
  var onShow = options.onShow,
    onFormart = options.onFormart,
    onHide = options.onHide;
  var onCallback = useCallback(function (data) {
    childrenDataRef.current = data;
  }, []);
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
    setParentData: onCallback,
  };
}
