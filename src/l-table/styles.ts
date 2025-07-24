import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((params, props: any = {}) => {
  const { rowHoverable, rowStripe } = props;
  const { css, cx, prefixCls, token } = params;

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
      backgroundColor: typeof rowHoverable === 'string' ? rowStripe : '#fafafa',
    },
    row_hover: css`
      transition: background-color 0.2s;
      &:hover {
        background-color: ${typeof rowHoverable === 'string' ? rowHoverable : '#fafafa'};
      }
    `,
    row_borderless: css`
      tr& > td.${prefixCls}-table-cell {
          border: none;
        }
      }
    `,
    header_borderless: css`
      tr& > th.${prefixCls}-table-cell {
          border: none;
        }
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
