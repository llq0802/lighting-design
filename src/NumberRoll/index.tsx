import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import type {
  CSSProperties,
  DOMAttributes,
  FC,
  ReactElement,
  ReactNode,
} from 'react';
import React, { useEffect, useRef } from 'react';
import DataChildren, { NumberRoll_DaterArray } from './components/DataChildren';
import ItemChildren, {
  NumberRoll_NumberArray,
} from './components/ItemChildren';
import './index.less';

export interface LNumberRollProps {
  /**
   * 组件高度
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number | string}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.24
   */
  height: number | string;
  /**
   * 默认值
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number | string}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.24
   */
  value: number | string;
  /**
   * 最小位数（个位数起）
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.24
   **/
  minLength: number;
  /**
   * 分割符号（禁用 "."） 1,000,000,000
   */
  symbol: string;
  /**
   * 动画速度 ms
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   * */
  speed: number;
  /**
   * 保留几位小数
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  dot: number;
  /**
   * 组件的类型
   *@author 李岚清 <https://github.com/llq0802>
   *@type {'number' | 'date' }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  type: 'number' | 'date';
  /**
   * 缩放大小
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  scale: number;
  /**
   * 样式
   *@author 李岚清 <https://github.com/llq0802>
   *@type {React.CSSProperties }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  style: CSSProperties;
  /**
   * 类名
   *@author 李岚清 <https://github.com/llq0802>
   *@type {string }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  className: string;
  /**
   * 动画结束的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@type { (value: number | string) => void }
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  onFinish: (value: number | string) => void;
}
const prefixCls = 'lightd-number-roll';

const LNumberRoll: FC<Partial<LNumberRollProps>> = ({
  className,
  style,
  height = 45,
  type = 'number',
  minLength = 1,
  speed = 500,
  value = 0,
  symbol = '',
  dot = 0,
  scale = 1,
  onFinish,
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  const getNumDom = useMemoizedFn(
    (newStr: string[]): ReactElement<DOMAttributes<ReactNode>> => {
      const decimalFlag = newStr.join('').indexOf('.') === -1; // 判断是否没有小数
      const decimal = newStr.length - newStr.join('').indexOf('.'); // 小数位数
      const numberDom: any[] = []; // 整数位数
      newStr.forEach((o, i) => {
        if (decimalFlag) {
          // 设置分隔符 不是第0个，整数三的余数，必须有分隔符，分隔符不能为"."，不是小数点"."
          if (
            i !== 0 &&
            (newStr.length - i) % 3 === 0 &&
            symbol !== '' &&
            symbol !== '.' &&
            o !== '.'
          ) {
            numberDom.push((key: React.Key | null | undefined) => (
              <div className={`${prefixCls}-animate-dot`} key={key}>
                <span>{symbol}</span>
              </div>
            ));
          }
        } else {
          // 设置分隔符 不是第0个，必须整数，整数三的余数，必须有分隔符，分隔符不能为"."，不是小数点"."
          if (
            i !== 0 &&
            i <= newStr.length - decimal &&
            (newStr.length - decimal - i) % 3 === 0 &&
            symbol !== '' &&
            symbol !== '.' &&
            o !== '.'
          ) {
            numberDom.push((key: React.Key | null | undefined) => (
              <div className={`${prefixCls}-animate-dot`} key={key}>
                <span>{symbol}</span>
              </div>
            ));
          }
        }

        if (type === 'date') {
          numberDom.push((key: React.Key) => (
            <DataChildren num={o} key={key} />
          ));
        } else {
          numberDom.push((key: React.Key) => (
            <ItemChildren num={o} key={key} />
          ));
        }
      });

      return (
        <div
          className={`${prefixCls}-animate`}
          style={{ transform: `scale(${scale})`, height }}
        >
          {numberDom.map((item, index: number) => item(index))}
        </div>
      );
    },
  );

  // 将数字,字符串转换为字符串数组，如果有最小位数则往前拼接“0”
  const valToArr = useMemoizedFn((val: number | any): string[] => {
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
        // console.error(error);
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
  });

  // 设置动画number类型
  const loadAnimateNumer = useMemoizedFn(() => {
    const domList = domRef.current!.querySelectorAll(
      `.${prefixCls}-animate-dom`,
    );
    if (!domList) return;
    for (const itemDom of [...(domList as any)]) {
      const dataNum = itemDom.getAttribute('data-num') || 0;
      const _height = itemDom.offsetHeight / NumberRoll_NumberArray.length;
      const itemStyle = itemDom.style;
      const y = dataNum === '.' ? -10 * _height : -dataNum * _height;
      itemStyle.transform = `translateY(${y}px)`;
      itemStyle.transition = `${dataNum === '.' ? 0 : speed / 1000}s`;
    }
  });

  // 设置动画date类型
  const loadAnimateDate = useMemoizedFn(() => {
    const domList = domRef.current!.querySelectorAll(
      `.${prefixCls}-animate-dom`,
    );

    if (!domList) return;
    for (const itemDom of [...(domList as any)]) {
      const dataNum = itemDom.getAttribute('data-num') || 0;
      const _height = itemDom.offsetHeight / NumberRoll_DaterArray.length;
      const itemStyle = itemDom.style;
      const y =
        dataNum === ':'
          ? -10 * _height
          : dataNum === ' '
          ? -11 * _height
          : dataNum === '-'
          ? -12 * _height
          : -dataNum * _height;

      itemStyle.transform = `translateY(${y}px)`;
      itemStyle.transition = `${
        dataNum === ':' || dataNum === ' ' ? 0 : speed / 1000
      }s`;
    }
  });

  // 更新
  useEffect(() => {
    if (type === 'number') {
      loadAnimateNumer();
    } else if (type === 'date') {
      loadAnimateDate();
    }
    if (onFinish) {
      const timer = setTimeout(() => {
        onFinish?.(value);
        clearTimeout(timer);
      }, speed);
    }
  }, [value]);

  return (
    <div
      className={classnames(prefixCls, className)}
      style={style}
      ref={domRef}
    >
      {getNumDom(type === 'date' ? String(value).split('') : valToArr(value))}
    </div>
  );
};

export default LNumberRoll;
