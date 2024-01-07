import { FullscreenExitOutlined, FullscreenOutlined, ReloadOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import type { SpaceProps } from 'antd';
import { ConfigProvider, Space, Tooltip } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { CSSProperties, FC, Key } from 'react';
import { useContext, useMemo } from 'react';
import TableContext from '../TableContext';
import { LIGHTD_TABLE } from './BaseTable';
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
  const [isFull, { enterFullscreen, exitFullscreen }] = useFullscreen(rootRef?.current, {
    onExit() {
      setFullScreen?.(false);
    },
  });

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
  /** 点击列表图标每一项的回调 */
  onColumnIconChange?: (keys: string[]) => void;
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
  onColumnIconChange,
  style = emptyObject,
  ...restProps
}) => {
  const sortDom = useMemo(() => {
    const arrDom = [];
    if (showReload) {
      arrDom.push({
        key: orders.reload || 0,
        dom: <ReloadIcon onReloadIconChange={onReloadIconChange} key="ReloadIcon" />,
      });
    }
    if (showDensity) {
      arrDom.push({
        key: orders.density || 1,
        dom: <DensityIcon key="DensityIcon" />,
      });
    }
    if (showFullscreen) {
      arrDom.push({
        key: orders.fullscreen || 2,
        dom: <FullscreenIcon key="FullscreenIcon" />,
      });
    }
    if (showColumnSetting) {
      arrDom.push({
        key: orders.columnSetting || 3,
        dom: <ColumnSetting key="ColumnSetting" onColumnIconChange={onColumnIconChange} />,
      });
    }
    return arrDom.toSorted((a, b) => a.key - b.key).map((item) => item.dom);
  }, [showReload, showDensity, showFullscreen, showColumnSetting, JSON.stringify(orders)]);

  return (
    <Space size={10} {...restProps} style={{ fontSize: 16, ...style }}>
      {sortDom}
    </Space>
  );
};

export const showTotal = (total: number, range: [value0: Key, value1: Key]) => (
  <span
    className={`${LIGHTD_TABLE}-pagination-show-total`}
  >{`当前显示${range[0]}-${range[1]}条，共 ${total} 条数据`}</span>
);

export const TdCell = (props: any) => {
  // onMouseEnter, onMouseLeave在数据量多的时候，会严重阻塞表格单元格渲染，严重影响性能
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onMouseEnter, onMouseLeave, ...restProps } = props;
  return <td {...restProps} />;
};

export default ToolbarAction;
