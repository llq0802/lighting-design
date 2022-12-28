import type { ButtonProps } from 'antd';

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  second?: number;
  start?: boolean;
  disabledText?: string;
  cacheKey?: string;
  onEnd?: () => void;
}
