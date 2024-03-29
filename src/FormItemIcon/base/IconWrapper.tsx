import Icon, * as antIcons from '@ant-design/icons';
import type { InputProps, ModalProps, TabsProps } from 'antd';
import { Input } from 'antd';
import classnames from 'classnames';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
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
  size: LFormItemProps['size'];
}

const IconWrapper: FC<IconWrapperProps> = ({
  value,
  onChange,
  size,
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
          style={{
            ...activeIconStyle,
          }}
        />
      );
    }
    return <span />;
  }, [value, activeIconStyle, showIcon]);

  return (
    <>
      <Input
        size={size}
        placeholder={placeholder}
        {...inputProps}
        prefix={prefix}
        style={{
          width: '100%',
          cursor: 'pointer',
          ...inputProps?.style,
        }}
        disabled={disabled || inputProps?.disabled}
        value={value as string}
        onClick={(e) => {
          setOpen(true);
          inputProps?.onClick?.(e);
        }}
        onChange={(e) => {
          const newValue = e?.target?.value === '' ? void 0 : (value as string);
          onChange?.(newValue);
          inputProps?.onChange?.(newValue as any);
        }}
        className={classnames('lightd-form-item-icon-input', inputProps?.className)}
        readOnly
        suffix={
          inputProps?.allowClear === false || !value ? (
            void 0
          ) : (
            <Icon
              className="lightd-form-item-icon-input-clear"
              onClick={() => {
                onChange?.(void 0);
              }}
              component={(antIcons as Record<string, any>)?.['CloseCircleFilled']}
              style={{
                margin: 0,
                color: `rgba(0, 0, 0, 0.25)`,
                fontSize: 12,
                verticalAlign: -1,
                cursor: `pointer`,
                transition: `color 0.3s`,
                width: '100%',
                height: '100%',
              }}
            />
          )
        }
        autoComplete="off"
      />

      <IconModal
        iconStyle={iconStyle}
        open={open}
        onChange={(key) => {
          setOpen(false);
          onChange?.(key as any);
        }}
        cancel={(f) => setOpen(f)}
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
