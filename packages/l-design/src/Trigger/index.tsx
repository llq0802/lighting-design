import { useControllableValue } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import type { FC, ReactElement } from 'react';
import { cloneElement, isValidElement } from 'react';

export const prefixCls = 'lightd-trigger';
export type LTriggerProps = {
  width: number | string;
  dropdownWidth: number;
  dropdownClassName: string;
  /** 配置字段 label为展示名称的字段 value为字段的值*/
  fieldNames?: {
    label: string;
    value: string;
  };
  children: ReactElement;
} & Pick<
  SelectProps,
  | 'value'
  | 'onChange'
  | 'placement'
  | 'allowClear'
  | 'disabled'
  | 'placeholder'
  | 'style'
  | 'getPopupContainer'
  | 'clearIcon'
  | 'size'
  | 'suffixIcon'
  | 'dropdownStyle'
>;

const Trigger: FC<Partial<LTriggerProps>> = (props) => {
  const {
    width = 250,
    dropdownWidth = 500,
    dropdownClassName,
    allowClear,
    suffixIcon,
    clearIcon,
    size,
    getPopupContainer,
    fieldNames = { label: 'label', value: 'value' },
    placement = 'bottomLeft',
    disabled = false,
    placeholder = '请选择',
    style,
    dropdownStyle,
    children,
    ...restprops // value onchange
  } = props;

  const [isOpen, setIsOpen] = useControllableValue<boolean>(restprops, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onDropdownVisibleChange',
  });
  const [state, setState] = useControllableValue<Record<string, any>>(restprops, {
    defaultValue: {},
    defaultValuePropName: 'defaultValue',
    valuePropName: 'value',
    trigger: 'onChange',
  });
  const isComponent = isValidElement(children);
  const dropdownRender = !isComponent
    ? undefined
    : () => (
        <div style={{ padding: 8 }} className={dropdownClassName}>
          {cloneElement(children, {
            // @ts-ignore
            value: state?.[fieldNames.value],
            onChange: setState,
            open: isOpen,
            setOpen: setIsOpen,
          })}
        </div>
      );

  return (
    <Select
      fieldNames={fieldNames}
      clearIcon={clearIcon}
      suffixIcon={suffixIcon}
      size={size}
      value={state?.[fieldNames.label]}
      allowClear={allowClear}
      getPopupContainer={getPopupContainer}
      placement={placement}
      disabled={disabled}
      popupClassName={prefixCls}
      style={{ width: width, ...style }}
      open={isOpen}
      placeholder={placeholder}
      dropdownMatchSelectWidth={dropdownWidth}
      onDropdownVisibleChange={setIsOpen}
      dropdownStyle={dropdownStyle}
      dropdownRender={dropdownRender}
      onChange={setState}
    />
  );
};

export default Trigger;
