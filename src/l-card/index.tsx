import { Card } from 'antd';
import React from 'react';
import type { LCardProps } from './interface';
import { useStyles } from './styles';

const LCard: React.FC<LCardProps> = ({ className, ...rest }) => {
  const { cx, styles } = useStyles();
  return <Card className={cx(styles.container, className)} {...rest} />;
};

export * from './interface';
export default LCard;
