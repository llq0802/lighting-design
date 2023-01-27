import type { FC } from 'react';
import type { SpinLoadingProps } from './spin-loading1';
import { SpinSizeArr } from './spin-loading1';

const SpinSizeObj = {
  small: 18,
  default: 24,
  large: 42,
};

const loading3: FC<SpinLoadingProps> = ({ fill, size }) => {
  return (
    <svg width={SpinSizeObj[size]} height={SpinSizeArr[size]} viewBox="0 0 24 30">
      <rect x="0" y="0" width="4" height="10" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="10" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="10" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default loading3;
