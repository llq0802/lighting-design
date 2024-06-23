import type { ModalProps } from 'antd';

type RequestCaptchaRes = {
  code: string | number;
  success: boolean;
  msg: string;
  data: {
    id: string;
    captcha: {
      backgroundImage: string;
      backgroundImageHeight: number;
      backgroundImageWidth: number;
      templateImage: string;
      templateImageHeight: number;
      templateImageWidth: number;
    };
  };
};
type ValidCaptchaRes = {
  code: 200 | 4000 | 4001 | number;
  success: boolean;
  msg: string;
  data: any;
};

export type LTianaiCaptchaActionRef =
  | {
      open: () => void;
      close: () => void;
      refresh: () => void;
    }
  | undefined;

export type LTianaiCaptchaProps = {
  requestCaptcha: string | (() => Promise<RequestCaptchaRes>);
  validCaptcha: string | (() => Promise<ValidCaptchaRes>);
  actionRef?: React.MutableRefObject<LTianaiCaptchaActionRef>;
  baseUrl?: string;
  className?: string;
  classNameContent?: string;
  classNameTrack?: string;
  style?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  styleContentTips?: React.CSSProperties;
  styleTrack?: React.CSSProperties;
  styleTrackShadow?: React.CSSProperties;
  styleTrackMark?: React.CSSProperties;
  styleTrackMove?: React.CSSProperties;
  successRefreshTime?: number;
  shouldSuccessColse?: boolean;
  showAction?: boolean;
  modalProps?: ModalProps;
  backgroundImageWidth?: number;
  backgroundImageHeight?: number;
  sliderImageWidth?: number;
  failRefreshTime?: number;
  moveIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  validCaptchaExtraParams?: Record<string, any>;
  onFail?: () => void;
  onSuccess?: () => void;
  onFinally?: (...args: any[]) => void;
};
