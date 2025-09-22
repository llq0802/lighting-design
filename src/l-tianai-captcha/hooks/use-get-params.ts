import { useRef } from 'react';

type Parmas = {
  bgImageWidth: number;
  bgImageHeight: number;
  sliderImageWidth: number;
  sliderImageHeight: number;
  startSlidingTime: number;
  endSlidingTime: number;
  trackList: { type: string; t: number; y: number; x: number }[];
};

export function useGetParams({
  backgroundImageWidth: bgImageWidth,
  backgroundImageHeight: bgImageHeight,
  sliderImageWidth: sliderImageWidth,
}: {
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  sliderImageWidth: number;
}) {
  const paramsRef = useRef<Parmas>({
    bgImageWidth,
    bgImageHeight,
    sliderImageWidth,
    sliderImageHeight: bgImageHeight,
    startSlidingTime: Date.now(),
    endSlidingTime: Date.now(),
    trackList: [],
  });

  const startTimeRef = useRef(Date.now());
  const resetParams = () => {
    startTimeRef.current = Date.now();
    paramsRef.current = {
      bgImageWidth,
      bgImageHeight,
      sliderImageWidth,
      sliderImageHeight: bgImageHeight,
      startSlidingTime: Date.now(),
      endSlidingTime: Date.now(),
      trackList: [],
    };
  };

  return {
    paramsRef,
    startTimeRef,
    resetParams,
  };
}
