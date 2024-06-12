import { Dropdown, type MenuProps } from 'antd';
const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
export default function LContextMenu({ menu, children, dropdownProps }) {
  return (
    <Dropdown menu={menu} {...dropdownProps} trigger={['contextMenu']}>
      <div
        style={{
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        {children}
      </div>
    </Dropdown>
  );
}
