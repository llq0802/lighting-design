import type { FC } from 'react';
import React, { memo, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { LSeamlessScrollProps } from './interface';

/**
 * 无缝滚动组件
 */
const LSeamlessScroll: FC<LSeamlessScrollProps> = (props) => {
  const {
    list,
    copyNum: outCopyNum = 1,
    hover = false,
    wheel = false,
    ease = 'ease-in',
    delay = 0,
    singleWaitTime = 1000,
    direction = 'up',
    singleHeight = 0,
    step = 1,
    children,
    wrapperClassName,
    height,
    actionRef,
  } = props;
  const reqFrame = useRef<number | null>(null);
  const singleWaitTimeout = useRef<NodeJS.Timeout | null>(null);
  const copyNum = useMemo(() => new Array(outCopyNum).fill(outCopyNum), [outCopyNum]);
  const scrollRef = useRef<HTMLDivElement>(null!);
  const scrollHeight = useRef<number>(0);
  const realBoxRef = useRef<HTMLDivElement>(null!);
  const realBoxHeight = useRef<number>(0);
  const [yPosState, setYpos] = useState<number>(0);
  const yPos = useRef<number>(yPosState);
  yPos.current = yPosState;
  const enterRef = useRef<boolean>(false);

  // 滚动频率
  const stepCount = useMemo(() => {
    return step;
  }, [step]);

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
    animation(direction, stepCount);
  };

  // 滚动动画
  const animation = (_direction: 'up' | 'down', _step: number) => {
    cancle();
    reqFrame.current = requestAnimationFrame(function () {
      const h = realBoxHeight.current / (outCopyNum + 1);
      // if (scrollHeight.current > h) {
      //   return;
      // }

      if (_direction === 'up') {
        if (Math.abs(yPos.current) >= h) {
          setYpos(0);
        } else {
          setYpos((item) => (item -= _step));
        }
        1;
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
        if (Math.abs(yPos.current) % singleHeight === 0) {
          if (singleWaitTimeout.current) {
            clearTimeout(singleWaitTimeout.current);
          }
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
    const singleStep = singleHeight > 0 ? singleHeight : 5;
    if (e.deltaY > 0) {
      animation('down', singleStep);
    } else if (e.deltaY < 0) {
      animation('up', singleStep);
    }
  };

  const reset = () => {
    cancle();
    setYpos(0);
    initMove();
  };

  // 初始化
  useLayoutEffect(() => {
    initMove();
    return () => cancle();
  }, []);

  // 提供的方法
  useImperativeHandle(actionRef, () => ({
    onReset: () => {
      reset();
    },
    onStopMove: () => {
      cancle();
    },
    onStartMove: () => {
      move();
    },
  }));

  // 真实盒子的样式
  const realBoxStyle = useMemo(() => {
    return {
      transform: `translate(${0}px,${yPosState}px)`,
      transition: `all ${ease} ${delay}ms`,
      overflow: 'hidden',
    };
  }, [delay, ease, yPosState]);

  const renderedItems = useMemo(() => {
    const items = [
      <div data-original key="original">
        {children}
      </div>,
    ];
    copyNum.forEach((_, i) => {
      items.push(
        <div data-copy-i={i} key={`copy-${i}`}>
          {children}
        </div>,
      );
    });
    return items;
  }, [children, copyNum]);

  return (
    <div
      ref={scrollRef}
      className={wrapperClassName}
      style={{
        height,
        overflow: 'hidden',
        outline: '1px solid red',
      }}
    >
      <div
        ref={realBoxRef}
        style={realBoxStyle}
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
        {renderedItems}
      </div>
    </div>
  );
};

export default memo(LSeamlessScroll);
