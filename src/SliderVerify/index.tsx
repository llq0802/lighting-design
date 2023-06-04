import { CheckOutlined, DoubleRightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import React, { forwardRef } from 'react';
import './index.less';
import useVerify from './useVerify';

interface SliderVerifyProps {
  /** 验证结果值  */
  value?: boolean;
  /** 移动改变的回调 */
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
  // 滑块外层div的宽度
  barWidth?: number;
  /** 滑块内容 */
  bar?: React.ReactNode;
  /** 成功后滑块内容 */
  successBar?: React.ReactNode;
  /** 成功后的背景颜色 */
  successBgColor?: string;
  /** 成功后提示的文字 */
  successTips?: React.ReactNode;
  /** 成功后是否还显示bar */
  successShowBar?: boolean;
  /** 距离最右边还剩多少就算成功 */
  difference?: number;
}

export type LSliderVerifyInstance = {
  /** 重置组件到初始状态 */
  reset: () => void;
};

export interface LSliderVerifyProps extends SliderVerifyProps {
  /** */
  actionRef?: React.MutableRefObject<LSliderVerifyInstance | undefined>;
}

const prefixCls = 'lightd-slider-verify';

function SliderVerify(props: LSliderVerifyProps) {
  const {
    value = false,
    onChange,
    onSuccess,
    actionRef,
    width = 400,
    barWidth = 60,
    height = 32,
    bgColor = '#F2F3F5',
    tips = '请按住滑块，拖动到最右边',
    successBgColor = '#51c421',
    successTips = '验证已通过',
    bar = <DoubleRightOutlined />,
    successBar = <CheckOutlined />,
    successShowBar = true,
    difference = 0,
  } = props;

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
    backgroundColor: bgColor,
    width: `${width}px`,
    height: `${height}px`,
  };

  const barStyle = {
    width: `${barWidth}px`,
    transitionDuration: !isMove ? '.3s' : '0s',
    transform: `translateX(${
      success && !successShowBar ? width + 2 : barLeft
    }px)`,
  };

  const verifyTipsStyle = {
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
      className={classnames(prefixCls, success ? `${prefixCls}-success` : '')}
      style={sliderVerifyStyle}
    >
      {/* 中间文字 */}
      <span className={`${prefixCls}-tips`} style={verifyTipsStyle}>
        {success ? successTips : tips}
      </span>
      {/* bar滑块 */}
      <div className={`${prefixCls}-bar`} ref={refBar} style={barStyle}>
        {success ? successBar : bar}
      </div>
      {/* 成功后的modal */}
      <div className={`${prefixCls}-modal`} style={modalStyle} />
    </div>
  );
}

const LSliderVerify = forwardRef((props: LSliderVerifyProps, ref: any) => (
  <SliderVerify {...props} actionRef={ref} />
));
export default LSliderVerify;
