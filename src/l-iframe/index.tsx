import { PenpalParent, usePenpalParent } from '@weblivion/react-penpal';
import { memo, type FC } from 'react';

export const useLIframeParent = usePenpalParent;

export type LIframeProps = Omit<Parameters<typeof PenpalParent>[0], 'setChild'> & {
  setChildMethods: React.Dispatch<React.SetStateAction<any>>;
};

const LIframe: FC<LIframeProps> = ({
  width = '100%',
  height = '100%',
  onError,
  methods,
  allowedOrigins,
  timeout,
  log,
  setChildMethods,
  ...rest
}) => {
  return (
    <PenpalParent
      {...rest}
      setChild={setChildMethods}
      width={width}
      height={height}
      allowedOrigins={allowedOrigins}
      methods={methods}
      timeout={timeout}
      onError={onError}
      style={{ width, height, border: 'none', ...rest?.style }}
    />
  );
};

export default memo(LIframe);
