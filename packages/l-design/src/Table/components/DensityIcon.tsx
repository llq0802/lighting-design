import { ColumnHeightOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Tooltip } from 'antd';
import type { SetStateAction } from 'react';
import { useContext } from 'react';
import TableContext from '../TableContext';

const DensityIcon = () => {
  const { size, setSize, rootRef } = useContext(TableContext);

  return (
    <ConfigProvider getPopupContainer={() => rootRef!.current || document.body}>
      <Dropdown
        placement="bottom"
        trigger={['click']}
        menu={{
          style: { width: 80 },
          selectedKeys: [!size || size === 'large' ? 'default' : size],
          onClick({ key }) {
            setSize?.(key as SetStateAction<'middle' | 'small' | 'large' | undefined>);
          },
          items: [
            { label: '默认', key: 'default' },
            { label: '中等', key: 'middle' },
            { label: '紧凑', key: 'small' },
          ],
        }}
      >
        <Tooltip title="表格密度">
          <ColumnHeightOutlined />
        </Tooltip>
      </Dropdown>
    </ConfigProvider>
  );
};

export default DensityIcon;
