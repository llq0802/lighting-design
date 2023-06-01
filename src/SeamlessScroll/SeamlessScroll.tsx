import type { CSSProperties, FC } from 'react';
import React, {
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { throttle } from 'throttle-debounce';

import { useUpdateEffect } from 'ahooks';
import type { ReactNode } from 'react';
declare type EaseType =
  | {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }
  | string;
export declare interface LSeamlessScrollInstance {
  onReset(): void;
  onStopMove(): void;
  onStartMove(): void;
}
export declare interface LSeamlessScrollProps {
  /** 是否开启自动滚动 */
  isAutoScroll?: boolean;
  /** 原始数据列表 */
  list: Record<string, any>[];
  /** 步进速度，step也是单步大小的约数 */
  step?: number;
  /** 开启滚动的数据大小 默认3*/
  limitScrollNum?: number;
  /** 是否开启鼠标悬停 */
  hover?: boolean;
  /** 控制滚动方向 */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** 单步运动停止的高度(每一项的高度) */
  singleHeight?: number;
  /** 单步运动停止的宽度 每一项的宽度)*/
  singleWidth?: number;
  /** 单步停止等待时间 (默认值 1000ms) */
  singleWaitTime?: number;
  /** 是否开启 rem 单位 */
  isRemUnit?: boolean;
  /** 开启数据更新监听 */
  isWatch?: boolean;
  /** 动画延迟时间 */
  delay?: number;
  /** 动画方式 */
  ease?: EaseType;
  /** 动画循环次数，默认-1表示一直动画 0表示不循环*/
  count?: number;
  /** 拷贝几份滚动列表 */
  copyNum?: number;
  /** 开启鼠标悬停时支持滚轮滚动 */
  wheel?: boolean;
  /** 滚动盒子的类名 */
  wrapperClassName?: string;
  /** 滚动盒子的高度 */
  wrapperHeight?: number;
  /** 列表节点 */
  children: ReactNode;
  /** 滚动实例 */
  scrollRef: React.MutableRefObject<LSeamlessScrollInstance | undefined>;
}

function dataWarm(list: Record<string, any>[]) {
  if (list && typeof list !== 'boolean' && list.length >= 400) {
    console.warn(
      `数据达到了${list.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`,
    );
  }
}

/**
 * 无缝滚动组件
 * @param props SeamlessScrollType
 * @param ref ref
 * @returns ReactNode
 */
const LSeamlessScroll: FC<LSeamlessScrollProps> = (props) => {
  const {
    list = [],
    limitScrollNum = 3,
    copyNum: outCopyNum = 1,
    hover = false,
    wheel = false,
    isRemUnit = false,
    isWatch = true,
    isAutoScroll = true,
    ease = 'ease-in',
    delay = 0,
    singleWaitTime = 1000,
    direction = 'up',
    singleWidth = 0,
    singleHeight = 0,
    step = 1,
    count = -1,
    children,
    wrapperClassName,
    wrapperHeight,
    scrollRef: outScrollRef,
  } = props;
  const copyNum = new Array(outCopyNum).fill(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slotListRef = useRef<HTMLDivElement | null>(null);
  const realBoxRef = useRef<HTMLDivElement | null>(null);
  const realBoxWidth = useRef<number>(0);
  const realBoxHeight = useRef<number>(0);
  const reqFrame = useRef<number | null>(null);
  const singleWaitTimeout = useRef<NodeJS.Timeout | null>(null);
  const [xPosState, setXpos] = useState<number>(0);
  const [yPosState, setYpos] = useState<number>(0);
  const xPos = useRef<number>(xPosState);
  const yPos = useRef<number>(yPosState);
  xPos.current = xPosState;
  yPos.current = yPosState;
  // 记录滚动次数
  const _count = useRef<number>(0);
  // 是否能滚动
  const isScroll = useMemo(
    () => (list ? list.length >= limitScrollNum : false),
    [limitScrollNum, list],
  );
  // 真实盒子的样式
  const realBoxStyle = useMemo(() => {
    return {
      width: realBoxWidth.current ? `${realBoxWidth.current}px` : 'auto',
      transform: `translate(${xPosState}px,${yPosState}px)`,
      transition: `all ${
        typeof ease === 'string'
          ? ease
          : `cubic-bezier(${ease.x1},${ease.y1},${ease.x2},${ease.y2})`
      } ${delay}ms`,
      overflow: 'hidden',
    };
  }, [delay, ease, xPosState, yPosState]);

  // 是否水平滚动
  const isHorizontal = useMemo<boolean>(
    () => direction === 'left' || direction === 'right',
    [direction],
  );
  // 是否开启鼠标移入事件
  const isHoverStop = useMemo(
    () => hover && isAutoScroll && isScroll,
    [hover, isScroll, isAutoScroll],
  );

  // children列表div样式
  const floatStyle = useMemo<CSSProperties>(() => {
    return isHorizontal
      ? { float: 'left', overflow: 'hidden' }
      : { overflow: 'hidden' };
  }, [isHorizontal]);

  // 基础字体大小 默认为1px
  const baseFontSize = useMemo<number>(() => {
    return isRemUnit
      ? parseInt(
          globalThis.window.getComputedStyle(
            globalThis.document.documentElement,
            null,
          ).fontSize,
        )
      : 1;
  }, [isRemUnit]);

  // 横向单步大小
  const realSingleStopWidth = useMemo<number>(
    () => singleWidth * baseFontSize,
    [baseFontSize, singleWidth],
  );
  // 纵向单步大小
  const realSingleStopHeight = useMemo<number>(
    () => singleHeight * baseFontSize,
    [singleHeight, baseFontSize],
  );
  // 滚动频率
  const stepCount = useMemo(() => {
    let singleStep: number;
    let _step = step;
    if (isHorizontal) {
      singleStep = realSingleStopWidth;
    } else {
      singleStep = realSingleStopHeight;
    }
    if (singleStep > 0 && singleStep % _step > 0) {
      console.warn(
        '如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~',
      );
    }
    return _step;
  }, [isHorizontal, step, realSingleStopHeight, realSingleStopWidth]);

  // 取消滚动id 避免闭包问题
  const cancle = () => {
    cancelAnimationFrame(reqFrame.current as number);
    reqFrame.current = null;
  };
  // 滚动动画核心
  const move = () => {
    cancle();
    if (!isAutoScroll || !isScroll || _count.current === count) {
      _count.current = 0;
      return;
    }
    animation(direction as 'up' | 'down' | 'left' | 'right', stepCount, false);
  };
  // 滚动动画
  const animation = (
    _direction: 'up' | 'down' | 'left' | 'right',
    _step: number,
    isWheel?: boolean,
  ) => {
    reqFrame.current = requestAnimationFrame(function () {
      // 无缝滚动 因为复制了几份数组所以要除以 (outCopyNum + 1);
      const h = realBoxHeight.current / (outCopyNum + 1);
      const w = realBoxWidth.current / (outCopyNum + 1);

      if (_direction === 'up') {
        if (Math.abs(yPos.current) >= h) {
          setYpos(0);
          _count.current += 1;
        }
        // 这儿不能else判断 因为单位滚动到临界值时会导致滚动不很连续
        setYpos((item) => (item -= _step));
      } else if (_direction === 'down') {
        if (yPos.current >= 0) {
          setYpos(h * -1);
          _count.current += 1;
        }
        setYpos((item) => (item += _step));
      } else if (_direction === 'left') {
        if (Math.abs(xPos.current) >= w) {
          setXpos(0);
          _count.current += 1;
        }
        setXpos((item) => (item -= _step));
      } else if (_direction === 'right') {
        if (xPos.current >= 0) {
          setXpos(w * -1);
          _count.current += 1;
        }
        setXpos((item) => (item += _step));
      }

      // 当滚轮滑动时不能单步滚动
      if (isWheel) return;

      if (singleWaitTimeout.current) {
        clearTimeout(singleWaitTimeout.current);
      }

      // 单步滚动
      if (!!realSingleStopHeight) {
        if (Math.abs(yPos.current) % realSingleStopHeight === 0) {
          singleWaitTimeout.current = setTimeout(() => {
            move();
          }, singleWaitTime);
        } else {
          move();
        }
      } else if (!!realSingleStopWidth) {
        if (Math.abs(xPos.current) % realSingleStopWidth < _step) {
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
    dataWarm(list);
    // 是否横线滚动
    if (isHorizontal) {
      let slotListWidth = (slotListRef.current as HTMLDivElement).offsetWidth;
      realBoxWidth.current = slotListWidth * 2;
    } else {
      realBoxHeight.current = (
        realBoxRef.current as HTMLDivElement
      ).offsetHeight;
    }
    move();
  };

  // 滚轮事件
  const throttleFunc = throttle(30, (e: React.WheelEvent<HTMLDivElement>) => {
    cancle();
    const singleStep = !!realSingleStopHeight ? realSingleStopHeight : 20;
    if (e.deltaY < 0) {
      animation('down', singleStep, true);
    }
    if (e.deltaY > 0) {
      animation('up', singleStep, true);
    }
  });
  // 滚轮事件
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    throttleFunc(e);
  };

  // 开始滚动
  const startMove = () => {
    move();
  };
  // 停止滚动
  const stopMove = () => {
    if (singleWaitTimeout.current) {
      clearTimeout(singleWaitTimeout.current);
    }
    cancle();
  };

  const reset = () => {
    if (singleWaitTimeout.current) {
      clearTimeout(singleWaitTimeout.current as unknown as number);
    }
    cancle();
    initMove();
  };

  useUpdateEffect(() => {
    if (isAutoScroll) {
      startMove();
    } else {
      stopMove();
    }
  }, [isAutoScroll]);

  useUpdateEffect(() => {
    if (count !== 0) {
      startMove();
    }
  }, [count]);

  // 初始化
  useEffect(() => {
    if (!isWatch) return;

    cancle();
    if (singleWaitTimeout.current) {
      clearTimeout(singleWaitTimeout.current as unknown as number);
    }
    // 如果数据list长度能滚动并且配置了自动滚动
    if (isScroll && isAutoScroll) {
      initMove();
    }
    return () => {
      stopMove();
    };
  }, [list, isWatch]);

  // 提供的方法
  useImperativeHandle(outScrollRef, () => ({
    onReset: () => {
      reset();
    },
    onStopMove: () => {
      stopMove();
    },
    onStartMove: () => {
      startMove();
    },
  }));

  // children列表div
  const getHtmlMemo = useMemo(() => {
    return (
      <>
        <div ref={slotListRef} style={floatStyle}>
          {children}
        </div>
        {isScroll
          ? copyNum.map((_, i) => {
              return (
                <div key={i} style={floatStyle}>
                  {children}
                </div>
              );
            })
          : null}
      </>
    );
  }, [list]);

  return (
    <div
      ref={scrollRef}
      className={wrapperClassName}
      style={{
        height: wrapperHeight || realBoxHeight.current / 2,
        overflow: 'hidden',
      }}
    >
      {wheel && hover ? (
        <div
          ref={realBoxRef}
          style={realBoxStyle}
          onMouseEnter={() => {
            if (isHoverStop) {
              stopMove();
            }
          }}
          onMouseLeave={() => {
            if (isHoverStop) {
              startMove();
            }
          }}
          onWheel={(e) => {
            if (isHoverStop) {
              onWheel(e);
            }
          }}
        >
          {getHtmlMemo}
        </div>
      ) : (
        <div
          ref={realBoxRef}
          style={realBoxStyle}
          onMouseEnter={() => {
            if (isHoverStop) {
              stopMove();
            }
          }}
          onMouseLeave={() => {
            if (isHoverStop) {
              startMove();
            }
          }}
        >
          {getHtmlMemo}
        </div>
      )}
    </div>
  );
};

export default memo(LSeamlessScroll);
