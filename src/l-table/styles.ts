import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

  return {
    pagination: cx(
      css`
        margin: ${token.margin}px 0;
        align-items: center;
      `,
    ),
  };
});
