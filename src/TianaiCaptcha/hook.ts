import { useLatest, useRafState, useRequest } from 'ahooks';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import { useEffect, useLayoutEffect, useRef } from 'react';
export function useSliderVerify(
  el: (() => HTMLElement) | React.RefObject<HTMLElement>,
  { initX = 0, maxMoveX = 400, loading, onMouseUp, onMouseDown, onMouseMove }: any = {},
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
    if (!dom) return;
    dom.style.transform = `translate3d(${dx}px, 0, 0)`;
    dom.style.transition = moveing ? 'none' : 'transform 0.3s';
  }, [dx, moveing, loading]);

  useEffect(() => {
    const dom = typeof el === 'function' ? el() : (el.current as HTMLElement);
    if (!dom) return;
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
  }, [loading]);

  return { moveX: dx, resetX, moveing };
}

export function useGetImgUrl(baseUrl: string, fn: (() => Promise<Record<string, any>>) | string) {
  const getImgUrl = async () => {
    if (typeof fn === 'function') {
      return fn();
    }
    const ret = await fetch(baseUrl + fn).then((r) => r.json());
    return ret;
  };
  const { data, ...rest } = useRequest(getImgUrl);
  return {
    ...rest,
    data: {
      id: data?.data?.id || '',
      ...(data?.data?.captcha || {}),
    },
  };
}
export function useCheckCaptcha(
  baseUrl: string,
  fn: (() => Promise<Record<string, any>>) | string,
  opt?: Options<any, any>,
) {
  const check = async (body) => {
    if (typeof fn === 'function') {
      return fn();
    }
    const ret = await fetch(baseUrl + fn, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(body),
    }).then((r) => r.json());

    return ret;
  };

  const ret = useRequest(check, {
    ...opt,
    manual: true,
  });
  return ret;
}

export function useCheckParams({
  backgroundImageWidth: bgImageWidth,
  backgroundImageHeight: bgImageHeight,
  sliderImageWidth: sliderImageWidth,
}) {
  const paramsRef = useRef({
    bgImageWidth,
    bgImageHeight,
    sliderImageWidth,
    sliderImageHeight: bgImageHeight,
    startSlidingTime: new Date(),
    endSlidingTime: new Date(),
    trackList: [] as {
      type: string;
      t: number;
      y: number;
      x: number;
    }[],
  });
  const startTimeRef = useRef(Date.now());
  const resetParams = () => {
    startTimeRef.current = Date.now();
    paramsRef.current = {
      bgImageWidth,
      bgImageHeight,
      sliderImageWidth,
      sliderImageHeight: bgImageHeight,
      startSlidingTime: new Date(),
      endSlidingTime: new Date(),
      trackList: [] as {
        type: string;
        t: number;
        y: number;
        x: number;
      }[],
    };
  };

  return {
    paramsRef,
    startTimeRef,
    resetParams,
  };
}
export const getRandomNumber = (min: number = -10, max: number = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export enum LTianaiCaptchaStatus {
  INVALID = 4000,
  FAIL = 4001,
  SUCCESS = 200,
}
export const LTianaiCaptchaText = {
  [LTianaiCaptchaStatus.INVALID]: '滑块已失效',
  [LTianaiCaptchaStatus.FAIL]: '验证失败，请重新尝试',
  [LTianaiCaptchaStatus.SUCCESS]: '验证成功',
};
