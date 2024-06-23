import { DoubleRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
import classnames from 'classnames';
import { useImperativeHandle, useRef, useState } from 'react';
import {
  LTianaiCaptchaStatus,
  LTianaiCaptchaText,
  getRandomNumber,
  useCheckCaptcha,
  useCheckParams,
  useGetImgUrl,
  useSliderVerify,
} from './hook';

export const prefixCls = 'lightd-tiannai-captcha';

export default function Captcha({
  actionRef,
  baseUrl = '',
  requestCaptcha = '',
  validCaptcha = '',
  className,
  classNameContent,
  classNameTrack,
  style,
  styleContent,
  styleContentTips,
  styleTrack,
  styleTrackShadow,
  styleTrackMark,
  styleTrackMove,
  backgroundImageWidth = 309,
  backgroundImageHeight = 180,
  sliderImageWidth = 56,
  failRefreshTime = 1000,
  moveIcon,
  loadingIcon,
  onFail,
  onSuccess,
  onFinally,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const [checkRes, setChekRes] = useState({
    time: 0,
    showTips: false,
  });

  const { paramsRef, startTimeRef, resetParams } = useCheckParams();

  const { data: urlData, loading: urlLoading, refresh: runGetUrl } = useGetImgUrl(baseUrl, requestCaptcha);

  const {
    data: checkData,
    loading: checkLoading,
    run: runCheck,
  } = useCheckCaptcha(baseUrl, validCaptcha, {
    onSuccess(data, [params]) {
      const success = +data?.code === LTianaiCaptchaStatus.SUCCESS && data?.success;
      const time = success ? (params.ict.trackList.at(-1).t - params.ict.trackList.at(0).t) / 800 : 0;
      setChekRes({ time: +time?.toFixed(2) || 0, showTips: true });
      if (!success) {
        onFail?.();
        setTimeout(() => refresh?.(), failRefreshTime);
      } else {
        resetParams();
        onSuccess?.();
      }
    },
    onFinally,
  });

  const success = +checkData?.code === LTianaiCaptchaStatus.SUCCESS && checkData?.success;

  const { moveX, resetX, moveing } = useSliderVerify(ref, {
    loading: urlLoading,
    maxMoveX: backgroundImageWidth - sliderImageWidth + 2, // 最大移动距离
    onMouseDown() {
      paramsRef.current.startSlidingTime = new Date();
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
    onMouseUp(upX: number) {
      const y = getRandomNumber();
      paramsRef.current.endSlidingTime = new Date();
      paramsRef.current.trackList.push({
        type: 'up',
        t: Date.now() - startTimeRef.current + 50,
        y,
        x: Math.round(upX),
      });
      runCheck({
        id: urlData?.id,
        ict: paramsRef.current,
      });
    },
  });

  const transition = moveing ? 'none' : 'all 0.3s';

  function refresh() {
    resetParams();
    resetX();
    setChekRes({ showTips: false, time: 0 });
    runGetUrl();
  }

  useImperativeHandle(actionRef, () => ({
    refresh,
  }));

  const moveDom = moveIcon ? moveIcon : <DoubleRightOutlined />;
  const loadingDom = loadingIcon ? (
    loadingIcon
  ) : (
    <>
      <Skeleton.Input
        className={`${prefixCls}-content-loading`}
        style={{ height: backgroundImageHeight }}
        active
        block
      />
      <Skeleton.Input className={`${prefixCls}-track-loading`} style={{ height: 33 }} active block />
    </>
  );

  const contentDom = (
    <>
      <div
        className={classnames(`${prefixCls}-content`, classNameContent)}
        style={{ height: backgroundImageHeight, ...styleContent }}
      >
        <img className={`${prefixCls}-content-big-img`} src={urlData?.backgroundImage} alt="big-bg" draggable={false} />
        <img
          className={`${prefixCls}-content-small-img`}
          src={urlData?.templateImage}
          style={{ transition, transform: `translateX(${moveX}px)` }}
          alt="small-bg"
          draggable={false}
        />
        <div
          ref={tipsRef}
          className={classnames(`${prefixCls}-content-tips`, {
            [`${prefixCls}-content-tips-success`]: success,
            [`${prefixCls}-content-tips-fail`]: !success,
          })}
          style={{ transform: `translateY(${checkRes?.showTips ? 0 : 101}%)`, ...styleContentTips }}
        >
          {LTianaiCaptchaText[(checkData?.code || 4000) as keyof typeof LTianaiCaptchaText]}
          {checkRes?.time ? `，耗时 ${checkRes.time}s` : null}
        </div>
      </div>

      <div className={classnames(`${prefixCls}-track`, classNameTrack)} style={styleTrack}>
        <div className={`${prefixCls}-track-mark`} style={{ width: moveX, transition, ...styleTrackMark }} />
        <div className={`${prefixCls}-track-shadow`} style={styleTrackShadow} />
        <div
          ref={ref}
          className={`${prefixCls}-track-move`}
          style={{
            width: sliderImageWidth,
            ...styleTrackMove,
            pointerEvents: checkLoading ? 'none' : 'auto',
          }}
        >
          {checkLoading ? <LoadingOutlined /> : moveDom}
        </div>
      </div>
    </>
  );

  return (
    <div className={classnames(prefixCls, className)} style={{ width: backgroundImageWidth, ...style }}>
      {urlLoading ? loadingDom : contentDom}
    </div>
  );
}
