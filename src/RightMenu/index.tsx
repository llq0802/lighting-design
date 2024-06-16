import { Dropdown } from 'antd';
import type { LRightMenuProps } from './interface';

export default function LRightMenu({ children, ...restProps }: LRightMenuProps) {
  if (!children) {
    return null;
  }
  return (
    <Dropdown {...restProps} menu={{ items: [], ...restProps?.menu }} trigger={['contextMenu']}>
      {children}
    </Dropdown>
  );
}
