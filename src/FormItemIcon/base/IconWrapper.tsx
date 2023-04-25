import type { InputProps, ModalProps, TabsProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';
import type {
  FormItemIconOptionsProps,
  FormItemIconTabsExtendOptions,
} from '..';
import IconModal from './IconModal';

export interface IconWrapperProps extends InputProps {
  options?: FormItemIconOptionsProps;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
  extendRender?: {
    IconFont: any;
    options: FormItemIconTabsExtendOptions[];
  };
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({
  value = null,
  onChange,
  options,
  extendRender,
  itemRender,
  modalProps,
  tabsProps,
  ...restProps
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Input
        autoComplete="off"
        style={{ width: '100%' }}
        allowClear
        {...restProps}
        value={value as string}
        onClick={(e) => {
          setOpen(true);
          restProps.onClick?.(e);
        }}
        onChange={(e) =>
          onChange?.(e.target.value === '' ? null : (value as any))
        }
      />
      <IconModal
        open={open}
        onChange={(key) => {
          setOpen(false);
          onChange?.(key as any);
        }}
        cancel={setOpen}
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
