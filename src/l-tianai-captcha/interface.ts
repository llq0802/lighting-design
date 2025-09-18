export type LTianaiCaptchaActionRef = {
  reset: () => void;
  refresh: () => Promise<void>;
};

export interface LTianaiCaptchaProps {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义样式
   */
  style?: React.CSSProperties;

  /**
   * 获取验证码图片的请求函数
   */
  requestImg: () => Promise<{
    id: string;
    backgroundImage: string;
    templateImage: string;
    backgroundImageWidth: number;
    backgroundImageHeight: number;
    templateImageWidth: number;
    templateImageHeight: number;
  }>;

  /**
   * 验证滑块结果的请求函数
   */
  requestCheck: (params: any) => Promise<{
    data?: any;
    /**
     * 是否成功，等同于 code === 200
     */
    success?: boolean;
    /**
     * 业务状态码
     * 4000: 验证码已失效
     * 4001: 验证失败
     * 200: 验证成功
     */
    code: number;
    msg?: string;
  }>;

  /**
   * 背景图片宽度
   * @default 310
   */
  backgroundImageWidth?: number;

  /**
   * 背景图片高度
   * @default 180
   */
  backgroundImageHeight?: number;

  /**
   * 滑块图片宽度
   * @default 56
   */
  sliderImageWidth?: number;

  /**
   * 组件引用，可用于刷新验证码
   */
  actionRef?: React.RefObject<LTianaiCaptchaActionRef | undefined>;

  /**
   * 验证前的回调函数，可用于修改提交参数
   */
  requestCheckBefore?: (params: any) => any;

  /**
   * 内容区域样式
   */
  styleContent?: React.CSSProperties;

  /**
   * 提示信息区域样式
   */
  styleContentTips?: React.CSSProperties;

  /**
   * 轨道区域样式
   */
  styleTrack?: React.CSSProperties;

  /**
   * 轨道阴影样式
   */
  styleTrackShadow?: React.CSSProperties;

  /**
   * 轨道标记样式
   */
  styleTrackMark?: React.CSSProperties;

  /**
   * 滑块样式
   */
  styleTrackMove?: React.CSSProperties;

  /**
   * 滑块图标
   */
  moveIcon?: React.ReactNode;

  /**
   * 加载图标
   */
  loadingIcon?: React.ReactNode;

  /**
   * 验证失败回调
   */
  onFail?: () => void;

  /**
   * 验证成功回调
   */
  onSuccess?: (data: any) => void;

  /**
   * 验证完成回调（无论成功或失败）
   */
  onFinally?: () => void;

  /**
   * 自定义渲染函数
   */
  render?: (
    elements: React.ReactNode,
    status: {
      imgLoading: boolean;
      imgData: any;
      checkLoading: boolean;
      checkData: any;
      isSuccess: boolean;
    },
    props: LTianaiCaptchaProps,
  ) => React.ReactNode;
}
