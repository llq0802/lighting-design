import { useDebounceFn, useEventListener } from 'ahooks';
import { Flex } from 'antd';
import { isNumber } from 'lighting-design/utils';
import type { DOMAttributes, ForwardedRef, ReactElement, ReactNode } from 'react';
import { forwardRef, useLayoutEffect, useRef } from 'react';
import DateItem from './components/date-item';
import NumberItem from './components/number-item';
import type { LNumberRollProps } from './interface';
import { useStyles } from './styles';

const LNumberRoll = (
  {
    rootClassName,
    rootStyle,
    className,
    style,
    itemNumStyle,
    itemCharStyle,
    gap = 0,
    fontSize = 36,
    type = 'number',
    scale = 1,
    speed = 500,
    value = 0,
    onFinish,
  }: LNumberRollProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { styles, cx } = useStyles();
  const domRef = useRef<HTMLDivElement>(null!);

  const renderDom = (newStr: string[]): ReactElement<DOMAttributes<ReactNode>> => {
    const numberDom: ReactElement[] = [];
    newStr.forEach((char, index) => {
      if (type === 'date') {
        numberDom.push(
          <DateItem num={char} key={index} index={index} itemNumStyle={itemNumStyle} itemCharStyle={itemCharStyle} />,
        );
      } else {
        numberDom.push(
          <NumberItem num={char} key={index} index={index} itemNumStyle={itemNumStyle} itemCharStyle={itemCharStyle} />,
        );
      }
    });
    return (
      <Flex
        className={cx(styles.content, className)}
        style={{ height: fontSize, fontSize: fontSize, transform: `scale(${scale})`, ...style }}
        gap={gap}
      >
        {numberDom}
      </Flex>
    );
  };

  // 设置动画date类型
  const loadAnimate = () => {
    const dataNumDoms = [...(domRef.current!.querySelectorAll(`[data-num]`) || [])] as HTMLElement[];
    for (const itemDom of dataNumDoms) {
      const dataNum = itemDom.getAttribute('data-num');
      const itemheight = +itemDom.offsetHeight;
      const dataValueDoms = itemDom.querySelectorAll(`[data-value]`);
      const index = [...dataValueDoms].findIndex((v) => v.getAttribute('data-value') === dataNum);
      if (index >= 0) {
        const itemStyle = itemDom.style;
        const y = -index * itemheight;
        itemStyle.transform = `translateY(${y}px)`;
        itemStyle.transition = `all ${!isNumber(dataNum) ? 0 : speed / 1000}s`;
      } else {
        const d = dataValueDoms[0] as HTMLElement;
        d.textContent = dataNum;
      }
    }
  };

  // 更新
  useLayoutEffect(() => {
    loadAnimate();
    let timer: NodeJS.Timeout;
    if (onFinish) {
      timer = setTimeout(() => {
        onFinish(value);
        clearTimeout(timer);
      }, speed);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value, speed, onFinish, type]);

  const { run: onresize } = useDebounceFn(loadAnimate, { wait: 500 });
  useEventListener('resize', onresize);

  return (
    <div
      className={cx(styles.container, rootClassName)}
      style={rootStyle}
      ref={(r) => {
        if (!r) return;
        domRef.current = r;
        if (ref && ref?.current) {
          ref.current = r;
        }
      }}
    >
      {renderDom(String(value).split(''))}
    </div>
  );
};

export default forwardRef(LNumberRoll);
export * from './interface';
