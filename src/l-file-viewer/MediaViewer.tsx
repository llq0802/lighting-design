import classnames from 'classnames';
import { isFunction } from 'lighting-design/utils';
import type { FunctionComponent } from 'react';
import { createElement, useEffect, useRef } from 'react';
interface MediaViewerProps {
  url: string;
  mediaType: 'audio' | 'video';
  contentProps?: Record<string, any>;
}

const MediaViewer: FunctionComponent<MediaViewerProps> = ({ url, mediaType, contentProps }) => {
  const mediaRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    const target = mediaRef.current;
    // 关闭播放
    return () => {
      if (target && target.played) {
        target.pause();
      }
    };
  }, []);

  return createElement(mediaType, {
    src: url,
    controls: true,
    ...contentProps,
    className: classnames(`lightd-file-viewer-${mediaType}`, contentProps?.className),
    style: { width: '100%', ...contentProps?.style },
    ref: (evt: HTMLVideoElement | undefined) => {
      mediaRef.current = evt;
      if (contentProps?.ref) {
        if (isFunction(contentProps?.ref)) {
          // @ts-ignore
          contentProps?.ref?.(evt);
        } else {
          contentProps.ref.current = evt;
        }
      }
    },
  });
};

export default MediaViewer;
