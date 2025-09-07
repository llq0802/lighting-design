import { useControllableValue } from 'ahooks';
import { Card } from 'antd';
import { emptyArray } from 'lighting-design/constants';
import { useMemo } from 'react';
import type { LCardGroupProps } from './interface';
import { useStyles } from './styles';

export default function LCardGroup(props: LCardGroupProps) {
  const {
    className,
    style,
    fieldNames = { label: 'label', value: 'value' },
    cardBodyStyle,
    cardStyle,
    cardClassName,
    multiple = false,
    cancelable = false,
    disabled,
    gap = 10,
    options = emptyArray,
    renderItem,
  } = props;
  const { styles, cx } = useStyles();
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };
  const [state, setState] = useControllableValue(props);
  const value = multiple ? state || [] : state;
  const opts = useMemo(() => {
    if (!disabled) return options;
    return options?.map((item) => {
      return {
        ...item,
        disabled: item?.disabled ?? true,
      };
    });
  }, [disabled, options]);

  const triggerChange = (v: any) => {
    let cur = opts?.find((k) => k[valueKey] === v);
    if (multiple) {
      cur = opts?.filter((k) => v.includes(k[valueKey]));
    }
    setState?.(v, cur, opts);
  };

  const handleSelect = (item: any) => {
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
  };

  return (
    <div className={cx(styles.container, className)} style={{ gap, ...style }}>
      {opts?.map((item, i) => {
        const isDisabled = item.disabled ?? disabled;
        const isActive = multiple ? value?.includes(item[valueKey]) : value === item[valueKey];
        const itemCardProps = item.itemCardProps || {};

        if (renderItem) {
          return renderItem(
            item,
            {
              isActive,
              isDisabled,
              onClick: () => {
                if (isDisabled) return;
                handleSelect(item);
              },
            },
            i,
          );
        }

        return (
          <Card
            {...itemCardProps}
            key={item[valueKey] ?? i}
            className={cx(
              itemCardProps?.className,
              cardClassName?.({
                isActive,
                isDisabled,
                item,
              }),
              {
                [styles.disabled]: isDisabled,
                [styles.active]: isActive,
              },
              styles.item,
            )}
            onClick={(e) => {
              if (isDisabled) return;
              handleSelect(item);
              itemCardProps?.onClick?.(e);
            }}
            style={{
              ...cardStyle?.({ isActive, isDisabled, item }),
              ...itemCardProps?.style,
            }}
            styles={{
              ...itemCardProps?.styles,
              body: {
                ...cardBodyStyle?.({ isActive, isDisabled, item }),
                ...itemCardProps?.styles?.body,
              },
            }}
          >
            {item[labelKey] ?? item[valueKey]}
          </Card>
        );
      })}
    </div>
  );
}
export * from './interface';
