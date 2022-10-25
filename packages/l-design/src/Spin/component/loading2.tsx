import type { FC } from 'react';
import type { SpinLoadingProps} from './loading1';
import { SpinSizeArr } from './loading1';

const loading2: FC<SpinLoadingProps> = ({ fill, size }) => {
  return (
    <svg width={SpinSizeArr[size]} height={SpinSizeArr[size]} viewBox="0 0 50 50">
      <path
        fill={fill}
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.7s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default loading2;
