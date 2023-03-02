import { useControllableValue } from 'ahooks';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import { cloneElement, isValidElement } from 'react';

export type LTriggerProps = {
  width: number | string;
  dropdownWidth: number;
  /** 配置字段 label为展示名称的字段 value为字段的值*/
  fieldNames?: {
    label: string;
    value: string;
  };
  className: string;
  children: ReactElement;
  selectProps: SelectProps;
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
  | 'size'
  | 'suffixIcon'
  | 'dropdownStyle'
  | 'popupClassName'
>;

const prefixCls = 'lightd-trigger';

const Trigger: FC<Partial<LTriggerProps>> = (props) => {
  const {
    width = 250,
    dropdownWidth = 500,
    popupClassName,
    allowClear,
    suffixIcon,
    className,
    size,
    getPopupContainer,
    fieldNames = { label: 'label', value: 'value' },
    placement = 'bottomLeft',
    disabled = false,
    placeholder = '请选择',
    style,
    dropdownStyle,
    children,
    selectProps,
    ...restprops // value onchange
  } = props;

  const [isOpen, setIsOpen] = useControllableValue<boolean>(restprops, {
    defaultValue: false,
    defaultValuePropName: 'defaultOpen',
    valuePropName: 'open',
    trigger: 'onDropdownOpenChange',
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
        <div style={{ width: '100%' }} className={`${prefixCls}-popup`}>
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
      size={size}
      placeholder={placeholder}
      placement={placement}
      disabled={disabled}
      popupClassName={popupClassName}
      dropdownMatchSelectWidth={dropdownWidth}
      dropdownStyle={dropdownStyle}
      suffixIcon={suffixIcon}
      allowClear={allowClear}
      fieldNames={fieldNames}
      getPopupContainer={getPopupContainer}
      {...selectProps}
      style={{ width: width, ...style }}
      className={classnames(prefixCls, className)}
      dropdownRender={dropdownRender}
      onChange={setState}
      value={state?.[fieldNames.label]}
      open={isOpen}
      onDropdownVisibleChange={setIsOpen}
    />
  );
};

export default Trigger;
