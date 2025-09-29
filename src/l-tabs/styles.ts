import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles<{
  tabPosition?: 'top' | 'left' | 'right' | 'bottom';
}>((p, { tabPosition }) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: css`
      display: flex;
      flex-direction: ${tabPosition === 'left' || tabPosition === 'right' ? 'row' : 'column'};
      height: 100%;
      .${prefixCls}-tabs-content {
        height: 100%;
      }
      .${prefixCls}-tabs-tabpane {
        height: 100%;
      }
    `,
  };
});
