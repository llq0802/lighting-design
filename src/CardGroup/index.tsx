import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, theme } from 'antd';
import classnames from 'classnames';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
import './index.less';
import type { LCardGroupProps } from './interface';
const { useToken } = theme;
const prefixCls = 'lightd-card-group';

/**
 * 转化单选多选组件传入的value
 */
export const transformValue = ({
  value,
  multiple,
  labelInValue,
  valueKey,
}: {
  value: any;
  multiple: boolean;
  labelInValue: boolean;
  valueKey: string;
}) => {
  if (labelInValue) {
    if (multiple) {
      return value?.map?.((item: any) => (typeof item === 'object' ? item[valueKey] : item)) ?? [];
    }
    return typeof value === 'object' ? value[valueKey] : value;
  }
  return multiple ? value || [] : value;
};
/**
 * 转化单选多选组件onChange的value
 */
export const transformChangeValue = ({
  value,
  multiple,
  labelInValue,
  valueKey,
  options,
}: {
  value: any;
  multiple: boolean;
  labelInValue: boolean;
  valueKey: string;
  options: any[];
}) => {
  if (labelInValue) {
    if (multiple) {
      return options?.filter((item) => value?.includes?.(item[valueKey]));
    }
    return options?.find((item) => item[valueKey] === value);
  }
  return value;
};

export default function LCardGroup(props: LCardGroupProps) {
  const {
    className,
    style,
    cardBodyStyle = emptyObject,
    cardStyle = emptyObject,
    activeStyle = emptyObject,
    multiple = false,
    labelInValue = false,
    cancelable = false,
    disabled = false,
    gap = 8,
    options = emptyArray,
    fieldNames = { label: 'label', value: 'value' },
  } = props;

  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };

  const { token } = useToken();

  const [val, onChange] = useControllableValue(props);
  const value = useMemo(
    () => transformValue({ value: val, multiple, labelInValue, valueKey }),
    [val],
  );

  if (disabled) {
    options?.forEach((item) => {
      item.disabled = true;
    });
  }

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({ value, multiple, labelInValue, options, valueKey });
    onChange?.(val);
  });

  const handleSelect = useMemoizedFn((item: any) => {
    // 禁用和只读不处理
    if (item.disabled || disabled) {
      return;
    }

    if (multiple) {
      // 多选
      if (value?.includes?.(item[valueKey])) {
        triggerChange(value?.filter((v: any) => v !== item[valueKey]));
      } else {
        triggerChange([...(value || []), item[valueKey]]);
      }
    } else {
      // 单选
      if (item[valueKey] === value) {
        if (cancelable) {
          triggerChange(void 0);
        }
      } else {
        triggerChange(item[valueKey]);
      }
    }
  });

  return (
    <div
      className={classnames(
        prefixCls,
        { [`${prefixCls}-disabled`]: disabled, [`${prefixCls}-multiple`]: multiple },
        className,
      )}
      style={{ gap, ...style }}
    >
      {options?.map((item, i) => {
        const isActive = multiple ? value?.includes(item[valueKey]) : value === item[valueKey];
        return (
          <Card
            {...item?.cardProps}
            key={item[valueKey] ?? i}
            className={classnames(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-disabled`]: item.disabled,
                [`${prefixCls}-item-active`]: multiple
                  ? value?.includes(item[valueKey])
                  : value === item[valueKey],
              },
              item.cardProps?.className,
            )}
            onClick={(e) => {
              handleSelect(item);
              item.cardProps?.onClick?.(e);
            }}
            style={{
              borderColor: isActive ? token.colorPrimary : void 0,
              ...cardStyle,
              ...item.cardProps?.style,
              ...(isActive ? activeStyle : {}),
            }}
            styles={{
              body: {
                ...cardBodyStyle,
                ...item?.cardProps?.bodyStyle,
              },
            }}
            // bodyStyle={{
            //   ...cardBodyStyle,
            //   ...item?.cardProps?.bodyStyle,
            // }}
          >
            {item[labelKey] ?? item[valueKey]}
          </Card>
        );
      })}
    </div>
  );
}
export * from './interface';
