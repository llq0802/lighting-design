import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, theme } from 'antd';
import classnames from 'classnames';
import { transformChangeValue, transformValue } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
import './index.less';
import type { LCardGroupProps } from './interface';

const { useToken } = theme;

const prefixCls = 'lightd-card-group';

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

  const [val, onChange] = useControllableValue(props, {
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

  const handleSelect = useMemoizedFn((item: any) => {
    // 禁用和只读不处理
    if (item.disabled || disabled) {
      return;
    }

    if (multiple && Array.isArray(value)) {
      // 多选
      if (value?.includes?.(item[valueKey])) {
        triggerChange(value?.filter((v) => v !== item[valueKey]));
      } else {
        triggerChange([...(value || emptyArray), item[valueKey]]);
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
        const isActive =
          multiple && Array.isArray(value)
            ? value?.includes(item[valueKey])
            : value === item[valueKey];
        return (
          <Card
            {...item?.cardProps}
            key={item[valueKey] ?? i}
            className={classnames(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-disabled`]: item.disabled,
                [`${prefixCls}-item-active`]:
                  multiple && Array.isArray(value)
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
              ...(isActive ? activeStyle : emptyObject),
            }}
            bodyStyle={{
              ...cardBodyStyle,
              ...item?.cardProps?.bodyStyle,
            }}
          >
            {item[labelKey] ?? item[valueKey]}
          </Card>
        );
      })}
    </div>
  );
}
