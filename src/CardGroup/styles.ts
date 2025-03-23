import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;
  const common = css`
    cursor: pointer;
    transition: 200ms;
    min-width: 200px;
  `;
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    item: common,
    disabled: cx(
      css`
        cursor: not-allowed;
        background: ${token.colorBgContainerDisabled};
        color: ${token.colorTextDisabled};
      `,
    ),
    active: cx(
      css`
        background: ${token.colorPrimary};
        color: ${token.colorTextLightSolid};
      `,
    ),
  };
});
