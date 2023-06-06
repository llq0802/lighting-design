import { useEffect, useImperativeHandle, useRef, useState } from 'react';

interface IOptions {
  value: boolean;
  onChange: (bool: boolean) => void;
  onVerify?: (num: number) => void;
  onSuccess?: () => void;
  innerRef?: any;
  width: number;
  barWidth: number;
  difference: number;
}

interface ITmpData {
  /** 移动的最大值(组件宽度 - bar的宽度) */
  max: number;
  /** 当前bar距离页面左侧的距离 */
  offX: number;
  /** 移动了多少 */
  diff: number;
  /** 是否正在移动 */
  isMove: boolean;
}

export default function useSliderVerify(options: IOptions) {
  const {
    onVerify,
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
    max: width - barWidth, // 也是右侧div的宽度
    offX: 0,
    diff: 0,
    isMove: false,
  });
  const [barLeft, setBarLeft] = useState(0);
  const [modalWidth, setModalWidth] = useState(0);

  const hasOnVerify = !!onVerify;

  // body文档的移动事件
  const onMove = (e: any) => {
    const diff = e.pageX - refTmpData.current.offX;
    let barLeft = diff;
    let modalWidth = diff;
    refTmpData.current.diff = diff;
    refTmpData.current.isMove = true;

    // 边界判断 最大值
    if (!hasOnVerify && barLeft + difference >= refTmpData.current.max) {
      barLeft = refTmpData.current.max; // 是最大 max 的值
      modalWidth = width; // 最大宽度 是 外面容器的宽度
      refTmpData.current.isMove = false;
      onChange?.(true);
      onSuccess?.();
      // 移除事件
      document.removeEventListener('mousemove', onMove);
      refBar.current.removeEventListener('mousedown', onMouseDown);
    }

    if (hasOnVerify && barLeft + difference >= refTmpData.current.max) {
      refTmpData.current.diff = refTmpData.current.max;
      barLeft = refTmpData.current.max; // 是最大 max 的值
      modalWidth = width; // 最大宽度 是 外面容器的宽度
    }

    // 边界判断 小于 0
    if (diff <= 0) {
      refTmpData.current.diff = 0;
      barLeft = 0;
      modalWidth = 0;
    }

    setBarLeft(barLeft);
    setModalWidth(modalWidth);
  };

  // 滑块的onMouseDown
  const onMouseDown = (e: any) => {
    document.addEventListener('mousemove', onMove);
    if (!hasOnVerify) {
      refTmpData.current.offX = e.pageX;
    }
  };

  // body文档的onMouseUp
  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMove);
    // 回到最初位置
    if (refTmpData.current.diff + difference < refTmpData.current.max) {
      refTmpData.current.isMove = false;
      setBarLeft(0);
      setModalWidth(0);
    }

    if (hasOnVerify) {
      onVerify(refTmpData.current.diff);
    }
  };

  useEffect(() => {
    const left = refBar.current.getBoundingClientRect().left;
    refTmpData.current.offX = value ? left + width : left;
    refTmpData.current.diff = value ? width : 0;
    setBarLeft(value ? width - barWidth : 0);
    setModalWidth(value ? width : 0);
    if (!value) {
      refBar.current.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [value]);

  const reset = () => {
    setBarLeft(0);
    setModalWidth(0);
    onChange?.(false);
    document.removeEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  useImperativeHandle(innerRef, () => ({
    reset,
    value,
  }));

  return {
    isMove: refTmpData.current.isMove,
    barLeft,
    modalWidth,
    refBar,
  };
}
