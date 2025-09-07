import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: {
      display: 'inline-flex',
      flexWrap: 'wrap',
    },
    disbaled: {
      cursor: 'not-allowed',
      background: token.colorBgContainerDisabled,
      color: token.colorTextDisabled,
    },
  };
});
