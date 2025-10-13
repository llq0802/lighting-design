import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p, { disabled }: any) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: css`
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: ${token.controlHeight}px;
      padding: 0 10px;
      border-width: ${token.lineWidth}px;
      border-style: solid;
      border-color: #d9d9d9;
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      border-radius: ${token.borderRadius}px;
      transition: all 0.2s;
      outline: none;
      cursor: ${disabled ? 'not-allowed' : 'text'};
      background: ${disabled ? token.colorBgContainerDisabled : token.colorBgContainer};

      &:hover {
        border-color: ${disabled ? '#d9d9d9' : token.colorPrimary};
      }
      &:focus,
      &:focus-within {
        border-color: ${disabled ? '#d9d9d9' : token.colorPrimary};
      }
    `,
    content_wapper: css`
      flex: 1;
      width: 0;
      outline: none;
      border: none;
    `,
    content: css`
      width: 100%;
      outline: none;
      border: none;
      background: transparent;
      box-sizing: border-box;
      white-space: nowrap;
      word-break: break-word;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-user-modify: ${disabled ? 'read-only' : 'read-write-plaintext-only'} !important;

      &::-webkit-scrollbar {
        display: none;
      }

      & i {
        display: inline-block;
        position: relative;
        font-style: normal;
        -webkit-user-modify: read-only !important;
        background: ${token.colorPrimary};
        color: ${token.colorWhite};
        padding: 0px 8px;
        margin: 0 4px;
        border-radius: 4px;
        white-space: nowrap;
        cursor: default;
        pointer-events: none;
        user-select: none;
        width: fit-content;
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
