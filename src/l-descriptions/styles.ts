import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((params, props) => {
  const { css, cx, prefixCls, token } = params;
  return {
    header: cx(
      css`
        width: 100%;
        margin-bottom: ${token.margin}px;
        font-weight: 700;
        font-size: ${token.fontSizeLG}px;
      `,
    ),
  };
});
