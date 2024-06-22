import { useMount } from 'ahooks';
import classnames from 'classnames';
import { useRef, useState } from 'react';
import useSlideVerify from './hook';
// import bg1 from './imgs/bg1.webp';
// import bg2 from './imgs/bg2.webp';

const prefixCls = 'lightd-tiannai-captcha';

const getRandomNumber = (min: number = -10, max: number = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function LTianaiCaptcha({ className }) {
  const ref = useRef<HTMLDivElement>(null);
  const paramsRef = useRef({
    id: '',
    ict: {
      bgImageWidth: 308,
      bgImageHeight: 180,
      sliderImageWidth: 55,
      sliderImageHeight: 180,
      startSlidingTime: new Date(),
      endSlidingTime: new Date(),
      trackList: [],
    },
  });
  const startTimeRef = useRef(Date.now());
  const [{ bg1, bg2 }, setBg] = useState({ bg1: '', bg2: '' });

  const { moveX, reset, moveing } = useSlideVerify(ref, {
    maxMoveX: 309 - 55, // 最大移动距离
    onMouseDown(startX) {
      paramsRef.current.ict.startSlidingTime = new Date();
      const track = {
        x: 0,
        y: 0,
        type: 'down',
        t: Date.now() - startTimeRef.current,
      };
      paramsRef.current.ict.trackList.push(track);
    },
    onMouseMove(moveX) {
      console.log('==moveX====>', moveX);
      const y = getRandomNumber();
      paramsRef.current.ict.trackList.push({ type: 'move', t: Date.now() - startTimeRef.current, y, x: moveX });
    },
    onMouseUp(upX) {
      // console.log('==upX====>', upX);
      const y = getRandomNumber();
      paramsRef.current.ict.endSlidingTime = new Date();
      paramsRef.current.ict.trackList.push({ type: 'up', t: Date.now() - startTimeRef.current, y, x: upX });

      const params = paramsRef.current;

      fetch('http://169.254.4.160:8800/shiyi/check/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(params),
      })
        .then((r) => r.json())
        .then((res) => {
          console.log('==check====>', res);
        })
        .catch(() => {});
    },
  });

  const getUrl = () => {
    fetch('http://169.254.4.160:8800/shiyi/gen/')
      .then((r) => r.json())
      .then((res) => {
        const data = res.captcha;
        paramsRef.current.id = res.id;
        setBg({
          bg1: data.backgroundImage,
          bg2: data.templateImage,
        });
      })
      .catch(() => {});
  };

  useMount(() => {
    getUrl();
  });

  return (
    <div
      className={classnames(prefixCls, className)}
      style={{ display: 'flex', flexDirection: 'column', gap: 14, width: 309, userSelect: 'none' }}
    >
      {/* 图片背景 */}
      <div style={{ position: 'relative', width: '100%', height: 180, border: '1px solid #ccc' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <img src={bg1} style={{ position: 'absolute', width: '100%', height: '100%' }} alt="" draggable={false} />
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: `translateX(${moveX}px)`,
            transition: moveing ? 'none' : 'all 0.3s',
          }}
        >
          <img src={bg2} style={{ position: 'absolute', height: '100%' }} alt="" draggable={false} />
        </div>
        <div style={{ position: 'absolute', display: 'none' }}>验证失败，请重新尝试</div>
      </div>
      {/* 滑块及轨道 */}
      <div
        style={{
          background: '#b1adb6',
          height: 32,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            height: '100%',
            width: moveX,
            transition: moveing ? 'none' : 'all 0.3s',
            position: 'absolute',
            background: 'blue',
          }}
        ></div>
        <div>slider-move-track</div>
        <div
          ref={ref}
          style={{
            position: 'absolute',
            width: 56,
            height: 44,
            background: 'red',
            top: -6,
            display: 'grid',
            placeItems: 'center',
            cursor: 'move',
            borderRadius: 6,
          }}
        >
          ==
        </div>
      </div>
      {/* 底部操作 */}
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <button
          onClick={() => {
            reset();
            getUrl();
          }}
          type="button"
        >
          重置
        </button>
      </div>
    </div>
  );
}
