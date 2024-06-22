import { useLatest, useRafState } from 'ahooks';
import { useEffect, useLayoutEffect, useRef } from 'react';

export default function useSlideVerify(
  el: (() => HTMLElement) | React.RefObject<HTMLElement>,
  { initX = 0, maxMoveX = 400, onMouseUp, onMouseDown, onMouseMove }: any = {},
) {
  const [dx, setDx] = useRafState(initX);
  const [moveing, setMoveing] = useRafState(false);
  const dxRef = useLatest(dx);
  const moveingRef = useLatest(moveing);
  const initXRef = useRef(initX);
  const reset = () => {
    setDx(initX);
    initXRef.current = initX;
  };

  useLayoutEffect(() => {
    const dom = typeof el === 'function' ? el() : (el.current as HTMLElement);
    dom.style.transform = `translate3d(${dx}px, 0, 0)`;
    dom.style.transition = moveing ? 'none' : 'transform 0.3s';
  }, [dx, moveing]);

  useEffect(() => {
    const dom = typeof el === 'function' ? el() : (el.current as HTMLElement);
    dom.style.touchAction = 'none';
    dom.style.userSelect = 'none';
    dom.style.cursor = 'move';

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      dom.setPointerCapture(e.pointerId);
      const startX = e.pageX - initXRef.current;
      onMouseDown?.(startX);
      setMoveing(true);

      const handlePointerMove = (ev: PointerEvent) => {
        ev.preventDefault();
        if (!moveingRef.current) return;
        let newDx = ev.pageX - startX;
        if (newDx < 0) {
          newDx = 0;
        }
        if (newDx > maxMoveX) {
          newDx = maxMoveX;
        }
        onMouseMove?.(newDx);
        setDx(newDx);
      };

      const handlePointerUp = (evo: PointerEvent) => {
        evo.preventDefault();
        initXRef.current = dxRef.current;
        setMoveing(false);
        onMouseUp?.(dxRef.current);
        dom.removeEventListener('pointermove', handlePointerMove);
        dom.removeEventListener('pointerup', handlePointerUp);
      };

      dom.addEventListener('pointermove', handlePointerMove);
      dom.addEventListener('pointerup', handlePointerUp, { once: true });
    };

    dom.addEventListener('pointerdown', handlePointerDown);
    return () => {
      dom.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return { moveX: dx, reset, moveing };
}
