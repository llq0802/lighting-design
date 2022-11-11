/* eslint-disable react-hooks/exhaustive-deps */
import type { DOMAttributes, FC, ReactElement, ReactNode } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';
import type { Container } from 'react-dom';
import { render } from 'react-dom';
import DataChildren from './components/dataChildren';
import ItemChildren from './components/itemChildren';
import './index.less';

interface NumberRollPropsType {
  /**
   * 默认值
   */
  value: number | string;
  /**
   * 最小位数（个位数起）
   */
  minLength: number;
  /**
   * 分割符号（禁用 "."） 1,000,000,000
   */
  symbol: string;
  /**
   * 动画速度 ms
   */
  speed: number;
  /**
   * 保留几位小数
   */
  dot: number;
  /**
   * 类型
   */
  type: 'number' | 'date';
  /**
   * 缩放大小
   */
  scale: number;
  /**
   * 样式
   */
  style: React.CSSProperties;
  /**
   * 类名
   */
  className: string;
}
export const prefixCls = 'lightd-numberRoll';

export const NumberRoll_NumberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
export const NumberRoll_DaterArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ':',
  ' ',
  '-',
];
const Index: FC<Partial<NumberRollPropsType>> = ({
  className = '',
  style,
  type = 'number',
  minLength = 1,
  speed = 500,
  value = 0,
  symbol = '',
  dot = 0,
  scale = 1,
}) => {
  const domRef = useRef<HTMLDivElement | Container | any>(null);
  const setNumDom = useCallback((newStr: string[]): ReactElement<DOMAttributes<ReactNode>> => {
    const numberDom: any[] = []; // 整数位数
    const decimal = newStr.length - newStr.join('').indexOf('.'); // 小数位数
    newStr.forEach((o, i) => {
      // 设置分隔符 不是第0个，必须整数，整数三的余数，必须有分隔符，分隔符不能为"."，不是小数点"."
      if (
        i != 0 &&
        i <= newStr.length - decimal &&
        (newStr.length - decimal - i) % 3 == 0 &&
        symbol != '' &&
        symbol != '.' &&
        o != '.'
      ) {
        numberDom.push((key: React.Key | null | undefined) => (
          <div className={`${prefixCls}-animate-dot`} key={key}>
            <span>{symbol}</span>
          </div>
        ));
      }
      if (type === 'date') {
        numberDom.push((key: React.Key) => <DataChildren num={o} key={key} />);
      } else {
        numberDom.push((key: React.Key) => <ItemChildren num={o} key={key} />);
      }
    });
    return (
      <div className={`${prefixCls}-animate`} style={{ transform:`scale(${scale})` }}>
        {numberDom.map((item, index: number) => item(index))}
      </div>
    );
  }, []);

  // 将数字转换为数组，如果有最小位数则往前拼接“0”
  const valToArr = useCallback((val: number | any): string[] => {
    const newVal: string = val.toString();
    let newStr: string[] = [];
    if (newVal.includes('.')) {
      newStr = newVal.split('');
      const decimal = newVal.length - 1 - newVal.indexOf('.'); // 小数位数
      if (dot && decimal !== dot) {
        // 大于则减去相差值，小于则添加差值个"0"
        if (decimal > dot) {
          newStr.length = newStr.length - (decimal - dot);
        } else {
          for (let i = 0; i < dot - decimal; i++) {
            newStr.push('0');
          }
        }
      }
    } else {
      try {
        newStr = val.toFixed(dot).split('');
      } catch (error) {
        console.error(error);
      }
    }

    // 拼接最小位数(个位数起)
    const integer = newStr.join('').indexOf('.'); // 整数位数
    if (minLength > 1 && minLength !== integer && minLength > integer) {
      for (let i = 0; i < minLength - integer; i++) {
        newStr.unshift('0');
      }
    }
    return newStr;
  }, []);

  // 设置动画
  const loadAnimate = useCallback(($parent: any) => {
    const $dom = $parent.querySelectorAll(`.${prefixCls}-animate-dom`);
    for (const o of $dom) {
      const dataNum = o.getAttribute('data-num') || 0;
      const _height = o.offsetHeight / NumberRoll_NumberArray.length;
      o.style.transform =
        'translateY(' + (dataNum == '.' ? -10 * _height : -dataNum * _height) + 'px)';
      o.style.transition = (dataNum == '.' ? 0 : speed / 1000) + 's';
    }
  }, []);

  // 设置动画
  const loadAnimateDate = useCallback(($parent: any) => {
    const $dom = $parent.querySelectorAll(`.${prefixCls}-animate-dom`);
    for (const o of $dom) {
      const dataNum = o.getAttribute('data-num') || 0;
      const _height = o.offsetHeight / NumberRoll_DaterArray.length;
      o.style.transform =
        'translateY(' +
        (dataNum == ':'
          ? -10 * _height
          : dataNum == ' '
          ? -11 * _height
          : dataNum == '-'
          ? -12 * _height
          : -dataNum * _height) +
        'px)';
      o.style.transition = (dataNum == ':' || dataNum == ' ' ? 0 : speed / 1000) + 's';
    }
  }, []);

  // 更新设置
  const update = useCallback((valNum: number | any) => {
    const newArr = valToArr(valNum),
      $dom = domRef.current.querySelectorAll(`.${prefixCls}-animate-dom`);
    if ($dom.length != newArr.length) {
      render(setNumDom(valToArr(valNum)), domRef.current, () => {
        loadAnimate(domRef.current);
      });
    } else {
      $dom.forEach((o: any, i: number) => {
        o.setAttribute('data-num', newArr[i]);
      });
      loadAnimate(domRef.current);
    }
  }, []);

  // number类型判断
  const errorTypeNumber = () => {
    if (typeof value !== 'number') throw new Error('type of value must be number');
    if (isNaN(value) && !value) throw new Error('Number type value cannot be undefined');
    if (value < 0) throw new Error('value cannot be negative');
  };

  // 更新
  useEffect(() => {
    switch (type) {
      case 'number':
        errorTypeNumber();
        if (value) update(value);
        break;
      case 'date':
        if (typeof value !== 'string') throw new Error('Type is "date", value type must be string');
        render(setNumDom(value.split('')), domRef.current, () => {
          loadAnimateDate(domRef.current);
        });
        break;
    }
  }, [value]);

  useEffect((): any => {
    if (type === 'number') {
      errorTypeNumber();
      render(setNumDom(valToArr(value)), domRef.current, () => {
        loadAnimate(domRef.current);
      });
    }
  }, []);

  return (
    <>
      <div className={`${prefixCls} ${className}`} style={style} ref={domRef} />
    </>
  );
};
export default Index;
