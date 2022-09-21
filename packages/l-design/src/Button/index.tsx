import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { FC } from 'react';
import type { ButtonProps } from './type.d';

const Button: FC<ButtonProps> = (props) => {
  const buttonClass = classNames(props.className);

  return (
    <button className={buttonClass}>
      {<LoadingOutlined />} {props.children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
