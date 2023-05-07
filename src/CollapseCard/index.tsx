import { useControllableValue } from 'ahooks';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import classnames from 'classnames';
import type { CSSProperties, FC, ReactNode } from 'react';
import './index.less';

const { Panel } = Collapse;

const prefixCls = 'lightd-collapse-card';

export type LCollapseCardProps = {
  /** 初始化是否展开 */
  defaultCollapsed?: boolean;
  /** 受控是否展开 */
  collapsed?: boolean;
  /** 受控展开时的回调 */
  onCollapsed?: (bool: boolean) => void;
  /** 是否能展开 */
  collapsible?: boolean;
  /** 被隐藏时是否渲染 DOM 结构 */
  forceRender?: boolean;
  /** 使面板透明且无边框 */
  ghost?: boolean;
  /** 带边框风格的面板 */
  bordered?: boolean;
  /** 销毁折叠隐藏的面板 */
  destroyContent?: boolean;
  /** 设置图标位置 */
  collapsePosition?: 'left' | 'right';
  /** 标题 */
  title?: ReactNode;
  /** 右上角额外内容 */
  extra?: ReactNode;
  /** 自定义切换图标 */
  expandIcon?: (props: Record<string, any>) => ReactNode;
  /** 展开时的内容类名*/
  contentClassName?: string;
  /** 组件根类名 */
  className?: string;
  /** 组件根样式 */
  style?: CSSProperties;
  /** 组件大小 */
  size?: CollapseProps['size'];
  children: ReactNode;
};

// export default function LCollapseCard(props: LCollapseCardProps) {
//   const {
//     title,
//     extra,
//     collapsible = true,
//     collapsePosition = 'extra',
//     children,
//     ...restProps
//   } = props;

//   const refDom = useRef<HTMLDivElement>(null);
//   const [collapsed, setCollapsed] = useControllableValue(props, {
//     defaultValue: false,
//     defaultValuePropName: 'defaultCollapsed',
//     valuePropName: 'collapsed',
//     trigger: 'onCollapsed',
//   });

//   const toggleCollapsed = useMemoizedFn(() => {
//     // const cardBody = refDom.current?.querySelector(
//     //   '.ant-card-body',
//     // ) as HTMLDivElement;
//     // if (!collapsed) {
//     //   cardBody.style.transition = 'none';
//     //   cardBody.style.paddingTop = '24px';
//     //   cardBody.style.paddingBottom = '24px';
//     //   cardBody.style.height = 'auto';
//     //   const _height = cardBody.scrollHeight;

//     //   cardBody.style.height = '0px';
//     //   cardBody.style.paddingTop = '0px';
//     //   cardBody.style.paddingBottom = '0px';
//     //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     //   cardBody.scrollHeight;

//     //   cardBody.style.transition = '0.3s';
//     //   cardBody.style.height = `${_height}px`;
//     //   cardBody.style.paddingTop = '24px';
//     //   cardBody.style.paddingBottom = '24px';
//     // } else {
//     //   cardBody.style.height = '0px';
//     //   cardBody.style.paddingTop = '0px';
//     //   cardBody.style.paddingBottom = '0px';
//     // }
//     setCollapsed(!collapsed);
//   });

//   const iconDom = useMemo(() => {
//     return collapsible ? (
//       <DownOutlined
//         className={classnames(`${prefixCls}-collapsePosition-icon`)}
//         style={{ transform: `rotate(${collapsed ? 0 : 180}deg)` }}
//         onClick={toggleCollapsed}
//       />
//     ) : null;
//   }, [collapsible, collapsed]);

//   const dom = (
//     <Card
//       ref={refDom}
//       {...restProps}
//       className={classnames(
//         prefixCls,
//         restProps.className,

//         !collapsed && `${prefixCls}-collapsed`,
//       )}
//       title={
//         <>
//           {collapsePosition === 'title' ? iconDom : null}
//           {title}
//         </>
//       }
//       extra={
//         <>
//           {extra}
//           {collapsePosition === 'extra' ? iconDom : null}
//         </>
//       }
//     >
//       {children}
//     </Card>
//   );

//   return dom;
// }

const LCollapseCard: FC<LCollapseCardProps> = (props) => {
  const {
    title,
    extra,
    ghost = false,
    destroyContent = false,
    forceRender = false,
    bordered = true,
    collapsible = true,
    collapsePosition = 'right',
    expandIcon,
    defaultCollapsed,
    children,
    ...restProps
  } = props;

  const [collapsed, setCollapsed] = useControllableValue(props, {
    defaultValue: defaultCollapsed ?? false,
    defaultValuePropName: 'defaultCollapsed',
    valuePropName: 'collapsed',
    trigger: 'onCollapsed',
  });

  return (
    <Collapse
      collapsible="icon"
      activeKey={collapsed ? ['1'] : []}
      ghost={ghost}
      destroyInactivePanel={destroyContent}
      bordered={bordered}
      expandIcon={expandIcon}
      expandIconPosition={collapsePosition === 'left' ? 'start' : 'end'}
      size={restProps.size || 'middle'}
      onChange={(keys) => {
        if (!collapsible) return;
        if (!keys?.length) {
          setCollapsed(false);
          return;
        }
        setCollapsed(true);
      }}
      {...restProps}
      className={classnames(prefixCls, restProps.className)}
      style={restProps.style}
    >
      <Panel
        className={classnames(restProps.contentClassName)}
        key="1"
        header={title}
        extra={extra}
        showArrow={collapsible}
        forceRender={forceRender}
        {...restProps?.panel}
      >
        {children}
      </Panel>
    </Collapse>
  );
};

export default LCollapseCard;
