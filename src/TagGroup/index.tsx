import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Tag } from 'antd';
import { transformChangeValue, transformValue } from 'lighting-design/CardGroup/utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { useMemo } from 'react';
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
    labelInValue = false,
    disabled = false,
    cancelable = false,
    fieldNames = { label: 'label', value: 'value' },
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };

  const { styles, cx } = useStyles();

  const [val, onChange] = useControllableValue(props);
  const value = useMemo(
    () => transformValue({ value: val, multiple, labelInValue, valueKey }),
    [val, multiple, labelInValue],
  );

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({ value, multiple, labelInValue, options, valueKey });
    onChange?.(val);
  });

  /**
   * 切换选中
   * @param checked 是否选中
   * @param option 当前选项
   */
  const handleTagSelect = useMemoizedFn((checked: boolean, item: any) => {
    if (disabled || item.disabled) {
      return;
    }
    item.tagProps?.onChange?.(checked);

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
        const checked = multiple
          ? value !== void 0 && Array.isArray(value) && value?.includes(item[valueKey] as unknown as string)
          : value === item[valueKey];

        return (
          <CheckableTag
            {...item.tagProps}
            style={{
              ...itemStyle,
              ...item.tagProps?.style,
              ...(checked ? activeItemStyle : {}),
            }}
            key={item[valueKey] ?? i}
            checked={checked}
            onChange={(checked) => {
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
