import type { DropdownProps } from 'antd';

export type LRightMenuProps = Omit<DropdownProps, 'trigger'> & {
  children: React.ReactNode;
};
