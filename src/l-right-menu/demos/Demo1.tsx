import { type MenuProps } from 'antd';
import { LRightMenu } from 'lighting-design';

const items: MenuProps['items'] = [
  { label: '1st menu item', key: '1' },
  { label: '2nd menu item', key: '2' },
  { label: '3rd menu item', key: '3' },
];

export default function Demo1() {
  return (
    <LRightMenu menu={{ items }}>
      <div
        style={{
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
          background: '#f5f5f5',
          border: '1px solid rgb(235, 237, 240)',
        }}
      >
        右键点击我试试
      </div>
    </LRightMenu>
  );
}
