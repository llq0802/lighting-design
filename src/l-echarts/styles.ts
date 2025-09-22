import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((params, props) => {
  const { css, cx, prefixCls, token } = params;
  return {
    container: cx(
      css`
        width: 100%;
        height: 33vh;
      `,
    ),
  };
});
