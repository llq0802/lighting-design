import { PenpalParent } from '@weblivion/react-penpal';
import type { PenpalParentProps } from '@weblivion/react-penpal/dist/PenpalParent';
import type { Methods, RemoteProxy, Reply } from 'penpal';
import { useEffect, useState, type FC } from 'react';

type ChildMethods = {
  hi: (s: string) => Reply<string>;
};

type LIframeProps<T extends Methods = any> = PenpalParentProps & {
  actionRef?: React.MutableRefObject<RemoteProxy<T>>;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
};
const LIframe: FC<LIframeProps> = ({
  actionRef,
  style,
  width = '100%',
  height = '100%',
  onError,
  methods,
  allowedOrigins,
  timeout,
  log,
  ...rest
}) => {
  const [child, setChild] = useState<RemoteProxy<ChildMethods>>(null!);
  // useImperativeHandle(actionRef, () => child);

  useEffect(() => {
    if (!child) {
      return;
    }

    actionRef.current = child;
    console.log('===actionRef==>', actionRef.current);
  }, [child]);

  return (
    <PenpalParent
      {...rest}
      width={width}
      height={height}
      // @ts-ignore
      setChild={setChild}
      allowedOrigins={allowedOrigins}
      methods={methods}
      timeout={timeout}
      onError={onError}
      style={{ width, height, border: 'none', ...style }}
    />
  );
};

export default LIframe;
