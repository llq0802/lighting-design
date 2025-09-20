import type { FC } from 'react';
import React, { memo, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import type { LSeamlessScrollProps } from './interface';

const LSeamlessScroll: FC<LSeamlessScrollProps> = (props) => {
  const {
    className,
    style,
    list,
    copyNum = 2,
    hover,
    wheel,
    wheelDistance,
    ease,
    singleWaitTime = 1000,
    direction = 'up',
    singleHeight = 0,
    step = 1,
    height,
    actionRef,
    rowKey = 'key',
    autoScroll = true,
    renderItem,
  } = props;
  const reqFrame = useRef<number | null>(null);
  const singleWaitTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null!);
  const scrollHeight = useRef<number>(0);
  const realBoxRef = useRef<HTMLDivElement>(null!);
  const realBoxHeight = useRef<number>(0);
  const [yPosState, setYpos] = useState<number>(0);
  const yPos = useRef<number>(yPosState);
  yPos.current = yPosState;
  const enterRef = useRef<boolean>(false);

  // 取消滚动id 避免闭包问题
  const cancle = () => {
    if (singleWaitTimeout.current) {
      clearTimeout(singleWaitTimeout.current);
      singleWaitTimeout.current = null;
    }
    if (reqFrame.current) {
      cancelAnimationFrame(reqFrame.current);
      reqFrame.current = null;
    }
  };

  // 滚动动画核心
  const move = () => {
    animation(direction, step);
  };

  // 滚动动画
  const animation = (_direction: 'up' | 'down', _step: number) => {
    cancle();
    reqFrame.current = requestAnimationFrame(function () {
      const h = realBoxHeight.current / (copyNum + 1);

      console.log('===h==>', h);
      console.log('===yPos.current==>', yPos.current);

      //最好的无缝效果：满足 scrollHeight.current <  h * outCopyNum
      if (singleWaitTimeout.current) {
        clearTimeout(singleWaitTimeout.current);
      }

      if (_direction === 'up') {
        if (Math.abs(yPos.current) >= h) {
          setYpos(0);
        } else {
          setYpos((item) => (item -= _step));
        }
      } else if (_direction === 'down') {
        if (yPos.current >= 0) {
          setYpos(h * -1);
        } else {
          setYpos((item) => (item += _step));
        }
      }

      if (enterRef.current) {
        return;
      }

      // 单步滚动
      if (singleHeight > 0) {
        const b = Math.abs(yPos.current) % singleHeight === 0;
        if (b) {
          singleWaitTimeout.current = setTimeout(() => {
            move();
          }, singleWaitTime);
        } else {
          move();
        }
      } else {
        move();
      }
    });
  };

  // 初始化滚动
  const initMove = () => {
    if (scrollRef.current) {
      scrollHeight.current = scrollRef.current.offsetHeight;
    }
    if (realBoxRef.current) {
      realBoxHeight.current = realBoxRef.current.offsetHeight;
    }
    move();
  };

  // 滚轮事件
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    cancle();
    const singleStep = singleHeight > 0 ? singleHeight : 20;
    if (e.deltaY > 0) {
      animation('down', wheelDistance || singleStep);
    } else if (e.deltaY < 0) {
      animation('up', wheelDistance || singleStep);
    }
  };

  const reset = () => {
    cancle();
    setYpos(0);
    initMove();
    enterRef.current = false;
  };

  // 初始化
  useLayoutEffect(() => {
    if (!list?.length || !autoScroll) return;
    setYpos(0);
    initMove();
    return () => cancle();
  }, [list]);

  // 提供的方法
  useImperativeHandle(actionRef, () => ({
    reset,
    start: () => {
      move();
    },
    stop: () => {
      cancle();
    },
  }));

  const renderChildren = list.map((item, index) => (
    <React.Fragment key={item[rowKey] ?? index}>{renderItem(item, index)}</React.Fragment>
  ));

  return (
    <div
      ref={scrollRef}
      className={className}
      style={{
        height,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        ref={realBoxRef}
        style={{
          translate: `${0} ${yPos.current}px`,
          transition: `translate ${ease}`,
        }}
        onMouseEnter={() => {
          if (hover) {
            enterRef.current = true;
            cancle();
          }
        }}
        onMouseLeave={() => {
          if (hover) {
            enterRef.current = false;
            move();
          }
        }}
        onWheel={(e) => {
          if (hover && wheel) {
            onWheel(e);
          }
        }}
      >
        {renderChildren}
        {new Array(copyNum).fill(0).map((_, i) => (
          <div data-copy={i + 1} key={`copy-${i}`}>
            {renderChildren}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LSeamlessScroll);
