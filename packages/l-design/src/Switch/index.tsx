/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
import RcSwitch from 'rc-switch';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Spin from '../Spin';
import './index.less';
export interface LightdSwitchProps {
  /**
   * 类名
   */
  className: string;
  /**
   * 当前是否选中
   */
  checked: boolean;
  /**
   * 选中时的内容
   */
  checkedChildren: React.ReactNode;
  /**
   * 非选中时的内容
   */
  unCheckedChildren: React.ReactNode;
  /**
   * 	指定当前是否选中
   */
  disabled: boolean;
  /**
   * 大小
   */
  size: 'small' | 'default' | 'large';
  /**
   * 自动聚焦
   */
  autoFocus: boolean;
  /**
   * 初始是否选中
   */
  defaultChecked: boolean | any;
  /**
   * loading
   */
  loading: boolean;
  // /**
  //  * 指定一loading图标
  //  */
  // loadingIcon: React.ReactNode;
  /**
   * 点击时回调函数
   */
  onClick: (checked: boolean, event: SwitchChangeEventHandler) => void;
  /**
   * 状态改变时触发
   */
  onChange: (checked: boolean, event: SwitchChangeEventHandler) => void;
}

declare type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;

const Switch: FC<Partial<LightdSwitchProps>> = (props) => {
  const {
    className = '',
    checkedChildren = '',
    unCheckedChildren = '',
    disabled = false,
    loading,
    size = 'default',
    defaultChecked = false,
    checked = defaultChecked,
    onChange,
    onClick,
  } = props;

  const [checkedCom, setCheckedCom] = useState<boolean>(defaultChecked);
  const prefixCls = 'lightd-switch';

  const handleClick = (checked: boolean, even: SwitchChangeEventHandler) => {
    onClick && onClick(checked, even);
    if (disabled && loading) return;
    setCheckedCom(checked);
  };

  useEffect(() => {
    if (!disabled && !loading) setCheckedCom(checked);
  }, [checked, disabled, loading]);

  return (
    <Spin loading={loading} size="small" color="#ccc" mode="load3">
      <RcSwitch
        prefixCls={prefixCls}
        className={`${prefixCls}-${size} ${className}`}
        // className={`${className}`}
        disabled={disabled}
        checked={checkedCom}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onClick={handleClick}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
      />
    </Spin>
  );
};

export default Switch;
