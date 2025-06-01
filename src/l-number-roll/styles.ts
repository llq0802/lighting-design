import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, token } = p;
  const prefix = `my-btn`;
  return {
    container: css`
      display: inline-flex;
      align-items: center;
      user-select: none;
      line-height: 1;
      & * {
        line-height: 1;
      }
    `,
    content: cx(
      css`
        position: relative;
        overflow: hidden;
        height: var(--lightd-number-roll-height);
        line-height: var(--lightd-number-roll-height);
        font-size: var(--lightd-number-roll-font-size);
      `,
    ),
    body: cx(
      css`
        line-height: 1;
        text-align: center;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
      `,
    ),
    item: cx(
      css`
        text-align: center;
        line-height: 1;
        width: auto;
        height: var(--lightd-number-roll-height);
        font-size: var(--lightd-number-roll-font-size);
      `,
    ),
  };
});
