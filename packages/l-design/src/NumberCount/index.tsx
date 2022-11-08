import type { DOMAttributes, FC, ReactElement, ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import type { Container } from 'react-dom';
import { render } from 'react-dom';
import './index.less';
import ItemChren from './item';

interface NumberCountPropsType {
  /**
   * 默认值
   */
  value: number;
  /**
   *  默认最小位数
   */
  minLength?: number;
  /**
   * 默认的分割符号，千，万，千万
   */
  symbol?: number;
  /**
   * 动画速度 1s
   */
  speed?: number;
  /**
   * //保留几位小数点
   */
  dot?: number;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
}

const Index: FC<NumberCountPropsType> = ({
  className,
  style,
  minLength,
  speed = 1000,
  value = 100,
  symbol = '',
  dot = 0,
}) => {
  const domRef = useRef<HTMLDivElement | Container | any>(null);
  const setNumDom = (newStr: string[]): ReactElement<DOMAttributes<ReactNode>> => {
    const numberDom: any[] = [];
    newStr.forEach((o, i) => {
      // 设置分隔符 不是第0个，三的余数，必须有分隔符，不是小数点"."
      if (i != 0 && (newStr.length - i) % 3 == 0 && symbol != '' && o != '.') {
        numberDom.push((key: React.Key | null | undefined) => (
          <div className="number-animate-dot" key={key}>
            <span>{symbol}</span>
          </div>
        ));
      } else {
        numberDom.push((key: React.Key | null | undefined) => <ItemChren num={o} key={key} />);
      }
    });
    return <div className="number-animate">{numberDom.map((item, key: number) => item(key))}</div>;
  };

  // 将数字转换为数组，如果有最小位数则往前拼接“0”
  const valToArr = (val: number): string[] => {
    const newStr = val.toFixed(dot).toString().split('');
    // 拼接最小位数
    if (newStr.length <= minLength) {
      for (let i = 0; i < minLength - newStr.length; i++) {
        newStr.unshift('0');
      }
    }
    return newStr;
  };

  // 执行动画
  const loadAnimate = ($parent: any) => {
    const $dom = $parent.querySelectorAll('.number-animate-dom');
    for (const o of $dom) {
      const dataNum = o.getAttribute('data-num') || 0;
      const _height = o.offsetHeight / 12;
      o.style.transform =
        'translateY(' + (dataNum == '.' ? -11 * _height : -dataNum * _height) + 'px)';
      o.style.transition = (dataNum == '.' ? 0 : speed / 1000) + 's';
    }
  };

  const update = (valNum: number) => {
    const newArr = valToArr(valNum),
      $dom = domRef.current.querySelectorAll('.number-animate-dom');
    if ($dom.length != newArr.length) {
      render(setNumDom(valToArr(valNum)), domRef.current, () => {
        loadAnimate(domRef.current);
      });
    } else {
      $dom.forEach((o, i: number) => {
        o.setAttribute('data-num', newArr[i]);
      });
      loadAnimate(domRef.current);
    }
  };

  const load = () => {
    render(setNumDom(valToArr(value)), domRef.current, () => {
      loadAnimate(domRef.current);
    });
  };

  useEffect(() => {
    if (value) update(value);
  }, [value]);

  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <div className={className} style={style}>
        <div className="Odometer" ref={domRef} />
      </div>
    </>
  );
};
export default Index;
