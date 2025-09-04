import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

  return {
    container: cx(css`
      display: flex;
      flex-direction: column;
      height: 100%;
      > .${prefixCls}-card-body {
        flex: 1;
        min-height: 0;
        overflow: auto;
      }
    `),
  };
});
