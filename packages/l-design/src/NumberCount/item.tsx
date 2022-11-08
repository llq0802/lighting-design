import type { FC } from 'react';
import { useEffect } from 'react';
import './index.less';

interface PropsType {
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
  /**
   *
   */
  num: string;
  key?: React.Key | null | undefined;
}

const Index: FC<PropsType> = ({ className, style, num, key }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="number-animate-dom" data-num={num} key={key}>
        <span className="number-animate-span">0</span>
        <span className="number-animate-span">1</span>
        <span className="number-animate-span">2</span>
        <span className="number-animate-span">3</span>
        <span className="number-animate-span">4</span>
        <span className="number-animate-span">5</span>
        <span className="number-animate-span">6</span>
        <span className="number-animate-span">7</span>
        <span className="number-animate-span">8</span>
        <span className="number-animate-span">9</span>
        <span className="number-animate-span">0</span>
        <span className="number-animate-span">.</span>
      </div>
    </>
  );
};
export default Index;
