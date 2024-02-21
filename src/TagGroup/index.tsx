import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Tag } from 'antd';
import classnames from 'classnames';
import type { ValueType } from 'lighting-design/CardGroup/interface';
import { transformChangeValue, transformValue } from 'lighting-design/_utils';
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
    allCheckedText = '全部',
    allValue = 'all',
    disabled,
    cancelable = false,
  } = props;

  const [val, onChange] = useControllableValue<ValueType>(props, {
    defaultValue: props?.defaultValue || multiple ? emptyArray : void 0,
  });
  const value = useMemo(
    () => transformValue({ value: val, multiple, labelInValue }),
    [val, multiple, labelInValue],
  );

  // 是否全选
  const isAllChecked =
    multiple && Array.isArray(value)
      ? value?.length === options.length
      : (value as unknown as string) === allValue;

  const triggerChange = useMemoizedFn((value: any) => {
    const val = transformChangeValue({ value, multiple, labelInValue, options });
    onChange?.(val);
  });

  /** 全选 */
  const handleAllSelect = useMemoizedFn((bool: boolean) => {
    if (disabled) return;
    let newValue: any;
    if (multiple) {
      if (bool) {
        newValue = options?.map((item) => item.value);
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
  const handleTagSelect = useMemoizedFn((checked: boolean, curItem: any) => {
    if (disabled || curItem.disabled) {
      return;
    }

    let newValue: any;
    // 选中时
    if (checked) {
      if (multiple && Array.isArray(value)) {
        newValue = [...(value || []), curItem.value];
      } else {
        newValue = curItem.value;
      }

      triggerChange(newValue);
    } else {
      // 没有选中时
      if (multiple && Array.isArray(value)) {
        newValue = value?.filter((v: any) => v !== curItem.value);
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
      {options.map((item: any) => (
        <CheckableTag
          className={classnames(`${prefixCls}-item`, itemClassName)}
          key={item.value}
          checked={
            multiple
              ? value !== void 0 &&
                Array.isArray(value) &&
                value?.includes(item.value as unknown as string)
              : value === item.value
          }
          onChange={(checked) => handleTagSelect(checked, item)}
        >
          {item.label}
        </CheckableTag>
      ))}
    </span>
  );
}
