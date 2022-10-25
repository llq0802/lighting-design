// ref:
//  https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
import { useEffect, useRef, useState } from 'react';

/**
 * 测量 DOM 节点 整个重新渲染期间始终存在
 */
function useClientRect() {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();
  useEffect(() => {
    if (ref.current) {
      setRect(ref.current?.getBoundingClientRect());
    }
  }, [ref]);

  return [rect, ref] as const;
}
//  官方案例 当且仅当组件挂载和卸载时
// function useClientRect() {
//   const [rect, setRect] = useState(null);
//   const ref = useCallback(node => {
//     if (node !== null) {
//       setRect(node.getBoundingClientRect());
//     }
//   }, []);
//   return [rect, ref];
// }

export default useClientRect;
