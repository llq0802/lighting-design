import { useSlideVerify } from 'rc-use-hooks';
import { useRef } from 'react';
import bg1 from './imgs/bg1.webp';
import bg2 from './imgs/bg2.webp';

export default function LTianaiCaptcha(props) {
  const ref = useRef<HTMLDivElement>(null);
  const { moveX, reset, moveing } = useSlideVerify(ref, {
    maxMoveX: 309 - 56.5, // 最大移动距离
    onMouseUp(moveX) {
      console.log('==onMouseUp===>', moveX);
    },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: 309, userSelect: 'none' }}>
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <button onClick={reset} type="button">
          重置
        </button>
      </div>
    </div>
  );
}
