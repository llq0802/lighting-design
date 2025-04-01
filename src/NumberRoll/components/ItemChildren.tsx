import { isNumber } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useStyles } from '../styles';

export const NumberRoll_NumberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

interface PropsType {
  num: string;
  index: React.Key;
  itemNumStyle?: React.CSSProperties;
  itemCharStyle?: React.CSSProperties;
}
const prefixCls = 'lightd-number-roll';
const ItemChildren: FC<PropsType> = ({ num, itemNumStyle, itemCharStyle }) => {
  const { styles, cx } = useStyles();

  const numStyle = itemNumStyle || {};
  return (
    <div className={cx(styles.body)} data-num={num}>
      {NumberRoll_NumberArray.map((item, i) => (
        <span
          key={i}
          className={cx(styles.item, !isNumber(item) ? `${prefixCls}-animate-dom-span-char` : '')}
          style={{
            ...numStyle,
            ...(!isNumber(item) ? itemCharStyle : {}),
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default ItemChildren;
