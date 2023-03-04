import type { FunctionComponent } from 'react';
import { createElement, useEffect, useRef } from 'react';

interface MediaViewerProps {
  url: string;
  mediaType: 'audio' | 'video';
}

const MediaViewer: FunctionComponent<MediaViewerProps> = ({ url, mediaType }) => {
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
    className: `lightd-file-viewer-${mediaType}`,
    src: url,
    controls: true,
    style: { width: '100%' },
    ref: mediaRef,
  });
};

export default MediaViewer;
