import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p) => {
  const { css, cx, prefixCls, token } = p;

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

        &-content {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 4px;

          &-big-img {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
          }

          &-small-img {
            display: block;
            position: absolute;
            height: 100%;
          }

          &-tips {
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
          }

          &-tips-success {
            background-color: #39c527;
          }

          &-tips-fail {
            background-color: #fa1510;
          }
        }

        &-track {
          position: relative;
          height: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #ededed;
          text-align: center;
          border-radius: 4px;
          border: 1px solid #f5f5f5;

          &-mark {
            background-color: #cee9fa;
            height: 100%;
            position: absolute;
            z-index: 9;
          }

          &-shadow {
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
          }

          &-move {
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
          }
        }
      `,
    ),
  };
});
