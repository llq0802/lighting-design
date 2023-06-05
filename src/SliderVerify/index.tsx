import { CheckOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import classnames from 'classnames';
import React, { forwardRef } from 'react';
import './index.less';
import useVerify from './useVerify';

interface SliderVerifyProps {
  /** 初始验证结果值  */
  defaultValue?: boolean;
  /** 验证结果值(受控)  */
  value?: boolean;
  /** 移动改变的回调(受控) */
  onChange?: (bool: boolean) => void;
  /** 验证成功的回调 */
  onSuccess?: () => void;
  /** 组件宽度 */
  width?: number;
  /** 组件高度 */
  height?: number;
  /** 初始背景颜色 */
  bgColor?: string;
  /** 提示的文字 */
  tips?: React.ReactNode;
  /** 滑块外层div的宽度 */
  barWidth?: number;
  /** 初始滑块内容 */
  bar?: React.ReactNode;
  /** 成功后滑块内容 */
  successBar?: React.ReactNode;
  /** 成功后的背景颜色 */
  successBgColor?: string;
  /** 成功后提示的文字 */
  successTips?: React.ReactNode;
  /** 成功后是否还显示bar */
  successShowBar?: boolean;
  /** 成功后文字提示div的样式 */
  successTipsStyle?: React.CSSProperties;
  /** 距离最右边还剩多少就算成功 */
  difference?: number;
  /** 滑块的样式 */
  barStyle?: React.CSSProperties;
  /** 文字提示div的样式 */
  tipsStyle?: React.CSSProperties;
  /** 组件容器样式 */
  style?: React.CSSProperties;
  /** 组件容器类名 */
  className?: string;
}

export type LSliderVerifyInstance = {
  /** 重置组件到初始状态 */
  reset: () => void;
};

export interface LSliderVerifyProps extends SliderVerifyProps {
  /** 滑块实例, 里面有重置方法 */
  actionRef?: React.MutableRefObject<LSliderVerifyInstance | undefined>;
}

const prefixCls = 'lightd-slider-verify';

function SliderVerify(props: LSliderVerifyProps) {
  const {
    outRef,

    className,
    onSuccess,
    actionRef,
    width = 400,
    barWidth = 60,
    height = 32,

    bgColor = '#F2F3F5',
    tips = '请按住滑块，拖动到最右边',
    bar = <DoubleRightOutlined />,
    barStyle: outBarStyle = {},
    tipsStyle = {},
    style: outStyle = {},

    successBgColor = '#52c41a',
    successTips = '验证已通过',
    successTipsStyle = {},
    successBar = <CheckOutlined />,

    successShowBar = true,
    difference = 0,
  } = props;

  const [value, onChange] = useControllableValue(props, {
    defaultValue: props?.defaultValue ?? false,
  });

  // width - barWidth  = tips的width
  const { success, isMove, barLeft, modalWidth, refBar } = useVerify({
    value,
    onChange,
    onSuccess,
    innerRef: actionRef,
    width,
    barWidth,
    difference,
  });

  const sliderVerifyStyle = {
    ...outStyle,
    backgroundColor: bgColor,
    width: `${width}px`,
    height: `${height}px`,
  };

  const barStyle = {
    ...outBarStyle,
    width: `${barWidth}px`,
    transitionDuration: !isMove ? '.3s' : '0s',
    transform: `translateX(${
      success && !successShowBar ? width + 2 : barLeft
    }px)`,
  };

  const verifyTipsStyle = {
    ...tipsStyle,
    ...(success ? successTipsStyle : {}),
    transform: `translateX(${success ? 0 : barWidth}px)`,
    width: `${success && !successShowBar ? width : width - barWidth}px`,
  };

  const modalStyle = {
    backgroundColor: successBgColor,
    width: `${width}px`,
    left: `-${width}px`,
    transitionDuration: !isMove ? '.3s' : '0s',
    transform: `translateX(${modalWidth}px)`,
  };

  return (
    <div
      ref={outRef}
      className={classnames(
        prefixCls,
        className,
        success ? `${prefixCls}-success` : '',
      )}
      style={sliderVerifyStyle}
    >
      {/* 中间文字内容 */}
      <span className={`${prefixCls}-tips`} style={verifyTipsStyle}>
        {success ? successTips : tips}
      </span>
      {/* bar滑块内容 */}
      <div className={`${prefixCls}-bar`} ref={refBar} style={barStyle}>
        {success ? successBar : bar}
      </div>
      {/* 成功后的modal背景 */}
      <div className={`${prefixCls}-modal`} style={modalStyle} />
    </div>
  );
}

const LSliderVerify = forwardRef((props: LSliderVerifyProps, ref: any) => (
  <SliderVerify {...props} outRef={ref} />
));
export default LSliderVerify;
