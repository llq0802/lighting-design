import { useControllableValue } from 'ahooks';
import type { CardProps } from 'antd';
import { Card, theme } from 'antd';
import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import './index.less';

const { useToken } = theme;

export type ValueType = Array<string | number> | string | number | undefined;

export type LCardGroupOptions = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  /** 卡片属性 */
  cardProps?: CardProps;
};

export interface LCardGroupProps {
  defaultValue?: ValueType;
  value?: ValueType;
  onChange?: (values: ValueType) => void;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 选项 */
  options?: LCardGroupOptions[];
  /** 是否禁用全部 */
  disabled?: boolean;
  /** 是否可以取消 */
  cancelable?: boolean;
  /** 卡片之间的间隔 */
  gap?: number;
  className?: string;
  style?: CSSProperties;
  /** 卡片的样式  比每一项中的cardProps.bodyStyle优先级高*/
  cardBodyStyle?: CSSProperties;
  /** 卡片的样式  比每一项中的cardProps.style优先级高*/
  cardStyle?: CSSProperties;
  /** 选中卡片的样式 */
  activeStyle?: CSSProperties;
}

const prefixCls = 'lightd-card-group';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    options = [],
    multiple = false,
    cancelable = false,
    disabled = false,
    gap = 8,
    className,
    style,
    cardBodyStyle = {},
    cardStyle = {},
    activeStyle = {},
  } = props;

  const { token } = useToken();

  const [value, onChange] = useControllableValue<ValueType>(props, {
    defaultValue: multiple ? [] : void 0,
  });

  if (disabled) {
    options?.forEach((item) => {
      item.disabled = true;
    });
  }

  const triggerChange = (value: any) => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleSelect = (itemCard: any) => {
    // 禁用和只读不处理
    if (itemCard.disabled || disabled) {
      return;
    }

    if (multiple) {
      // 多选
      if (value?.includes(itemCard.value)) {
        triggerChange(value?.filter((v) => v !== itemCard.value));
      } else {
        triggerChange([...(value || []), itemCard.value]);
      }
    } else {
      // 单选
      if (itemCard.value === value) {
        if (cancelable) {
          triggerChange([]);
        }
      } else {
        triggerChange(itemCard.value);
      }
    }
  };

  return (
    <div
      className={classNames(
        prefixCls,
        disabled && `${prefixCls}-disabled`,
        multiple && `${prefixCls}-multiple`,
        className,
      )}
      style={{ gap, ...style }}
    >
      {options.map((item, i) => {
        const isActive = multiple
          ? value?.includes(item.value)
          : value === item.value;
        return (
          <Card
            {...item.cardProps}
            className={classNames(
              `${prefixCls}-item`,
              item.disabled && `${prefixCls}-item-disabled`,
              (multiple ? value?.includes(item.value) : value === item.value) &&
                `${prefixCls}-item-active`,

              item.cardProps?.className,
            )}
            key={item.value ?? i}
            onClick={(e) => {
              handleSelect(item);
              item.cardProps?.onClick?.(e);
            }}
            style={{
              borderColor: isActive ? token.colorPrimary : void 0,
              ...item.cardProps?.style,
              ...cardStyle,
              ...(isActive ? activeStyle : {}),
            }}
            bodyStyle={{
              ...item?.cardProps?.bodyStyle,
              ...cardBodyStyle,
            }}
          >
            {item.label}
          </Card>
        );
      })}
    </div>
  );
}
