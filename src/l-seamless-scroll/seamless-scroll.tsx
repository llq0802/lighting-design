import type { FC } from 'react';
import React, { memo, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { LSeamlessScrollProps } from './interface';

const LSeamlessScroll: FC<LSeamlessScrollProps> = (props) => {
  const {
    className,
    style,
    contentClassName,
    contentStyle,
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
  const cancel = () => {
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
    reqFrame.current = requestAnimationFrame(() => {
      const h = realBoxHeight.current / (copyNum + 1);
      //最好的无缝效果：满足 scrollHeight.current <  h * outCopyNum
      cancel();

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
        const absYPos = Math.abs(yPos.current);
        const remainder = absYPos % singleHeight;
        if (remainder === 0 && absYPos != 0) {
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
    cancel();
    const singleStep = wheelDistance || 20;
    if (e.deltaY > 0) {
      animation('down', singleStep);
    } else if (e.deltaY < 0) {
      animation('up', singleStep);
    }
  };

  const reset = () => {
    cancel();
    setYpos(0);
    initMove();
    enterRef.current = false;
  };

  // 初始化
  useLayoutEffect(() => {
    if (!list?.length || !autoScroll) return;
    enterRef.current = false;
    initMove();
    return () => cancel();
  }, [autoScroll, list]);

  // 提供的方法
  useImperativeHandle(actionRef, () => ({
    reset,
    start: () => {
      move();
    },
    stop: () => {
      cancel();
    },
  }));

  const renderChildren = list.map((item, index) => (
    <React.Fragment key={item[rowKey] ?? index}>{renderItem(item, index)}</React.Fragment>
  ));

  const copyList = useMemo(() => new Array(copyNum).fill(0), [copyNum]);
  return (
    <div
      ref={scrollRef}
      className={className}
      style={{ height, overscrollBehavior: 'contain', overflow: 'hidden', ...style }}
    >
      <div
        ref={realBoxRef}
        className={contentClassName}
        style={{
          willChange: 'translate',
          translate: `${0} ${yPos.current}px`,
          transition: `translate ${ease}`,
          ...contentStyle,
        }}
        onMouseEnter={() => {
          if (hover) {
            enterRef.current = true;
            cancel();
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
        {copyList.map((_, i) => (
          <div data-copy={i + 1} key={`copy-${i + 1}`}>
            {renderChildren}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LSeamlessScroll);
