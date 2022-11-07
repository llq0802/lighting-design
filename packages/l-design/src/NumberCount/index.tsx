import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './index.less';

interface PropsType {
  value: number;
  count: number;
  speed?: number;
}

const Index: FC<PropsType> = ({ value, count, speed = 1 }) => {
  const valRef = useRef<any>();
  const [countValue, setCountValue] = useState<number>(value);

  const animates = useCallback(() => {
    const data = +valRef.current.innerText;
    const time = count / speed;
    if (data > count) {
      setCountValue(Math.ceil(data - time + 0.1));
      setTimeout(animates, 1);
    } else {
      setCountValue(count);
    }
  }, [count, speed]);

  const animateout = useCallback(() => {
    const data = +valRef.current.innerText;
    const time = Math.floor(count / (100 * speed));
    if (data < count) {
      setCountValue(Math.ceil(data + time));
      setTimeout(animateout, 1);
    } else {
      setCountValue(count);
    }
  }, [count, speed]);

  useEffect(() => {
    animateout();
  }, [animateout]);

  return (
    <>
      <div className="value" ref={valRef}>
        {countValue}
      </div>
    </>
  );
};
export default Index;
