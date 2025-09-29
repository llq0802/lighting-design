import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { type FC } from 'react';
import { useStyles } from './styles';

export type LTabsProps = TabsProps;

const LTabs: FC<LTabsProps> = ({ className, tabPosition, ...rest }) => {
  const { styles, cx } = useStyles({ tabPosition });
  // @ts-ignore
  return <Tabs className={cx(styles.container, className)} tabPosition={tabPosition} {...rest} />;
};

export default LTabs;
