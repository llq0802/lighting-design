import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

  return {
    container: cx(css`
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      user-select: none;
    `),
    tips: css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      font-size: 14px;
    `,
    bar: css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 20%;
      height: 100%;
      top: 0;
      left: 0;
      background: #fff;
      box-sizing: border-box;
      cursor: move;
      z-index: 3;
      border: 1px solid #ccc;
    `,
    modal: css`
      position: absolute;
      width: 20%;
      height: 100%;
      top: 0;
      left: 0;
      background: #06ad06;
      color: #fff;
    `,
  };
});
