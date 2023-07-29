import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import type { SpaceProps } from 'antd';
import { ConfigProvider, Space, Tooltip } from 'antd';
import type { CSSProperties, FC } from 'react';
import { memo, useContext } from 'react';
import TableContext from '../TableContext';
import ColumnSetting from './ColumnSetting';
import DensityIcon from './DensityIcon';

// 刷新图标
const ReloadIcon = ({ onReloadIconChange }) => {
  const { reload, rootRef } = useContext(TableContext);
  return (
    <ConfigProvider getPopupContainer={() => rootRef?.current || document.body}>
      <Tooltip title="刷新">
        <ReloadOutlined
          onClick={() => {
            reload?.();
            onReloadIconChange?.();
          }}
        />
      </Tooltip>
    </ConfigProvider>
  );
};
// 全屏
const FullscreenIcon = () => {
  const { rootRef, setFullScreen } = useContext(TableContext);
  const [isFull, { enterFullscreen, exitFullscreen }] = useFullscreen(
    rootRef?.current,
    {
      onExit() {
        setFullScreen?.(false);
      },
    },
  );

  // useEventListener('fullscreenchange', () => {
  //   // document.fullscreenElement ||
  //   // document.mozFullScreenElement ||
  //   // document.msFullScreenElement ||
  //   // document.webkitFullscreenElement||null
  //   const isF = !!(
  //     document.fullscreen ||
  //     document.mozFullScreen ||
  //     document.webkitIsFullScreen ||
  //     document.webkitFullScreen ||
  //     document.msFullScreen
  //   );
  //   if (!isF) {
  //     exitFullscreen();
  //     setFullScreen?.(false);
  //   }
  // });

  return isFull ? (
    <ConfigProvider getPopupContainer={() => rootRef?.current || document.body}>
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

export type LToolbarActionProps = {
  /** 是否显示刷新 */
  showReload?: boolean;
  /** 是否显示列设置 */
  showColumnSetting?: boolean;
  /** 是否显示表格密度 */
  showDensity?: boolean;
  /** 是否显示全屏 */
  showFullscreen?: boolean;
  /** 点击刷新图标的回调 */
  onReloadIconChange?: () => void;
  /** 内置图标的排序 */
  orders?: {
    reload: number;
    density: number;
    fullscreen: number;
    columnSetting: number;
  };
  /** 图标样式 */
  style?: CSSProperties;
} & SpaceProps;

/**
 * 内置工具栏
 * @param param0
 * @returns
 */
const ToolbarAction: FC<LToolbarActionProps> = ({
  showReload = true,
  showColumnSetting = true,
  showDensity = true,
  showFullscreen = true,
  orders = {
    reload: 0,
    density: 1,
    fullscreen: 2,
    columnSetting: 3,
  },
  onReloadIconChange,
  style = {},
  ...restProps
}) => {
  const arrDom = [];
  if (showReload) {
    arrDom.push({
      key: orders.reload || 0,
      dom: (
        <ReloadIcon onReloadIconChange={onReloadIconChange} key="ReloadIcon" />
      ),
    });
  }
  if (showDensity) {
    arrDom.push({
      key: orders.density || 0,
      dom: <DensityIcon key="DensityIcon" />,
    });
  }
  if (showFullscreen) {
    arrDom.push({
      key: orders.fullscreen || 0,
      dom: <FullscreenIcon key="FullscreenIcon" />,
    });
  }
  if (showColumnSetting) {
    arrDom.push({
      key: orders.columnSetting || 0,
      dom: <ColumnSetting key="ColumnSetting" />,
    });
  }
  const sortDom = arrDom.sort((a, b) => a.key - b.key).map((item) => item.dom);
  return (
    <Space size={10} {...restProps} style={{ fontSize: 16, ...style }}>
      {/* {showReload && <ReloadIcon onReloadIconChange={onReloadIconChange} />}
      {showDensity && <DensityIcon />}
      {showFullscreen && <FullscreenIcon />}
      {showColumnSetting && <ColumnSetting />} */}
      {sortDom}
    </Space>
  );
};

export default memo(ToolbarAction);
