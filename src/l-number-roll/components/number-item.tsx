import { isNumber } from 'lighting-design/utils';
import type { FC } from 'react';
import { useStyles } from '../styles';

export const NumberRoll_NumberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

interface PropsType {
  num: string;
  index?: number;
  itemNumStyle?: React.CSSProperties;
  itemCharStyle?: React.CSSProperties;
}
const NumberItem: FC<PropsType> = ({ num, index, itemNumStyle, itemCharStyle }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.body)} data-num={num}>
      {NumberRoll_NumberArray.map((item, i) => (
        <span
          data-index={index}
          data-value={item}
          key={i}
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
export default NumberItem;
