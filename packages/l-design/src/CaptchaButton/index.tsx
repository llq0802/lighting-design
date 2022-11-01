import { useCountDown, useLocalStorageState } from 'ahooks';
import { Button } from 'antd';
import type { FC } from 'react';
import { memo, useCallback, useEffect } from 'react';
import type { CaptchaButtonProps } from './type.d';

const CaptchaButton: FC<CaptchaButtonProps> = (props) => {
  const {
    second = 10,
    cacheKey = '__CaptchaButton__',
    onEnd,
    onClick,
    children,
    disabledText,
    ...buttonProps
  } = props;
  const [targetDate, setTargetDate] = useLocalStorageState<number | undefined>(cacheKey, {
    defaultValue: 0,
  });

  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      onEnd?.();
    },
  });

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClick?.(e);
    },
    [onClick],
  );

  useEffect(() => {
    return () => {
      setTargetDate(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      {...buttonProps}
      onClick={(e) => {
        setTargetDate(Date.now() + second * 1000);
        handleClick?.(e);
      }}
      disabled={countdown !== 0}
    >
      {countdown === 0
        ? `${children ?? '获取验证码'}`
        : `${Math.round(countdown / 1000)}秒后${disabledText ?? '重新获取'}`}
    </Button>
  );
};

export default memo(CaptchaButton);
