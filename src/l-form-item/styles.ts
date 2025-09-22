import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles(
  (
    parmas,
    props: {
      alignItems?: 'center' | 'flex-start' | 'flex-end';
    },
  ) => {
    const { css, cx, prefixCls, token } = parmas;

    return {
      container: css`
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
      `,

      item:
        props && props?.alignItems
          ? css`
              & > .${prefixCls}-row.${prefixCls}-form-item-row {
                align-items: ${props.alignItems};
              }
            `
          : '',
    };
  },
);
