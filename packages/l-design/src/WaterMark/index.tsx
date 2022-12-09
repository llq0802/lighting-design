import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

export interface WaterMarkProps {
  width?: number;
  height?: number;
  /**
   * 旋转角度
   */
  rotate?: number;
  /**
   * 水印内容文字
   */
  content: string;
  /**
   * 文字填充类型
   */
  contentType?: 'fill' | 'stroke';
  /**
   * 文字颜色
   */
  fontColor?: string | CanvasGradient | CanvasPattern;
  /**
   * 文字大小
   */
  fontSize?: number;
  /**
   * 左侧偏移
   */
  offsetLeft?: number;
  /**
   * 上侧偏移
   */
  offsetTop?: number;
  /**
   * 容器样式
   */
  style?: React.CSSProperties;
  /**
   * 容器类名
   */
  className?: string;
  children?: React.ReactNode;
}

const WaterMark: React.FC<WaterMarkProps> = ({
  content,
  contentType = 'fill',
  width = 200,
  height = 200,
  rotate = 0,
  fontColor = 'rgba(0,0,0,.15)',
  fontSize = 16,
  offsetLeft = 25,
  offsetTop = 25,
  style,
  className,
  children,
}) => {
  let backgroundStr = '';
  const [date, setDate] = useState<Date>(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  const createWaterMark = () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (context) {
      context.font = `${fontSize}px Microsoft Yahei`;
      context.fillStyle = fontColor;
      context.rotate((Math.PI * rotate) / 180);
      context[`${contentType}Text`]?.(content, offsetLeft, offsetTop);
      // if(contentType === 'fill') {
      //   context.fillText(content, offsetLeft, offsetTop)
      // }else {
      //   context.strokeText(content, offsetLeft, offsetTop);
      // }
      const base64Url = canvas.toDataURL();
      containerRef.current!.style!.backgroundImage = `url(${base64Url})`;
      backgroundStr = `url(${base64Url})`;
    }
  };

  const createObserver = () => {
    const MutationObserver = window.MutationObserver;
    if (MutationObserver) {
      let mo: MutationObserver | null = new MutationObserver(() => {
        if (backgroundStr !== containerRef.current!.style.backgroundImage) {
          mo!.disconnect();
          mo = null;
          setDate(new Date());
        }
      });
      mo.observe(containerRef.current!, {
        attributes: true,
        subtree: true,
        childList: true,
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      createWaterMark();
      createObserver();
    }
  }, [date]);

  return (
    <div className={classNames('water-mark', className)} style={style} ref={containerRef}>
      {children}
    </div>
  );
};

export default WaterMark;
