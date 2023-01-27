import type { FC } from 'react';
import type { SpinLoadingProps } from './spin-loading1';
import { SpinSizeArr } from './spin-loading1';

const Loading1: FC<SpinLoadingProps> = ({ fill, size }) => {
  return (
    <svg width={SpinSizeArr[size]} height={SpinSizeArr[size]} viewBox="0 0 50 50">
      <path
        fill={fill}
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Loading1;
