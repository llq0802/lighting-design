import { createStyles } from 'lighting-design/styles';

const prefix = 'lightd-tiannai-captcha';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls } = p;

  const getClassName = (s: string) => `${prefix}-${s}`;

  const img = css`
    position: absolute;
    display: block;
    height: 100%;
    use-select: none;
  `;
  return {
    container: cx(
      css`
        display: flex;
        flex-direction: column;
        gap: 16px;
        user-select: none;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
      `,
    ),

    content: cx(
      css`
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 4px;
      `,
      getClassName('content'),
    ),

    big_img: cx(
      img,
      css`
        width: 100%;
      `,
      getClassName('big-img'),
    ),
    small_img: cx(img, getClassName('small-img')),

    content_tips: cx(
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: absolute;
        z-index: 9;
        bottom: 0;
        width: 100%;
        font-size: 15px;
        line-height: 2;
        transition: all 0.3s;
        transform: translateY(100.5%);
      `,
      getClassName('tips'),
    ),

    success_content_tips: css`
      background-color: #39c527;
    `,
    fail_content_tips: css`
      background-color: #fa1510;
    `,

    track: cx(
      css`
        position: relative;
        height: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #ededed;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #f5f5f5;
      `,
      getClassName('track'),
    ),
    shadow: cx(
      css`
        @keyframes myanimation {
          to {
            left: 98%;
            opacity: 0.8;
          }
        }
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: #fcfcfc;
        box-shadow: 1px 1px 1px #fff;
        animation: myanimation 2s infinite;
      `,
      getClassName('shadow'),
    ),
    mark: cx(
      css`
        background-color: #cee9fa;
        height: 100%;
        position: absolute;
        z-index: 9;
      `,
      getClassName('mark'),
    ),
    move: cx(
      css`
        font-size: 18px;
        color: #4f5665;
        position: absolute;
        width: 56px;
        height: 44px;
        background-color: #f8f8f8;
        top: -6px;
        display: grid;
        place-items: center;
        cursor: move;
        border-radius: 6px;
        user-select: none;
      `,
      getClassName('move'),
    ),
  };
});
