import { DoubleRightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useRef, useState } from 'react';
import { getRandomNumber, useCheckCaptcha, useCheckParams, useGetImgUrl, useSliderVerify } from './hook';
import bg1 from './imgs/bg1.webp';
import bg2 from './imgs/bg2.webp';
import './index.less';
const prefixCls = 'lightd-tiannai-captcha';

const m = {
  4000: '   滑块已失效',
  4001: '   验证失败，请重新尝试',
  200: '   验证成功',
};

export default function TianaiCaptcha({
  baseUrl = '',
  requestCaptchaUrl = '',
  validCaptchaUrl = '',
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
  sliderImageHeight = 180,

  moveIcon,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const [checkRes, setChekRes] = useState({
    time: 0,
    text: '验证失败，请重新尝试',
    success: false,
    showTips: false,
  });

  const { params, startTime, resetParams } = useCheckParams();

  const { data: urlData, loading: urlLoading, run: runGetUrl } = useGetImgUrl(baseUrl + requestCaptchaUrl);
  const { loading: checkLoading, run: runCheck } = useCheckCaptcha(baseUrl + validCaptchaUrl, {
    onSuccess(data, params) {},
  });

  const { moveX, resetX, moveing } = useSliderVerify(ref, {
    maxMoveX: backgroundImageWidth - sliderImageWidth, // 最大移动距离
    onMouseDown() {
      params.ict.startSlidingTime = new Date();
      params.ict.trackList.push({ type: 'down', t: Date.now() - startTime, y: 0, x: 0 });
    },
    onMouseMove(moveX: number) {
      const y = getRandomNumber();
      params.ict.trackList.push({ type: 'move', t: Date.now() - startTime, y, x: Math.round(moveX) });
    },
    onMouseUp(upX: number) {
      const y = getRandomNumber();
      params.ict.endSlidingTime = new Date();
      params.ict.trackList.push({ type: 'up', t: Date.now() - startTime + 50, y, x: Math.round(upX) });
      console.log('==params====>', params);

      // if (params.ict.trackList.length < 2) {
      //   setTime(0);
      // } else {
      //   const time = (params.ict.trackList.at(-1).t - params.ict.trackList.at(0).t) / 1000;
      //   console.log('==time====>', time);
      //   setTime(setTime);
      // }
      setTimeout(() => {
        setChekRes({
          ...checkRes,
          showTips: true,
          success: false,
        });
      }, 100);
    },
  });

  const transition = moveing ? 'none' : 'all 0.3s';

  return (
    <div className={classnames(prefixCls, className)} style={{ height: backgroundImageWidth, ...style }}>
      <div
        className={classnames(`${prefixCls}-content`, classNameContent)}
        style={{ height: backgroundImageHeight, ...styleContent }}
      >
        <img className={`${prefixCls}-content-big-img`} src={bg1} alt="big-bg" draggable={false} />
        <img
          className={`${prefixCls}-content-small-img`}
          src={bg2}
          style={{ transition, transform: `translateX(${moveX}px)` }}
          alt="small-bg"
          draggable={false}
        />
        <div
          ref={tipsRef}
          className={classnames(`${prefixCls}-content-tips`, {
            [`${prefixCls}-content-tips-success`]: checkRes?.success,
            [`${prefixCls}-content-tips-fail`]: !checkRes?.success,
          })}
          style={{ transform: `translateY(${checkRes?.showTips ? 0 : 101}%)`, ...styleContentTips }}
        >
          {checkRes.text}
        </div>
      </div>

      <div className={classnames(`${prefixCls}-track`, classNameTrack)} style={styleTrack}>
        <div className={`${prefixCls}-track-mark`} style={{ width: moveX, transition, ...styleTrackMark }} />
        <div className={`${prefixCls}-track-shadow`} style={styleTrackShadow} />
        <div ref={ref} className={`${prefixCls}-track-move`} style={{ width: sliderImageWidth, ...styleTrackMove }}>
          {moveIcon ? moveIcon : <DoubleRightOutlined />}
        </div>
      </div>

      {/* 底部操作 */}
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <button
          onClick={() => {
            resetParams();
            resetX();
            setChekRes({
              showTips: false,
              success: false,
              time: 0,
              text: '验证失败，请重新尝试',
            });
            // runGetUrl();
          }}
          type="button"
        >
          重置
        </button>
      </div>
    </div>
  );
}
