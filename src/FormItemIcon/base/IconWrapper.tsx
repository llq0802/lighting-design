import Icon, * as antIcons from '@ant-design/icons';
import type { InputProps, ModalProps, TabsProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import type { FormItemIconOptions, FormItemIconTabsExtendOptions } from '..';
import IconModal from './IconModal';

export interface IconWrapperProps {
  value?: string;
  onChange?: (value?: string) => void;
  disabled?: boolean;
  placeholder?: string;
  options?: FormItemIconOptions;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
  showIcon?: boolean;
  iconStyle?: React.CSSProperties;
  activeIconStyle?: React.CSSProperties;
  extendRender?: {
    IconFont: any;
    options: FormItemIconTabsExtendOptions[];
  };
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
  inputProps?: InputProps;
}

const IconWrapper: FC<IconWrapperProps> = ({
  value,
  onChange,

  disabled,
  placeholder,
  showIcon,
  iconStyle,
  activeIconStyle,
  options,
  extendRender,
  itemRender,
  modalProps,
  tabsProps,
  inputProps,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const prefix = useMemo(() => {
    if (showIcon && value && (antIcons as Record<string, any>)?.[value]) {
      return (
        <Icon
          component={(antIcons as Record<string, any>)?.[value]}
          style={activeIconStyle}
        />
      );
    }
    return void 0;
  }, [value, activeIconStyle, showIcon]);

  return (
    <>
      <Input
        allowClear
        prefix={prefix}
        autoComplete="off"
        placeholder={placeholder}
        {...inputProps}
        style={{
          width: '100%',
          ...inputProps?.style,
        }}
        disabled={disabled || inputProps?.disabled}
        value={value as string}
        onClick={(e) => {
          setOpen(true);
          inputProps?.onClick?.(e);
        }}
        onChange={(e) => {
          const newValue = e.target.value === '' ? void 0 : (value as string);
          onChange?.(newValue);
          inputProps?.onChange?.(newValue);
        }}
      />

      <IconModal
        iconStyle={iconStyle}
        open={open}
        onChange={(key) => {
          setOpen(false);
          onChange?.(key as any);
        }}
        cancel={(f) => {
          setOpen(f);
        }}
        options={options}
        itemRender={itemRender}
        modalProps={modalProps}
        tabsProps={tabsProps}
        extendRender={extendRender}
      />
    </>
  );
};

export default IconWrapper;
