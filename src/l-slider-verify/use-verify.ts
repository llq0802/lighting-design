import { useMemoizedFn } from 'ahooks';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';

interface IOptions {
  value: boolean;
  onChange: (bool: boolean) => void;
  onProcess?: (num: number) => void;
  onMouseUp?: (num: number) => void;
  onSuccess?: () => void;
  innerRef?: any;
  width: number;
  barWidth: number;
  difference: number;
}

interface ITmpData {
  /** 当前bar距离页面左侧的距离 */
  offX: number;
  /** 移动了多少 */
  diff: number;
  /** 是否正在移动 */
  isMove: boolean;
}

export default function useSliderVerify(options: IOptions) {
  const {
    onProcess,
    onMouseUp: outOnMouseUp,
    value,
    onChange,
    onSuccess,
    innerRef,
    width,
    barWidth,
    difference,
  } = options;

  const refBar = useRef<any>();

  const refTmpData = useRef<ITmpData>({
    offX: 0,
    diff: 0,
    isMove: false,
  });

  const [barLeft, setBarLeft] = useState(0);
  const [modalWidth, setModalWidth] = useState(0);

  // body文档的移动事件
  const onMove = useMemoizedFn((e: any) => {
    refTmpData.current.isMove = true;
    const diff = e.pageX - refTmpData.current.offX;

    let barLeft = diff;
    let modalWidth = diff;
    refTmpData.current.diff = diff;

    // 边界判断 最大值  移动的最大值(组件宽度 - bar的宽度)
    if (diff + difference >= width - barWidth) {
      barLeft = width - barWidth; // 是最大 max 的值
      modalWidth = width; // 最大宽度 是 外面容器的宽度
      refTmpData.current.isMove = false;
      onChange?.(true);
      onSuccess?.();
      setTimeout(() => {
        outOnMouseUp?.(barLeft);
      });
      // 移除事件
      document.removeEventListener('mousemove', onMove);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      refBar.current.removeEventListener('mousedown', onMouseDown);
    }

    // 边界判断 小于 0
    if (diff <= 0) {
      refTmpData.current.diff = 0;
      barLeft = 0;
      modalWidth = 0;
    }
    setBarLeft(barLeft);
    setModalWidth(modalWidth);
    onProcess?.(barLeft);
  });

  // body文档的onMouseUp
  const onMouseUp = useMemoizedFn(() => {
    // 回到最初位置
    if (refTmpData.current.diff + difference < width - barWidth) {
      refTmpData.current.isMove = false;
      setBarLeft(0);
      setModalWidth(0);
    }
    outOnMouseUp?.(refTmpData.current.diff);
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onMouseUp);
  });

  // 滑块的onMouseDown
  const onMouseDown = useMemoizedFn((e: any) => {
    refTmpData.current.offX = e.pageX;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  useEffect(() => {
    const left = refBar.current.getBoundingClientRect().left;
    refTmpData.current.offX = value ? left + width : left;
    refTmpData.current.diff = value ? width : 0;
    setBarLeft(value ? width - barWidth : 0);
    setModalWidth(value ? width : 0);
    if (!value) {
      refBar.current.addEventListener('mousedown', onMouseDown);
    }
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onMouseUp);
      refBar.current?.removeEventListener?.('mousedown', onMouseDown);
    };
  }, [value, width, barWidth]);

  const reset = () => {
    setBarLeft(0);
    setModalWidth(0);
    onChange?.(false);
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  useImperativeHandle(innerRef, () => ({ reset, value }));

  return {
    isMove: refTmpData.current.isMove,
    barLeft,
    modalWidth,
    refBar,
  };
}
