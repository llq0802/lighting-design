import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Card, Flex } from 'antd';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
import type { LCardGroupProps } from './interface';
import { useStyles } from './styles';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    className,
    style,
    cardBodyStyle = emptyObject,
    cardStyle = emptyObject,
    activeStyle = emptyObject,
    activeBodyStyle = emptyObject,
    multiple = false,
    cancelable = false,
    disabled = false,
    gap = 10,
    options = emptyArray,
    fieldNames = { label: 'label', value: 'value' },
  } = props;
  const { styles, cx } = useStyles();
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };
  const [state, setState] = useControllableValue(props);
  const value = multiple ? state || [] : state;

  useMemo(() => {
    if (!disabled) return;
    options?.forEach((item) => {
      item.disabled = true;
    });
  }, [disabled, options]);

  const triggerChange = useMemoizedFn((v: any) => {
    let cur = options?.find((k) => k[valueKey] === v);
    if (multiple) {
      cur = options?.filter((k) => v.includes(k[valueKey]));
    }
    setState?.(v, cur, options);
  });

  const handleSelect = useMemoizedFn((item: any) => {
    // 多选
    if (multiple) {
      if (value?.includes?.(item[valueKey])) {
        triggerChange(value?.filter((v: any) => v !== item[valueKey]));
      } else {
        triggerChange([...(value || []), item[valueKey]]);
      }
      return;
    }
    // 单选
    if (item[valueKey] === value) {
      if (cancelable) triggerChange(void 0);
    } else {
      triggerChange(item[valueKey]);
    }
  });
  return (
    <Flex rootClassName={cx(styles.container, className)} gap={gap} style={style}>
      {options?.map((item, i) => {
        const isDisabled = disabled || item.disabled;
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
            key={item[valueKey] ?? i}
            {...cardProps}
            rootClassName={cx(
              styles.item,
              { [styles.disabled]: isDisabled, [styles.active]: isActive },
              cardProps?.rootClassName,
            )}
            onClick={(e) => {
              if (isDisabled) return;
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
