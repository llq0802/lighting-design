import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, Flex } from 'antd';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
import type { LCardGroupProps } from './interface';
import { useStyles } from './styles';
import { transformChangeValue, transformValue } from './utils';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    className,
    style,
    cardBodyStyle = emptyObject,
    cardStyle = emptyObject,
    activeStyle = emptyObject,
    activeBodyStyle = emptyObject,
    multiple = false,
    labelInValue = false,
    cancelable = false,
    disabled = false,
    gap = 8,
    options = emptyArray,
    fieldNames = { label: 'label', value: 'value' },
  } = props;
  const { styles, cx } = useStyles();
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };
  const [val, onChange] = useControllableValue(props);
  const value = useMemo(() => transformValue({ value: val, multiple, labelInValue, valueKey }), [val]);

  useMemo(() => {
    if (disabled) {
      options?.forEach((item) => {
        item.disabled = true;
      });
    }
  }, [disabled, options]);

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({
      value,
      multiple,
      labelInValue,
      options,
      valueKey,
    });
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
    <Flex rootClassName={cx(styles.container, className)} gap={gap} style={style}>
      {options?.map((item, i) => {
        const isActive = multiple ? value?.includes(item[valueKey]) : value === item[valueKey];
        const cardProps = item.cardProps || {};
        const compatibilityStyle = {
          styles: {
            ...cardProps?.styles,
            body: {
              ...cardBodyStyle,
              ...cardProps?.styles?.body,
              ...(isActive ? activeBodyStyle : {}),
            },
          },
        };

        return (
          <Card
            {...cardProps}
            key={item[valueKey] ?? i}
            rootClassName={cx(
              styles.item,
              { [styles.disabled]: item.disabled, [styles.active]: isActive },
              cardProps?.rootClassName,
            )}
            onClick={(e) => {
              handleSelect(item);
              cardProps?.onClick?.(e);
            }}
            style={{
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
    </Flex>
  );
}
export * from './interface';
