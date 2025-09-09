import { isNumber } from 'lighting-design/utils';
import type { FC } from 'react';
import { useStyles } from '../styles';

export const NumberRoll_DaterArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', '.', '-', ' '];

interface PropsType {
  num: string;
  itemNumStyle?: React.CSSProperties;
  itemCharStyle?: React.CSSProperties;
  index?: number;
}
const DateItem: FC<PropsType> = ({ num, index, itemNumStyle, itemCharStyle }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.body)} data-num={num}>
      {NumberRoll_DaterArray.map((item, i) => (
        <span
          key={i}
          data-index={index}
          data-value={item}
          className={cx(styles.item)}
          style={{
            ...itemNumStyle,
            ...(!isNumber(item) ? itemCharStyle : {}),
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default DateItem;
