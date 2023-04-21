import type { InputProps, ModalProps, TabsProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import type { FormItemIconOptionsProps } from '..';
import IconModal from './IconModal';

export interface IconWrapperProps extends InputProps {
  options?: FormItemIconOptionsProps;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
}

const IconWrapper: FC<IconWrapperProps> = ({
  value,
  onChange,
  options,
  modalProps,
  tabsProps,
  ...restProps
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: { target: { value: string } }) => {
      const rawValue = e.target.value as string;
      onChange?.(rawValue as any);
    },
    [onChange],
  );
  return (
    <>
      <Input
        autoComplete="off"
        style={{ width: '100%' }}
        {...restProps}
        value={value}
        onClick={(e) => {
          setOpen(true);
          restProps.onClick?.(e);
        }}
        onChange={handleChange}
      />
      <IconModal
        open={open}
        onChange={(key) => {
          setOpen(false);
          onChange?.(key as any);
        }}
        cancel={setOpen}
        options={options}
        modalProps={modalProps}
        tabsProps={tabsProps}
      />
    </>
  );
};

export default IconWrapper;
