import { useLatest, useRafState } from 'ahooks';
import { useLayoutEffect, useRef } from 'react';

export function useMove(
  el: (() => HTMLElement) | React.RefObject<HTMLElement>,
  { initMoveX = 0, maxMoveX = 400, onMouseUp, onMouseDown, onMouseMove }: any = {},
) {
  const [moveX, setMoveX] = useRafState(initMoveX);
  const [moveing, setMoveing] = useRafState(false);
  const moveXRef = useLatest(moveX);
  const moveingRef = useLatest(moveing);
  const initMoveXRef = useRef(initMoveX);

  const reset = () => {
    initMoveXRef.current = initMoveX;
    setMoveX(initMoveX);
  };

  useLayoutEffect(() => {
    const dom = typeof el === 'function' ? el() : (el.current as HTMLElement);
    if (!dom) return;

    dom.style.touchAction = 'none';
    dom.style.userSelect = 'none';
    dom.style.cursor = 'move';
    // 初始化位置
    dom.style.transform = `translate3d(${initMoveX}px, 0, 0)`;
    dom.style.transition = 'transform 0.3s';

    let handlePointerMove: ((ev: PointerEvent) => void) | null = null;
    let handlePointerUp: ((ev: PointerEvent) => void) | null = null;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      dom.setPointerCapture(e.pointerId);
      const startX = e.pageX - initMoveXRef.current;
      onMouseDown?.(startX);
      setMoveing(true);
      // 开始拖动时取消过渡效果
      dom.style.transition = 'none';

      handlePointerMove = (ev: PointerEvent) => {
        ev.preventDefault();
        if (!moveingRef.current) return;
        let newmoveX = ev.pageX - startX;
        if (newmoveX < 0) newmoveX = 0;
        if (newmoveX > maxMoveX) newmoveX = maxMoveX;
        onMouseMove?.(newmoveX);
        setMoveX(newmoveX);
        dom.style.transform = `translate3d(${newmoveX}px, 0, 0)`;
      };

      handlePointerUp = (ev: PointerEvent) => {
        ev.preventDefault();
        initMoveXRef.current = moveXRef.current;
        setMoveing(false);
        onMouseUp?.(moveXRef.current);
        // 停止拖动时恢复过渡效果
        dom.style.transition = 'transform 0.3s';

        if (handlePointerMove) {
          dom.removeEventListener('pointermove', handlePointerMove);
          handlePointerMove = null;
        }
        if (handlePointerUp) {
          dom.removeEventListener('pointerup', handlePointerUp);
          handlePointerUp = null;
        }
      };

      dom.addEventListener('pointermove', handlePointerMove);
      dom.addEventListener('pointerup', handlePointerUp);
    };

    dom.addEventListener('pointerdown', handlePointerDown);

    return () => {
      dom.removeEventListener('pointerdown', handlePointerDown);
      // 清理可能残留的事件监听器
      if (handlePointerMove) {
        dom.removeEventListener('pointermove', handlePointerMove);
      }
      if (handlePointerUp) {
        dom.removeEventListener('pointerup', handlePointerUp);
      }
    };
  }, [maxMoveX, initMoveX]);

  return { moveX, reset, moveing };
}
