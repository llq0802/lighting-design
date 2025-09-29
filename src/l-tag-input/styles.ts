import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: css`
      padding: 0 10px;
      width: 100%;
      height: ${token.controlHeight}px;
      position: relative;
      background: rgba(0, 0, 0, 0.04);
      border-width: ${token.lineWidth}px;
      border-style: solid;
      border-color: transparent;
      display: inline-flex;
      min-width: 0;
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      line-height: ${token.lineHeight};
      border-radius: ${token.borderRadius}px;
      transition: all 0.2s;
      align-items: center;
      &:hover {
        background: rgba(0, 0, 0, 0.06);
      }
      &:focus,
      &:focus-within {
        outline: 0;
        border-color: #4755e3;
        background: #ffffff;
      }
    `,

    content: css`
      flex: 1;
      min-width: 0;
      -webkit-user-modify: read-write-plaintext-only;
      color: rgba(0, 0, 0, 0.89);
      outline: none;
      border: none;
      background: transparent;
      color: inherit;
      box-sizing: border-box;
      white-space: nowrap;
      word-break: break-word;
      overflow-x: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    `,
    placeholder: css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.25);
      user-select: none;
      text-overflow: inherit;
      overflow-wrap: normal;
      -webkit-user-modify: read-only !important;
      white-space: pre;
      overflow: hidden;
    `,
  };
});
