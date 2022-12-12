import { FullscreenExitOutlined, FullscreenOutlined, ReloadOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import type { SpaceProps } from 'antd';
import { ConfigProvider, Space, Tooltip } from 'antd';
import type { CSSProperties, FC } from 'react';
import { useContext } from 'react';
import TableContext from '../TableContext';
import ColumnSetting from './ColumnSetting';
import DensityIcon from './DensityIcon';

// 刷新图标
const ReloadIcon = () => {
  const { reload, rootRef } = useContext(TableContext);
  return (
    <ConfigProvider getPopupContainer={() => rootRef!.current || document.body}>
      <Tooltip title="刷新重置">
        <ReloadOutlined onClick={reload} />
      </Tooltip>
    </ConfigProvider>
  );
};
// 全屏
const FullscreenIcon = () => {
  const { rootRef, setFullScreen } = useContext(TableContext);
  const [isFull, { enterFullscreen, exitFullscreen }] = useFullscreen(rootRef!.current);

  return isFull ? (
    <ConfigProvider getPopupContainer={() => rootRef!.current || document.body}>
      <Tooltip title="退出全屏">
        <FullscreenExitOutlined
          onClick={() => {
            exitFullscreen();
            setFullScreen?.(false);
          }}
        />
      </Tooltip>
    </ConfigProvider>
  ) : (
    <Tooltip title="进入全屏">
      <FullscreenOutlined
        onClick={() => {
          enterFullscreen();
          setFullScreen?.(true);
        }}
      />
    </Tooltip>
  );
};

export type ToolbarActionConfigProps = {
  /** 是否显示刷新 */
  showReload?: boolean;
  /** 是否显示列设置 */
  showColumnSetting?: boolean;
  /** 是否显示表格密度 */
  showDensity?: boolean;
  /** 是否显示全屏 */
  showFullscreen?: boolean;
  /** 图标样式 */
  style?: CSSProperties;
};

export type ToolbarActionProps = SpaceProps & ToolbarActionConfigProps;

/**
 * 内置工具栏
 * @param param0
 * @returns
 */
const ToolbarAction: FC<ToolbarActionProps> = ({
  showReload = true,
  showColumnSetting = true,
  showDensity = true,
  showFullscreen = true,
  style = {},

  ...restProps
}) => {
  return (
    <Space size={12} {...restProps} style={{ fontSize: 16, ...style }}>
      <>
        {showReload && <ReloadIcon />}
        {showDensity && <DensityIcon />}
        {showFullscreen && <FullscreenIcon />}
        {showColumnSetting && <ColumnSetting />}
      </>
    </Space>
  );
};

export default ToolbarAction;
