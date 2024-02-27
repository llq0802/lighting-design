import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, theme } from 'antd';
import classnames from 'classnames';
import { isAntdVersionMoreThan514 } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
import './index.less';
import type { LCardGroupProps } from './interface';
import { transformChangeValue, transformValue } from './utils';
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
        const cardProps = item.cardProps || {};
        const compatibilityStyle = isAntdVersionMoreThan514
          ? {
              styles: {
                ...cardProps?.styles,
                body: {
                  ...cardBodyStyle,
                  ...(cardProps?.bodyStyle ?? cardProps?.styles?.body),
                },
              },
            }
          : {
              bodyStyle: {
                ...cardBodyStyle,
                ...(cardProps?.bodyStyle ?? cardProps?.styles?.body),
              },
            };

        return (
          <Card
            {...cardProps}
            key={item[valueKey] ?? i}
            className={classnames(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-disabled`]: item.disabled,
                [`${prefixCls}-item-active`]: multiple
                  ? value?.includes(item[valueKey])
                  : value === item[valueKey],
              },
              cardProps?.className,
            )}
            onClick={(e) => {
              handleSelect(item);
              cardProps?.onClick?.(e);
            }}
            style={{
              borderColor: isActive ? token.colorPrimary : void 0,
              ...cardStyle,
              ...cardProps?.style,
              ...(isActive ? activeStyle : {}),
            }}
            {...compatibilityStyle}
          >
            {item[labelKey] ?? item[valueKey]}
          </Card>
        );
      })}
    </div>
  );
}
export * from './interface';
