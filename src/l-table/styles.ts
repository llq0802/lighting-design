import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

  return {
    form_card: css`
      > .${prefixCls}-card-body {
        padding-bottom: ${token.paddingXXS}px;
      }
    `,
    toolbar: {
      marginBottom: token.margin,
    },
    row_stripe: {
      backgroundColor: '#fafafa',
    },
    row_hover: css`
      transition: background-color 0.1s;
      &:hover {
        background-color: ${'#fafafa'};
      }
    `,
    pagination: cx(
      css`
        margin-top: ${token.marginLG}px;
        margin-bottom: ${token.marginXXS}px;
        align-items: center;
      `,
    ),
  };
});
