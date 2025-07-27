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
      background: typeof rowStripe === 'string' ? rowStripe : token.colorFillAlter,
    },
    row_hover: css`
      transition: background 0.2s;
      &:hover {
        background: ${typeof rowHoverable === 'string' ? rowHoverable : token.colorFillAlter};
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
