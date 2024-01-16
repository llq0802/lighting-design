import { useControllableValue, useMemoizedFn } from 'ahooks';
import { Tag } from 'antd';
import classnames from 'classnames';
import type { ValueType } from 'lighting-design/CardGroup';
import { transformChangeValue, transformValue } from 'lighting-design/_utils';
import { emptyArray } from 'lighting-design/constants';
import { useMemo, type CSSProperties, type ReactNode } from 'react';

export type LTagGroupOptions = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export interface LTagGroupProps {
  /**
   *是否把每个选项的 label 包装到 value 中，会把  value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  labelInValue?: boolean;
  /**
   * 受控值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  value?: ValueType;
  /**
   * 默认值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  defaultValue?: ValueType;
  /**
   * 值改变时出发
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  onChange?: (values: ValueType) => void;
  /**
   * 容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  className?: string;
  /**
   * 容器样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  style?: CSSProperties;

  /**
   *  每一项的类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  itemClassName?: string;
  /**
   * 全选时的值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  allValue?: string;
  /**
   * 是否多选
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  multiple?: boolean;
  /**
   * 选项数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  options: LTagGroupOptions[];
  /**
   * 是否展示全部
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  showAllChecked?: boolean;
  /**
   * 全部文字类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  allCheckedText?: string;
  /**
   *  是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  disabled?: boolean;
  /**
   * 是否可以取消选中
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  cancelable?: boolean;
}
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
