import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './index.less';

interface NumberCountPropsType {
  /**
   * 默认值
   */
  value: number;
  /**
   *  总数
   */
  count: number;
  /**
   *  时间/秒 1s
   */
  speed?: number;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
}

const Index: FC<NumberCountPropsType> = ({ value = 0, count = 0, speed = 1, className, style }) => {
  const valRef = useRef<any>(null);
  const [countValue, setCountValue] = useState<number>(value);

  // 小变大 value < count
  const animates = useCallback(() => {
    const data = +valRef.current?.innerText;
    const time = data / (speed * 100);
    if (data > count && time > data) {
      console.log(data, count);
      setCountValue(Math.ceil(data - time));
      setTimeout(animates, 1);
    } else {
      setCountValue(count);
    }
  }, [count, speed]);

  // 大变小 value > count
  const animateout = useCallback(() => {
    const data = +valRef.current?.innerText;
    const time = Math.floor(count / (100 * speed));
    if (data < count) {
      setCountValue(Math.ceil(data + time));
      setTimeout(animateout, 1);
    } else {
      setCountValue(count);
    }
  }, [count, speed]);

  useEffect(() => {
    if (countValue === count) return;
    if (countValue > count) {
      animates();
    } else {
      animateout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <div className={className} style={style} ref={valRef}>
        {countValue}
      </div>
    </>
  );
};
export default Index;
