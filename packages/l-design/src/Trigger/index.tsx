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

const Trigger: FC<TriggerProps> = ({
  value,
  onChange,
  allowClear,
  getPopupContainer,
  fieldNames = { label: 'label', value: 'value' },
  placement = 'bottomLeft',
  disabled = false,
  placeholder = '请选择',
  style,
  children,
  ...restprops
}) => {
  const [isOpen, setIsOpen] = useControllableValue<boolean>(restprops, {
    defaultValuePropName: 'defaultOpen',
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onDropdownVisibleChange',
  });
  const [state, setState] = useControllableValue<Record<string, any>>(restprops, {
    defaultValue: {},
  });

  const onDropdownVisibleChange = (open: boolean) => {
    console.log('open', open);
    setIsOpen(open);
  };

  const isComponent = isValidElement(children);

  const dropdownRender = !isComponent
    ? undefined
    : () => (
        <div
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{ padding: 8 }}
        >
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
      onDropdownVisibleChange={onDropdownVisibleChange}
      dropdownMatchSelectWidth={500}
      dropdownRender={dropdownRender}
    />
  );
};

export default Trigger;
