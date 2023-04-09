import { Card, CardProps } from 'antd';
import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.less';

type ValueType = Array<string | number> | string | number | undefined;

export type LCardGroupOptions = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  /** 卡片样式 */
  cardProps?: CardProps;
};

export interface LCardGroupProps {
  value?: any;
  onChange?: (values: ValueType) => void;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 选项 */
  options?: Array<LCardGroupOptions>;
  /** 是否禁用全部 */
  disabled?: boolean;
  /** 是否可以取消 */
  cancelable: boolean;
  className?: string;
  gap?: number;
  style?: CSSProperties;
}

const prefixCls = 'lightd-card-group';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    value = [],
    onChange,
    options = [],
    multiple = false,
    cancelable = false,
    disabled = false,
    className,
    style,
    gap = 10,
  } = props;
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

    if (multiple && Array.isArray(value)) {
      // 多选
      if (value.includes(itemCard.value)) {
        triggerChange(value.filter((v) => v !== itemCard.value));
      } else {
        triggerChange([...value, itemCard.value]);
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
      {options.map((item) => (
        <Card
          className={classNames(
            `${prefixCls}-item`,
            item.disabled && `${prefixCls}-item-disabled`,
            (multiple ? value.includes(item.value) : value === item.value) &&
              `${prefixCls}-item-active`,
          )}
          key={item.value}
          onClick={() => handleSelect(item)}
          style={{
            ...item.cardProps,
          }}
        >
          {item.label}
        </Card>
      ))}
    </div>
  );
}
