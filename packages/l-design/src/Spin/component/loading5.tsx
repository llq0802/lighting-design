import type { FC } from 'react';
import type { SpinLoadingProps } from './loading1';
import { SpinSizeArr } from './loading1';

const SpinSizeObj = {
  small: 18,
  default: 24,
  large: 42,
};

const loading3: FC<SpinLoadingProps> = ({ fill, size }) => {
  return (
    <svg width={SpinSizeObj[size]} height={SpinSizeArr[size]} viewBox="0 0 24 30">
      <rect x="0" y="13" width="4" height="5" fill={fill}>
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="13" width="4" height="5" fill={fill}>
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="13" width="4" height="5" fill={fill}>
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default loading3;
