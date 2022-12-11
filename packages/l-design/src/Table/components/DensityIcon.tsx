import { ColumnHeightOutlined } from '@ant-design/icons';
import { Dropdown, Tooltip } from 'antd';
import { useContext } from 'react';
import type { TableContextProps } from '../TableContext';
import TableContext from '../TableContext';

const DensityIcon = () => {
  const { size = 'middle', setSize } = useContext(TableContext);

  return (
    <Dropdown
      placement="bottom"
      trigger={['click']}
      menu={{
        style: { width: 80 },
        selectedKeys: [!size || size === 'large' ? 'default' : size],
        onClick({ key }) {
          setSize?.(key as TableContextProps['size']);
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
  );
};

export default DensityIcon;
