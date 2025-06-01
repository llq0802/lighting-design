import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Tag } from 'antd';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { LTagGroupProps } from './interface';
import { useStyles } from './styles';

const { CheckableTag } = Tag;

export default function LTagGroup(props: LTagGroupProps) {
  const {
    activeItemStyle = emptyObject,
    itemStyle = emptyObject,
    style,
    className,
    options = emptyArray,
    multiple = false,
    disabled = false,
    cancelable = false,
    fieldNames = { label: 'label', value: 'value' },
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };

  const { styles, cx } = useStyles();

  const [state, setState] = useControllableValue(props);
  const value = multiple ? state || [] : state;

  const triggerChange = useMemoizedFn((v: any) => {
    let cur = options?.find((k) => k[valueKey] === v);
    if (multiple) {
      cur = options?.filter((k) => v.includes(k[valueKey]));
    }
    setState?.(v, cur, options);
  });

  const handleTagSelect = useMemoizedFn((checked: boolean, item: any) => {
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
  });

  return (
    <div className={cx(styles.container, className)} style={style}>
      {options?.map((item: any, i) => {
        const isDisabled = disabled || item.disabled;
        const checked = multiple
          ? value !== void 0 && Array.isArray(value) && value?.includes(item[valueKey] as unknown as string)
          : value === item[valueKey];

        return (
          <CheckableTag
            key={item[valueKey] ?? i}
            {...item.tagProps}
            style={{
              ...itemStyle,
              ...item.tagProps?.style,
              ...(checked ? activeItemStyle : {}),
            }}
            checked={checked}
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
