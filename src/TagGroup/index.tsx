import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Tag } from 'antd';
import classnames from 'classnames';
import type { ValueType } from 'lighting-design/CardGroup/interface';
import { transformChangeValue, transformValue } from 'lighting-design/CardGroup/utils';
import { emptyArray } from 'lighting-design/constants';
import { useMemo } from 'react';
import type { LTagGroupProps } from './interface';

const prefixCls = 'lightd-tag-group';

const { CheckableTag } = Tag;

export default function LTagGroup(props: LTagGroupProps) {
  const {
    style,
    className,
    itemClassName,
    options = emptyArray,
    multiple = false,
    labelInValue = false,
    showAllChecked = false,
    disabled = false,
    cancelable = false,
    allCheckedText = '全部',
    allValue = 'all',
    fieldNames = { label: 'label', value: 'value' },
  } = props;
  const { label: labelKey, value: valueKey } = fieldNames as { label: string; value: string };

  const [val, onChange] = useControllableValue<ValueType>(props);
  const value = useMemo(
    () => transformValue({ value: val, multiple, labelInValue, valueKey }),
    [val, multiple, labelInValue],
  );

  // 是否全选
  const isAllChecked =
    multiple && Array.isArray(value)
      ? value?.length === options.length
      : (value as unknown as string) === allValue;

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({ value, multiple, labelInValue, options, valueKey });
    onChange?.(val);
  });

  /** 全选 */
  const handleAllSelect = useMemoizedFn((bool: boolean) => {
    if (disabled) return;
    let newValue: any;
    if (multiple) {
      if (bool) {
        newValue = options?.map((item) => item[valueKey]);
      } else {
        newValue = emptyArray;
      }
    } else {
      if (bool) {
        newValue = allValue;
      } else {
        newValue = void 0;
      }
    }
    triggerChange(newValue);
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
    <span className={classnames(prefixCls, className)} style={style}>
      {showAllChecked && (
        <CheckableTag
          key="all"
          checked={isAllChecked}
          onChange={handleAllSelect}
          className={classnames(`${prefixCls}-item-all`, itemClassName)}
        >
          {allCheckedText}
        </CheckableTag>
      )}
      {options?.map((item: any, i) => (
        <CheckableTag
          className={classnames(`${prefixCls}-item`, itemClassName)}
          key={item[valueKey] ?? i}
          checked={
            multiple
              ? value !== void 0 &&
                Array.isArray(value) &&
                value?.includes(item[valueKey] as unknown as string)
              : value === item[valueKey]
          }
          onChange={(checked) => handleTagSelect(checked, item)}
        >
          {item[labelKey] ?? item[valueKey]}
        </CheckableTag>
      ))}
    </span>
  );
}
export * from './interface';
