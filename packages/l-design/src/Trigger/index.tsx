import { useControllableValue } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import type { FC, ReactElement } from 'react';
import { cloneElement, isValidElement } from 'react';

export const prefixCls = 'lightd-trigger';
export type TriggerProps = {
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
  | 'allowClear'
  | 'removeIcon'
  | 'clearIcon'
  | 'showArrow'
  | 'size'
  | 'suffixIcon'
>;

const Trigger: FC<TriggerProps> = (props) => {
  const {
    allowClear,
    suffixIcon,
    removeIcon,
    clearIcon,
    showArrow,
    size,
    getPopupContainer,
    fieldNames = { label: 'label', value: 'value' },
    placement = 'bottomLeft',
    disabled = false,
    placeholder = '请选择',
    style,
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
        <div style={{ padding: 8 }}>
          {cloneElement(children, {
            // @ts-ignore
            value: state?.[fieldNames.value],
            onChange: setState,
            setOpen: setIsOpen,
          })}
        </div>
      );

  return (
    <Select
      fieldNames={fieldNames}
      clearIcon={clearIcon}
      removeIcon={removeIcon}
      showArrow={showArrow}
      suffixIcon={suffixIcon}
      size={size}
      value={state?.[fieldNames.label]}
      onChange={setState}
      allowClear={allowClear}
      getPopupContainer={getPopupContainer}
      placement={placement}
      disabled={disabled}
      popupClassName={prefixCls}
      style={{ width: 250, ...style }}
      open={isOpen}
      placeholder={placeholder}
      dropdownMatchSelectWidth={500}
      onDropdownVisibleChange={setIsOpen}
      dropdownRender={dropdownRender}
    />
  );
};

export default Trigger;
