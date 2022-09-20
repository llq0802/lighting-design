import type { FC, ReactNode } from 'react';

const Button: FC<ButtonProps> = () => {
  return <button>Button</button>;
};

export default Button;
export interface ButtonProps {
  children: ReactNode;
}
