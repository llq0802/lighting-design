import { DoubleRightOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import React, { useRef } from 'react';
import { useGetImg } from './hooks/use-get-img';
import { useStyles } from './styles';

type PropsType = {
  className?: string;
  style?: React.CSSProperties;
  requestImg: Parameters<typeof useGetImg>[0];
};

const TiannaiCaptcha: React.FC<PropsType> = ({ className, style, requestImg }) => {
  const { data: imgData, loading: imgLoading, refresh: refreshImg } = useGetImg(requestImg);
  const { cx, styles } = useStyles();
  console.log('===styles==>', styles);
  const ref = useRef<HTMLDivElement>(null);
  const [states, setStates] = useSetState({ time: 0, showTips: false });

  return (
    <div className={cx(styles.container, className)} style={style}>
      <div className={cx(styles.content)}>
        <img className={styles.big_img} alt="big-bg" draggable={false} src={imgData?.backgroundImage} />
        <img className={styles.small_img} alt="small-bg" draggable={false} src={imgData?.templateImage} />
        <div></div>
      </div>

      <div>
        <div />
        <div />
        <div ref={ref}>
          <DoubleRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default TiannaiCaptcha;
