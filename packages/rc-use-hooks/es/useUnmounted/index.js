import { useEffect } from 'react';
import useLatest from '../useLatest';
/**
 * 组件卸载时触发
 * @param fn
 */

export default function (fn) {
  var fnRef = useLatest(fn);
  useEffect(function () {
    return function () {
      fnRef === null || fnRef === void 0 ? void 0 : fnRef();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
