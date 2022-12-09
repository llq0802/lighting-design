import { ReloadOutlined } from '@ant-design/icons';
import type { SpaceProps } from 'antd';
import { Space, Tooltip } from 'antd';
import type { FC } from 'react';
import { useContext } from 'react';
import TableContext from '../TableContext';

const ReloadIcon = () => {
  const { reload } = useContext(TableContext);
  return (
    <Tooltip title="刷新">
      <ReloadOutlined onClick={reload} />
    </Tooltip>
  );
};

export type ToolbarActionProps = SpaceProps;

const ToolbarAction: FC<ToolbarActionProps> = ({ ...restProps }) => {
  return (
    <Space {...restProps} style={{ fontSize: 16, ...restProps?.style }}>
      <ReloadIcon />
    </Space>
  );
};

export default ToolbarAction;
