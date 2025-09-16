import { DoubleRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import React, { useImperativeHandle, useRef } from 'react';
import { LTianaiCaptchaStatus, LTianaiCaptchaText, getRandomNumber } from './hook';
import { useCheckParams } from './hooks/use-check-params';
import { useGetImg } from './hooks/use-get-img';
import { useGetParams } from './hooks/use-get-params';
import { useMove } from './hooks/use-move';
import { useStyles } from './styles';

type PropsType = {
  className?: string;
  style?: React.CSSProperties;
  requestImg: Parameters<typeof useGetImg>[0];
  requestCheck: Parameters<typeof useCheckParams>[0];
  backgroundImageWidth?: number;
  backgroundImageHeight?: number;
  sliderImageWidth?: number;
};

const TiannaiCaptcha: React.FC<PropsType> = ({
  actionRef,
  className,
  style,
  requestImg,
  requestCheck,
  backgroundImageWidth = 309,
  backgroundImageHeight = 180,
  sliderImageWidth = 56,
  failRefreshTime = 1000,
  onFail,
  onSuccess,
}) => {
  const { data: imgData, loading: imgLoading, refresh: refreshImg } = useGetImg(requestImg);

  const { cx, styles } = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [states, setStates] = useSetState({ time: 0, showTips: false });
  const { paramsRef, startTimeRef, resetParams } = useGetParams({
    backgroundImageWidth,
    backgroundImageHeight,
    sliderImageWidth,
  });

  const refresh = () => {
    refreshImg?.();
    reset();
    setStates({ time: 0, showTips: false });
  };

  const {
    run: runCheck,
    loading: checkLoading,
    data: checkData,
  } = useCheckParams(requestCheck, {
    onSuccess(data) {
      const isSuccess = +data?.code === LTianaiCaptchaStatus.SUCCESS;
      const trackList = paramsRef.current?.trackList;
      const firstT = trackList.at(0)?.t! ?? 0;
      const lastT = trackList.at(-1)?.t! ?? 0;
      const time = isSuccess ? (lastT - firstT) / 1000 : 0;

      setStates({ time: +time?.toFixed(2) || 0, showTips: true });

      if (!isSuccess) {
        onFail?.();
        setTimeout(() => refresh?.(), failRefreshTime);
      } else {
        resetParams();
        onSuccess?.();
      }
    },
    onError() {
      onFail?.();
    },
  });
  const isSuccess = checkData && +checkData?.code === LTianaiCaptchaStatus.SUCCESS;

  const { moveX, moveing, reset } = useMove(ref, {
    maxMoveX: backgroundImageWidth - sliderImageWidth + 2,
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
      runCheck({
        id: imgData?.id,
        ...paramsRef.current,
      });
    },
  });

  const transition = moveing ? 'none' : 'all 0.3s';

  useImperativeHandle(actionRef, () => ({
    refresh,
  }));

  return (
    <div className={cx(styles.container, className)} style={style}>
      <div className={cx(styles.content)}>
        <img className={styles.big_img} alt="big-bg" draggable={false} src={imgData?.backgroundImage} />
        <img
          className={styles.small_img}
          alt="small-bg"
          style={{ transition, transform: `translateX(${moveX}px)` }}
          draggable={false}
          src={imgData?.templateImage}
        />
        <div
          className={cx(styles.content_tips, {
            [styles.success_content_tips]: isSuccess,
            [styles.fail_content_tips]: !isSuccess,
          })}
          style={{ transform: `translateY(${states?.showTips ? 0 : 101}%)` }}
        >
          {LTianaiCaptchaText[checkData?.code as keyof typeof LTianaiCaptchaText]}
          {states?.time ? `，耗时 ${states.time}s` : null}
        </div>
      </div>

      <div className={styles.track}>
        <div className={styles.mark} style={{ width: moveX, transition }} />
        <div className={styles.shadow} />
        <div
          ref={ref}
          className={styles.move}
          style={{
            width: sliderImageWidth,
            pointerEvents: checkLoading ? 'none' : 'auto',
          }}
        >
          {checkLoading ? <LoadingOutlined /> : <DoubleRightOutlined />}
        </div>
      </div>
    </div>
  );
};

export default TiannaiCaptcha;
