import { DoubleRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import LSkeleton from 'lighting-design/l-skeleton';
import React, { useImperativeHandle, useRef } from 'react';
import { useCheckParams } from './hooks/use-check-params';
import { useGetImg } from './hooks/use-get-img';
import { useGetParams } from './hooks/use-get-params';
import { useMove } from './hooks/use-move';
import type { LTianaiCaptchaProps } from './interface';
import { useStyles } from './styles';
import { LTianaiCaptchaStatus, LTianaiCaptchaText, getRandomNumber } from './utils';

const TiannaiCaptcha: React.FC<LTianaiCaptchaProps> = (props) => {
  const {
    actionRef,
    className,
    style,
    requestImg,
    requestCheck,
    requestCheckBefore,
    backgroundImageWidth = 310,
    backgroundImageHeight = 180,
    sliderImageWidth = 56,
    styleContent,
    styleContentTips,
    styleTrack,
    styleTrackShadow,
    styleTrackMark,
    styleTrackMove,
    moveIcon = <DoubleRightOutlined />,
    loadingIcon = <LoadingOutlined />,
    onFail,
    onSuccess,
    onFinally,
    render,
  } = props;
  const { data: imgData, loading: imgLoading, refreshAsync: refreshImg } = useGetImg(requestImg);

  const { cx, styles } = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [states, setStates] = useSetState({ time: 0, showTips: false });
  const { paramsRef, startTimeRef, resetParams } = useGetParams({
    backgroundImageWidth,
    backgroundImageHeight,
    sliderImageWidth,
  });

  const {
    run: runCheck,
    loading: checkLoading,
    data: checkData,
  } = useCheckParams(requestCheck, {
    onSuccess(data: any) {
      if (!data?.code) {
        onFail?.();
        return;
      }
      const isSuccess = +data?.code === LTianaiCaptchaStatus.SUCCESS;
      const trackList = paramsRef.current?.trackList;
      const firstT = trackList.at(0)?.t! ?? 0;
      const lastT = trackList.at(-1)?.t! ?? 0;
      const time = isSuccess ? (lastT - firstT) / 1000 : 0;
      setStates({ time: +time?.toFixed(2) || 0, showTips: true });
      if (isSuccess) {
        onSuccess?.(data);
        return;
      }

      if (onFail) {
        onFail?.();
        return;
      }

      setTimeout(() => {
        refreshImg?.();
        resetMove();
        resetParams();
        setStates({ time: 0, showTips: false });
      }, 1000);
    },
    onError() {
      onFail?.();
    },
    onFinally,
  });
  const isSuccess = !!checkData && +checkData?.code === LTianaiCaptchaStatus.SUCCESS;

  const {
    moveX,
    moveing,
    reset: resetMove,
  } = useMove(ref, {
    loading: imgLoading,
    maxMoveX: backgroundImageWidth - sliderImageWidth + 2 || 240,
    onMouseDown() {
      paramsRef.current.startSlidingTime = Date.now();
      paramsRef.current.trackList.push({ type: 'down', t: Date.now() - startTimeRef.current, y: 0, x: 0 });
    },
    onMouseMove(moveX: number) {
      const y = getRandomNumber();
      paramsRef.current.trackList.push({
        type: 'move',
        t: Date.now() - startTimeRef.current,
        y,
        x: Math.round(moveX),
      });
    },
    onMouseUp(moveX: number) {
      const y = getRandomNumber();
      paramsRef.current.endSlidingTime = Date.now();
      paramsRef.current.trackList.push({
        type: 'up',
        t: Date.now() - startTimeRef.current + 50,
        y,
        x: Math.round(moveX),
      });
      const p1 = { id: imgData?.id, ...paramsRef.current };
      const p2 = requestCheckBefore ? requestCheckBefore(p1) : p1;
      runCheck(p2);
    },
  });

  const transition = moveing ? 'none' : 'all 0.3s';
  const refresh = async () => {
    resetMove();
    resetParams();
    setStates({ time: 0, showTips: false });
    await refreshImg?.();
  };

  const reset = () => {
    resetMove();
    resetParams();
    setStates({ time: 0, showTips: false });
  };

  useImperativeHandle(actionRef, () => ({
    refresh,
    reset,
  }));

  const innerDom = (
    <div className={cx(styles.container, className)} style={style}>
      <div
        className={styles.content}
        style={{
          width: backgroundImageWidth,
          height: backgroundImageHeight,
          ...styleContent,
        }}
      >
        <img
          className={styles.big_img}
          style={{
            width: backgroundImageWidth,
            height: backgroundImageHeight,
          }}
          alt="big-bg"
          draggable={false}
          src={imgData?.backgroundImage}
        />
        <img
          className={styles.small_img}
          alt="small-bg"
          style={{
            width: sliderImageWidth,
            height: backgroundImageHeight,
            transition,
            transform: `translateX(${moveX}px)`,
          }}
          draggable={false}
          src={imgData?.templateImage}
        />
        <div
          className={cx(styles.content_tips, {
            [styles.success_content_tips]: isSuccess,
            [styles.fail_content_tips]: !isSuccess,
          })}
          style={{ transform: `translateY(${states?.showTips ? 0 : 101}%)`, ...styleContentTips }}
        >
          {checkData?.msg || LTianaiCaptchaText[checkData?.code as keyof typeof LTianaiCaptchaText]}
          {states?.time ? `，耗时 ${states.time}s` : null}
        </div>
      </div>

      <div className={styles.track} style={styleTrack}>
        <div className={styles.mark} style={{ transition, ...styleTrackMark, width: moveX }} />
        <div className={styles.shadow} style={styleTrackShadow} />
        <div
          ref={ref}
          className={styles.move}
          style={{
            width: sliderImageWidth,
            ...styleTrackMove,
            pointerEvents: checkLoading ? 'none' : 'auto',
          }}
        >
          {checkLoading ? loadingIcon : moveIcon}
        </div>
      </div>
    </div>
  );

  const dom = imgLoading ? (
    <LSkeleton count={1} itemHeight={backgroundImageHeight} style={{ width: backgroundImageWidth, margin: '0 auto' }} />
  ) : (
    innerDom
  );

  if (render) {
    return render(innerDom, { imgLoading, imgData, checkLoading, checkData, isSuccess }, props);
  }

  return dom;
};

export default TiannaiCaptcha;
