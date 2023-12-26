import { useControllableValue, useMemoizedFn } from 'ahooks';
import type { CardProps } from 'antd';
import { Card, theme } from 'antd';
import classnames from 'classnames';
import { transformChangeValue, transformValue } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo, type CSSProperties, type ReactNode } from 'react';
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
  /**
   *是否把每个选项的 label 包装到 value 中，会把  value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  labelInValue?: boolean;
  /**
   *默认值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  defaultValue?: ValueType;
  /**
   *受控值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  value?: ValueType;
  /**
   *值发生变化时出发
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  onChange?: (values: ValueType) => void;
  /**
   * 是否支持多选
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  multiple?: boolean;
  /**
   * 数据选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  options?: LCardGroupOptions[];
  /**
   * 是否禁用全部
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  disabled?: boolean;
  /**
   * 再次点击是否可以取消
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cancelable?: boolean;
  /**
   * 卡片之间的间隔
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  gap?: number;
  /**
   *类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  className?: string;
  /**
   *样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  style?: CSSProperties;
  /**
   * 卡片的样式  比每一项中的 cardProps.bodyStyle 优先级高
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   * */
  cardBodyStyle?: CSSProperties;
  /**
   * 卡片的样式  比每一项中的cardProps.style优先级高
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cardStyle?: CSSProperties;
  /**
   * 选中卡片的样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  activeStyle?: CSSProperties;
}

const prefixCls = 'lightd-card-group';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    options = emptyArray,
    multiple = false,
    labelInValue = false,
    cancelable = false,
    disabled = false,
    gap = 8,
    className,
    style,
    cardBodyStyle = emptyObject,
    cardStyle = emptyObject,
    activeStyle = emptyObject,
  } = props;

  const { token } = useToken();

  const [val, onChange] = useControllableValue<ValueType>(props, {
    defaultValue: props?.defaultValue || multiple ? emptyArray : void 0,
  });
  const value = useMemo(
    () => transformValue({ value: val, multiple, labelInValue }),
    [val, multiple, labelInValue],
  );

  if (disabled) {
    options?.forEach((item) => {
      item.disabled = true;
    });
  }

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({ value, multiple, labelInValue, options });
    onChange?.(val);
  });

  const handleSelect = useMemoizedFn((itemCard: any) => {
    // 禁用和只读不处理
    if (itemCard.disabled || disabled) {
      return;
    }

    if (multiple && Array.isArray(value)) {
      // 多选
      if (value?.includes?.(itemCard.value)) {
        triggerChange(value?.filter((v) => v !== itemCard.value));
      } else {
        triggerChange([...(value || emptyArray), itemCard.value]);
      }
    } else {
      // 单选
      if (itemCard.value === value) {
        if (cancelable) {
          triggerChange(void 0);
        }
      } else {
        triggerChange(itemCard.value);
      }
    }
  });

  return (
    <div
      className={classnames(
        prefixCls,
        {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-multiple`]: multiple,
        },
        className,
      )}
      style={{ gap, ...style }}
    >
      {options.map((item, i) => {
        const isActive =
          multiple && Array.isArray(value) ? value?.includes(item.value) : value === item.value;
        return (
          <Card
            {...item?.cardProps}
            className={classnames(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-disabled`]: item.disabled,
                [`${prefixCls}-item-active`]:
                  multiple && Array.isArray(value)
                    ? value?.includes(item.value)
                    : value === item.value,
              },
              item.cardProps?.className,
            )}
            key={item.value ?? i}
            onClick={(e) => {
              handleSelect(item);
              item.cardProps?.onClick?.(e);
            }}
            style={{
              borderColor: isActive ? token.colorPrimary : void 0,
              ...cardStyle,
              ...item.cardProps?.style,
              ...(isActive ? activeStyle : emptyObject),
            }}
            bodyStyle={{
              ...cardBodyStyle,
              ...item?.cardProps?.bodyStyle,
            }}
          >
            {item.label ?? item.value}
          </Card>
        );
      })}
    </div>
  );
}
