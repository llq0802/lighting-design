import type { InputProps, ModalProps, TabsProps } from 'antd';
import { Input } from 'antd';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
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
  value,
  onChange,
  options,
  extendRender,
  itemRender,
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
        itemRender={itemRender}
        modalProps={modalProps}
        tabsProps={tabsProps}
        extendRender={extendRender}
      />
    </>
  );
};

export default IconWrapper;
