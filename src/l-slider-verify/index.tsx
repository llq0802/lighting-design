import { CheckOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useControllableValue } from 'ahooks';
import { emptyObject } from 'lighting-design/constants';
import { forwardRef } from 'react';
import type { LSliderVerifyProps } from './interface';
import { useStyles } from './styles';
import useVerify from './use-verify';

function SliderVerify(props: LSliderVerifyProps & { outRef: any }) {
  const {
    outRef,

    onProcess,
    onMouseUp,

    className,
    onSuccess,
    actionRef,
    width = 400,
    barWidth = 60,
    height = 32,

    bgColor = '#F2F3F5',
    tips = '请按住滑块，拖动到最右边',
    bar = <DoubleRightOutlined />,
    barStyle: outBarStyle = emptyObject,
    tipsStyle = emptyObject,
    style: outStyle = emptyObject,

    successBgColor = '#52c41a',
    successTips = '验证已通过',
    successTipsStyle = emptyObject,
    successBar = <CheckOutlined />,

    successShowBar = true,
    difference = 0,
  } = props;
  const { cx, styles } = useStyles();

  const [value, onChange] = useControllableValue(props, {
    defaultValue: props?.defaultValue ?? false,
  });
  const success = !!value;

  // width - barWidth  = tips的width
  const { isMove, barLeft, modalWidth, refBar } = useVerify({
    onProcess,
    onMouseUp,
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
    transform: `translateX(${success && !successShowBar ? width + 2 : barLeft}px)`,
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
    <div ref={outRef} className={cx(styles.container, className)} style={sliderVerifyStyle}>
      {/* 中间文字内容 */}
      <span className={styles.tips} style={verifyTipsStyle}>
        {success ? successTips : tips}
      </span>
      {/* bar滑块内容 */}
      <div className={styles.bar} ref={refBar} style={barStyle}>
        {success ? successBar : bar}
      </div>
      {/* 成功后的modal背景 */}
      <div className={styles.modal} style={modalStyle} />
    </div>
  );
}

const LSliderVerify = forwardRef((props: LSliderVerifyProps, ref: any) => <SliderVerify {...props} outRef={ref} />);
export default LSliderVerify;
export * from './interface';
