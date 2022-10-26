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
    <svg width={SpinSizeObj[size]} height={SpinSizeArr[size]} viewBox="0 0 24 24">
      <rect x="0" y="0" width="4" height="7" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="7" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="7" fill={fill}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="scale"
          values="1,1; 1,3; 1,1"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default loading3;
