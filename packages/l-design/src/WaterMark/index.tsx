import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

export interface LWaterMarkProps {
  /** 水印体宽度 */
  width?: number;
  /** 水印体高度 */
  height?: number;
  /**
   * 旋转角度
   */
  rotate?: number;
  /**
   * 水印内容文字
   */
  content: string;
  /** 水印层级 */
  zIndex?: number;
  /** 文字填充类型 */
  contentType?: 'fill' | 'stroke';
  /**
   * 相对于水印体左侧偏移
   */
  offsetLeft?: number;
  /**
   * 相对于水印体上侧偏移
   */
  offsetTop?: number;
  /**
   * 水印div样式
   */
  style?: React.CSSProperties;
  /**
   * 水印div类名
   */
  className?: string;
  /** 根div样式 */
  rootStyle?: React.CSSProperties;
  /** 字体样式*/
  font?: {
    color: string;
    fontWeight: string;
    fontFamily: string;
    fontStyle: string;
    fontSize: number;
  };
  children?: React.ReactNode;
}

const WaterMark: React.FC<LWaterMarkProps> = ({
  content = 'Lighting-Design',
  contentType = 'fill',
  width = 200,
  height = 200,
  rotate = 30,
  offsetLeft = 30,
  offsetTop = 30,
  zIndex = 9,
  style,
  rootStyle,
  className,
  font = {},
  children,
}) => {
  const {
    color = 'rgba(0,0,0,.15)',
    fontSize = 16,
    fontWeight = 'normal',
    fontStyle = 'normal',
    fontFamily = 'sans-serif',
  } = font;

  let backgroundStr = '';

  const ratio = window.devicePixelRatio;
  const [date, setDate] = useState<Date>(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  const createWaterMark = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (context) {
      context.font = `${fontStyle} normal ${fontWeight} ${fontSize * ratio}px ${fontFamily}`;
      context.fillStyle = color;
      context.rotate((Math.PI * rotate) / 180);
      context[`${contentType}Text`]?.(content, offsetLeft, offsetTop);
      const base64Url = canvas.toDataURL();
      containerRef.current!.style!.backgroundImage = `url(${base64Url})`;
      containerRef.current!.style!.backgroundSize = `${width}px ${height}px`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div style={{ ...rootStyle, position: 'relative' }}>
      {children}
      <div
        className={classNames('lightd-water-mark', className)}
        style={{ zIndex, ...style }}
        ref={containerRef}
      />
    </div>
  );
};

export default WaterMark;
