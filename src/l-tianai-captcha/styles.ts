import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

  const img = css`
    position: absolute;
    display: block;
    height: 100%;
  `;
  return {
    container: cx(
      css`
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 309px;
        height: 234px;
        user-select: none;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
      `,
    ),

    content: css`
      position: relative;
      width: 100%;
      height: 180px;
      overflow: hidden;
      border-radius: 4px;
    `,

    big_img: cx(
      img,
      css`
        width: 100%;
      `,
    ),
    small_img: img,
  };
});
