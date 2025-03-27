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
    `,
    disabled: cx(
      css`
        cursor: not-allowed;
        background: ${token.colorBgContainerDisabled};
        color: ${token.colorTextDisabled};
      `,
    ),
    test: cx(
      prefix,
      css`
        &.${prefix} {
          padding: 6px 16px;
          border-radius: 6px;
          border: unset;
          background: unset;
          cursor: pointer;
        }
      `,
    ),
  };
});
