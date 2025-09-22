import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: {
      display: 'inline-block',
    },
  };
});
