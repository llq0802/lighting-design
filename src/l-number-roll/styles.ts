import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, token } = p;
  return {
    container: css`
      display: inline-flex;
      user-select: none;
    `,
    content: cx(
      css`
        position: relative;
        overflow: hidden;
        line-height: 1;
      `,
    ),
    body: cx(
      css`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      `,
    ),
    item: cx(
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `,
    ),
  };
});
