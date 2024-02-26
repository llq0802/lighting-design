import { useDebounceFn, useEventListener, useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import { isNumber } from 'lighting-design/_utils';
import type { DOMAttributes, ReactElement, ReactNode } from 'react';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import DataChildren, { NumberRoll_DaterArray } from './components/DataChildren';
import ItemChildren, { NumberRoll_NumberArray } from './components/ItemChildren';
import './index.less';
import type { LNumberRollActionRef, LNumberRollProps } from './interface';

const prefixCls = 'lightd-number-roll';

const LNumberRoll = (
  {
    className,
    style,
    itemNumStyle,
    itemCharStyle,
    symbolStyle,
    height = 36,
    fontSize = 36,
    type = 'number',
    minLength = 1,
    speed = 600,
    value = 0,
    symbol = '',
    dot = 0,
    scale = 1,
    onFinish,
  }: Partial<LNumberRollProps>,
  ref: LNumberRollActionRef,
) => {
  const domRef = useRef<HTMLDivElement>(null);

  const getNumDom = useMemoizedFn((newStr: string[]): ReactElement<DOMAttributes<ReactNode>> => {
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
          // 分隔符
          numberDom.push((key: React.Key | null | undefined) => (
            <div className={`${prefixCls}-animate-dot`} key={key}>
              <span className={`${prefixCls}-animate-dot-span`} style={symbolStyle}>
                {symbol}
              </span>
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
          // 分隔符
          numberDom.push((key: React.Key | null | undefined) => (
            <div className={`${prefixCls}-animate-dot`} key={key}>
              <span className={`${prefixCls}-animate-dot-span`} style={symbolStyle}>
                {symbol}
              </span>
            </div>
          ));
        }
      }

      if (type === 'date') {
        numberDom.push((key: React.Key) => (
          <DataChildren
            num={o}
            key={key}
            index={key}
            itemNumStyle={itemNumStyle}
            itemCharStyle={itemCharStyle}
          />
        ));
      } else {
        numberDom.push((key: React.Key) => (
          <ItemChildren
            num={o}
            key={key}
            index={key}
            itemNumStyle={itemNumStyle}
            itemCharStyle={itemCharStyle}
          />
        ));
      }
    });
    return (
      <div
        className={`${prefixCls}-animate`}
        style={{
          transform: `scale(${scale})`,
          // @ts-ignore
          [`--${prefixCls}-height`]: typeof height === 'number' ? `${height}px` : height,
          [`--${prefixCls}-font-size`]: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
        }}
      >
        {numberDom.map((item, index: number) => item(index))}
      </div>
    );
  });

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
        console.error(error);
      }
    }
    // 拼接最小位数(个位数起)
    const integer = newStr.join('').indexOf('.'); // 整数位数

    if (minLength > 1 && minLength < val.toString().lenght && minLength > integer) {
      for (let i = 0; i < minLength - integer; i++) {
        newStr.unshift('0');
      }
    }
    return newStr;
  });

  // 设置动画number类型
  const loadAnimateNumer = useMemoizedFn(() => {
    const domList = domRef.current!.querySelectorAll(`.${prefixCls}-animate-dom`);
    if (!domList) return;
    for (const itemDom of [...(domList as any)]) {
      const dataNum = itemDom.getAttribute('data-num') || 0;
      const _itemheight = +(itemDom.offsetHeight / NumberRoll_NumberArray.length).toFixed(1);
      const itemStyle = itemDom.style;
      const y = dataNum === '.' ? -10 * _itemheight : -dataNum * _itemheight;
      itemStyle.transform = `translateY(${y}px)`;
      itemStyle.transition = `${!isNumber(dataNum) ? 0 : speed / 1000}s`;
    }
  });

  // 设置动画date类型
  const loadAnimateDate = useMemoizedFn(() => {
    const domList = domRef.current!.querySelectorAll(`.${prefixCls}-animate-dom`);
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
          : dataNum === '/'
          ? -13 * _height
          : -dataNum * _height;

      itemStyle.transform = `translateY(${y}px)`;
      itemStyle.transition = `${!isNumber(dataNum) ? 0 : speed / 1000}s`;
    }
  });

  const onLoadAnimate = useMemoizedFn(() => {
    if (type === 'number') {
      loadAnimateNumer();
    } else if (type === 'date') {
      loadAnimateDate();
    }
  });

  useImperativeHandle(ref, () => ({ loadAnimate: onLoadAnimate, rootRef: domRef }));

  // 更新
  useEffect(() => {
    onLoadAnimate();
    let timer: NodeJS.Timeout;
    if (onFinish) {
      timer = setTimeout(() => {
        onFinish?.(value);
        clearTimeout(timer);
      }, speed);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  const { run: onresize } = useDebounceFn(onLoadAnimate, { wait: 500 });
  useEventListener('resize', onresize);

  return (
    <div className={classnames(prefixCls, className)} style={style} ref={domRef}>
      {getNumDom(type === 'date' ? String(value).split('') : valToArr(value))}
    </div>
  );
};

export default forwardRef(LNumberRoll);
export * from './interface';
