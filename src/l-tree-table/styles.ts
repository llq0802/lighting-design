import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((params, props) => {
  const { css, cx, prefixCls, token } = params;
  return {
    checkbox: cx(
      css`
        .${prefixCls}-checkbox {
          display: none;
        }
      `,
    ),
  };
});
