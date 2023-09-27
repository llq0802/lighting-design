import { useControllableValue } from 'ahooks';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import classnames from 'classnames';
import type { CSSProperties, FC, ReactNode } from 'react';
import './index.less';

const { Panel } = Collapse;

const prefixCls = 'lightd-collapse-card';

export type LCollapseCardProps = {
  /**
   * 初始化是否展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  defaultCollapsed?: boolean;
  /**
   *  受控是否展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  collapsed?: boolean;
  /**
   * 受控展开时的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  onCollapsed?: (bool: boolean) => void;
  /**
   * 是否能展开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  collapsible?: boolean;
  /**
   *  强制被隐藏时是否渲染 DOM 结构
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  forceRender?: boolean;
  /**
   *  使面板透明且无边框
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  ghost?: boolean;
  /**
   * 带边框风格的面板
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  bordered?: boolean;
  /**
   *  销毁折叠隐藏的面板
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  destroyContent?: boolean;
  /**
   * 设置图标位置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  collapsePosition?: 'left' | 'right';
  /**
   *  标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  title?: ReactNode;
  /*
   * 右上角额外内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  extra?: ReactNode;
  /**
   *  自定义切换图标
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  expandIcon?: (props: Record<string, any>) => ReactNode;
  /**
   *  展开时的内容类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  contentClassName?: string;
  /**
   * 组件根类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  className?: string;
  /**
   *  组件根样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  style?: CSSProperties;
  /**
   * 组件大小
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  size?: CollapseProps['size'];
  /**
   *  触发折叠的位置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LCollapseCardProps
   */
  triggerPosition?: 'header' | 'icon';

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
    triggerPosition = 'icon',

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    collapsed: outCollapsed,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCollapsed: outOnCollapsed,

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
      collapsible={triggerPosition === 'icon' ? 'icon' : void 0}
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
