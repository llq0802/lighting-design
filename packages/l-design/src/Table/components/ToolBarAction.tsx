import { ReloadOutlined } from '@ant-design/icons';
import type { SpaceProps } from 'antd';
import { Space, Tooltip } from 'antd';
import type { FC } from 'react';
import { useContext } from 'react';
import TableContext from '../TableContext';
import ColumnSetting from './ColumnSetting';
import DensityIcon from './DensityIcon';

// 刷新
const ReloadIcon = () => {
  const { reload } = useContext(TableContext);
  return (
    <Tooltip title="刷新">
      <ReloadOutlined onClick={reload} />
    </Tooltip>
  );
};

export type ToolbarActionProps = SpaceProps & Record<string, any>;

/**
 * 内置工具栏
 * @param param0
 * @returns
 */
const ToolbarAction: FC<ToolbarActionProps> = ({ ...restProps }) => {
  return (
    <Space size={10} {...restProps} style={{ fontSize: 16, ...restProps?.style }}>
      <ReloadIcon />
      <DensityIcon />
      <ColumnSetting />
    </Space>
  );
};

export default ToolbarAction;
