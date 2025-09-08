import { useControllableValue } from 'ahooks';
import { Tag } from 'antd';
import { emptyArray } from 'lighting-design/constants';
import { useMemo } from 'react';
import type { LTagGroupProps } from './interface';
import { useStyles } from './styles';

const { CheckableTag } = Tag;

export default function LTagGroup(props: LTagGroupProps) {
  const {
    tagStyle,
    tagClassName,
    style,
    className,
    options = emptyArray,
    multiple = false,
    disabled,
    cancelable = false,
    fieldNames = { label: 'label', value: 'value' },
    renderItem,
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };

  const { styles, cx } = useStyles();

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

  const handleTagSelect = (checked: boolean, item: any) => {
    let newValue: any;
    // 选中时
    if (checked) {
      if (multiple && Array.isArray(value)) {
        newValue = [...(value || []), item[valueKey]];
      } else {
        newValue = item[valueKey];
      }

      triggerChange(newValue);
    } else {
      // 没有选中时
      if (multiple && Array.isArray(value)) {
        newValue = value?.filter((v: any) => v !== item[valueKey]);
        triggerChange(newValue);
      } else {
        if (cancelable) {
          newValue = void 0;
          triggerChange(newValue);
        }
      }
    }
  };

  return (
    <div className={cx(styles.container, className)} style={style}>
      {opts?.map((item: any, i) => {
        const isDisabled = item.disabled ?? disabled;
        const isActive = multiple
          ? value !== void 0 && Array.isArray(value) && value?.includes(item[valueKey] as unknown as string)
          : value === item[valueKey];

        if (renderItem) {
          return renderItem(
            item,
            {
              isActive,
              isDisabled,
              onClick: () => {
                if (isDisabled) return;
                handleTagSelect(isActive, item);
              },
            },
            i,
          );
        }

        return (
          <CheckableTag
            key={item[valueKey] ?? i}
            {...item.tagProps}
            className={cx(
              isDisabled && styles.disbaled,
              tagClassName?.({ isActive, isDisabled, item }),
              item.tagProps?.className,
            )}
            style={{
              ...tagStyle?.({ isActive, isDisabled, item }),
              ...item.tagProps?.style,
            }}
            checked={isActive}
            onChange={(checked) => {
              if (isDisabled) return;
              handleTagSelect(checked, item);
              item.tagProps?.onChange?.(checked);
            }}
          >
            {item[labelKey] ?? item[valueKey]}
          </CheckableTag>
        );
      })}
    </div>
  );
}
export * from './interface';
