import { useControllableValue } from 'ahooks';
import { Tag } from 'antd';
import classnames from 'classnames';
import type { ReactNode } from 'react';

export type LTagGroupOptions = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export interface LTagGroupProps {
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (values: string | string[] | undefined) => void;
  /** 容器类名 */
  className?: string;
  /** 每一项的类名 */
  itemClassName?: string;
  /** 全选时的值 */
  allValue?: string;
  /** 是否多选 */
  multiple?: boolean;
  /** 选项 */
  options: LTagGroupOptions[];
  /** 是否展示全部 */
  showAllChecked?: boolean;
  /** 全部文字类型 */
  allCheckedText?: string;
  /** 是否只读 */
  disabled?: boolean;
  /** 是否可以取消选中 */
  cancelable?: boolean;
}
const prefixCls = 'lightd-tag-group';

const { CheckableTag } = Tag;

export default function LTagGroup(props: LTagGroupProps) {
  let {
    className,
    itemClassName,
    allValue = 'all',
    multiple,
    options = [],
    showAllChecked = true,
    allCheckedText = '全部',
    disabled,
    cancelable = false,
  } = props;

  const [value, onChange] = useControllableValue<string | string[]>(props, {
    defaultValue: multiple ? [] : void 0,
  });

  // 如果是多选，且没有默认值，则默认值视为空数组
  // if (multiple && value === undefined) {
  //   value=[]
  // }

  // 是否是多选
  const isMultiple = multiple;

  // 是否是空值
  const isEmpty = isMultiple
    ? value?.length === options.length
    : (value as unknown as string) === allValue;

  const triggerChange = (newValue: any) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  /** 全选 */
  const handleAllSelect = (bool: boolean) => {
    if (disabled) return;
    let newValue: any;
    if (isMultiple) {
      if (bool) {
        newValue = options?.map((item) => item.value);
      } else {
        newValue = [];
      }
    } else {
      if (bool) {
        newValue = allValue;
      } else {
        newValue = void 0;
      }
    }
    triggerChange(newValue);
  };

  /**
   * 切换选中
   * @param checked 是否选中
   * @param option 当前选项
   */
  const handleTagSelect = (checked: boolean, curItem: any) => {
    if (disabled || curItem.disabled) {
      return;
    }

    let newValue: any;
    // 选中时
    if (checked) {
      if (isMultiple) {
        newValue = [...(value || []), curItem.value];
      } else {
        newValue = curItem.value;
      }

      triggerChange(newValue);
    } else {
      // 没有选中时
      if (isMultiple) {
        newValue = value.filter((v: any) => v !== curItem.value);
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
    <span className={classnames(prefixCls, className)}>
      {showAllChecked && (
        <CheckableTag
          key="all"
          checked={isEmpty}
          onChange={handleAllSelect}
          className={classnames(`${prefixCls}-item-all`, itemClassName)}
        >
          {allCheckedText}
        </CheckableTag>
      )}
      {(options || []).map((item: any) => (
        <CheckableTag
          className={classnames(`${prefixCls}-item`, itemClassName)}
          key={item.value}
          checked={
            isMultiple
              ? value !== void 0 &&
                value.includes(item.value as unknown as string)
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
