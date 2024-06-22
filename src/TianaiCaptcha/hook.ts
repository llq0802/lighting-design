import { useLatest, useRafState, useRequest } from 'ahooks';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import { useEffect, useLayoutEffect, useRef } from 'react';

export function useSliderVerify(
  el: (() => HTMLElement) | React.RefObject<HTMLElement>,
  { initX = 0, maxMoveX = 400, onMouseUp, onMouseDown, onMouseMove }: any = {},
) {
  const [dx, setDx] = useRafState(initX);
  const [moveing, setMoveing] = useRafState(false);
  const dxRef = useLatest(dx);
  const moveingRef = useLatest(moveing);
  const initXRef = useRef(initX);

  const resetX = () => {
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

  return { moveX: dx, resetX, moveing };
}

export function useGetImgUrl(url: string) {
  // http://169.254.4.160:8800/shiyi/gen/
  const getImgUrl = () => fetch(url).then((r) => r.json());

  const { data, ...rest } = useRequest(getImgUrl, {
    manual: true,
  });
  return {
    ...rest,
    data: {
      id: data?.id || '',
      ...(data?.captcha || {}),
    },
  };
}
export function useCheckCaptcha(url: string, opt?: Options<any, any>) {
  const check = (body) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(body),
    }).then((r) => r.json());

  const ret = useRequest(check, {
    ...opt,
    manual: true,
  });
  return ret;
}

const initParams = {
  id: '',
  ict: {
    bgImageWidth: 308,
    bgImageHeight: 180,
    sliderImageWidth: 55,
    sliderImageHeight: 180,
    startSlidingTime: new Date(),
    endSlidingTime: new Date(),
    trackList: [] as {
      type: string;
      t: number;
      y: number;
      x: number;
    }[],
  },
};
export function useCheckParams() {
  const paramsRef = useRef(initParams);
  const startTimeRef = useRef(Date.now());

  const resetParams = () => {
    paramsRef.current.id = '';
    paramsRef.current.ict.trackList.length = 0;
  };

  return {
    params: paramsRef.current,
    startTime: startTimeRef.current,
    resetParams,
  };
}
export const getRandomNumber = (min: number = -10, max: number = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
