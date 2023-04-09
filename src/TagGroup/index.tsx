import { SelectProps, Tag } from 'antd';
import classnames from 'classnames';
const { CheckableTag } = Tag;

type LTagGroupOptions = SelectProps['options'];

export interface LTagGroupProps {
  value: string | string[];
  onChange: (values: string | string[] | undefined) => void;
  /**容器类名 */
  className?: string;
  /**每一项的类名 */
  itemClassName?: string;
  /**全选时的值 */
  allValue?: string;
  /** 是否多选 */
  multiple?: boolean;
  /** 选项 */
  options?: LTagGroupOptions;
  /** 是否展示全部 */
  showAllChecked?: boolean;
  /** 全部文字类型 */
  allCheckedText?: string;
  /** 是否只读 */
  readonly?: boolean;
  /** 是否可以取消选中 */
  cancelable?: boolean;
}
const prefixCls = 'lightd-tag-group';

export default function LTagGroup(props: LTagGroupProps) {
  let {
    className,
    itemClassName,
    allValue = 'all',
    value,
    onChange,
    multiple,
    options = [],
    showAllChecked = true,
    allCheckedText = '全部',
    readonly,
    cancelable = false,
  } = props;

  // 如果是多选，且没有默认值，则默认值视为空数组
  if (multiple && value === undefined) {
    value = [];
  }
  // 是否是多选
  const isMultiple = multiple && Array.isArray(value);

  // 是否是空值
  const isEmpty = isMultiple
    ? value?.length === options.length
    : value === allValue;

  const triggerChange = (newValue: any) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  /** 全选 */
  const handleAllSelect = (bool: boolean) => {
    if (readonly) return;
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
        newValue = undefined;
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
    if (readonly || curItem.disabled) {
      return;
    }

    let newValue: any;
    // 选中时
    if (checked) {
      if (isMultiple) {
        newValue = [...value, curItem.value];
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
          newValue = undefined;
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
          className={classnames(prefixCls + '-item-all', itemClassName)}
        >
          {allCheckedText}
        </CheckableTag>
      )}
      {(options || []).map((item: any) => (
        <CheckableTag
          className={classnames(prefixCls + '-item', itemClassName)}
          key={item.value}
          checked={
            isMultiple
              ? value !== undefined && value.includes(item.value)
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
