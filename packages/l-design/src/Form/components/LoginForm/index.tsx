import type { CSSProperties, FC, ReactNode } from 'react';
import { useMemo } from 'react';
import './index.less';

const prefixCls = 'lightd-login-form';

export interface LLoginFormProps {
  /**
   * @name form 顶部的一个提示配置，可以配置一些错误的提示信息
   * @example <caption>提示登录异常</caption>
   * message={<Alert message="登录异常，请重试！" showIcon closable type="error" />}
   */
  message?: ReactNode | false;
  /**
   * @name 标题，可以配置为空
   */
  title?: ReactNode | false;
  /**
   * @name 二级标题，可以配置为空
   */
  subTitle?: ReactNode | false;
  /**
   * @name logo 的配置，支持 ReactNode 和 url
   *
   * @example 配置为一个图标
   * logo={<Icon type="alipay" />}
   * @example 配置为一个路径
   * logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
   */
  logo?: ReactNode;
  /**
   * @name 自定义额外的登录功能
   *
   * @example <caption>配置支付宝登录</caption>
   * actions={<a>跳转支付宝登录</a>}
   *
   * @example <caption>使用图标</caption>
   * actions={<a><Icon type="alipay" />跳转支付宝登录</a>}
   */
  actions?: ReactNode;
  /**
   * @name 表单内容样式对象
   */
  contentStyle?: CSSProperties;
  /**
   * @name 登录表单样式对象
   */
  style?: CSSProperties;
  /**
   * @name 登录表单样式类
   */
  className?: string;
  children: ReactNode;
}

const LoginForm: FC<LLoginFormProps> = (props) => {
  const {
    title,
    logo,
    subTitle,
    actions,
    message,
    contentStyle,
    style,
    className,
    children,
  } = props;

  /** 生成logo 的dom，如果是string 设置为图片 如果是个 dom 就原样保留 */
  const logoDom = useMemo(() => {
    if (!logo) return null;
    if (typeof logo === 'string') return <img src={logo} />;
    return logo;
  }, [logo]);

  return (
    <div className={`${prefixCls}-container ${className || ''}`} style={style}>
      <div className={`${prefixCls}-top`}>
        {title || logoDom ? (
          <div className={`${prefixCls}-header`}>
            {logoDom && <span className={`${prefixCls}-logo`}>{logoDom}</span>}
            {title && <span className={`${prefixCls}-title`}>{title}</span>}
          </div>
        ) : null}
        {subTitle && <div className={`${prefixCls}-desc`}>{subTitle}</div>}
      </div>
      <div
        className={`${prefixCls}-main`}
        style={{
          width: 328,
          ...contentStyle,
        }}
      >
        {message}
        {children}
        {actions && <div className={`${prefixCls}-other`}>{actions}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
