import { useMemoizedFn, useMount } from 'ahooks';
import { generateRandomString } from 'aiagent-utils';
import { useRef, useState } from 'react';

export default function useSelectionChange(readOnly = false) {
  const rangeObjRef = useRef<Range>();
  const [contentId] = useState(() => `a-tag-input-${generateRandomString(10)}`);

  const selecthandler = useMemoizedFn(() => {
    if (readOnly) return;
    const sel = window.parent.getSelection();
    const range = sel ? (sel.rangeCount > 0 ? sel?.getRangeAt(0) : null) : null;
    if (range && document?.activeElement?.id === contentId) {
      rangeObjRef.current = range;
    }
  });

  useMount(() => {
    document.addEventListener('selectionchange', selecthandler);
    return () => {
      document.removeEventListener('selectionchange', selecthandler);
    };
  });

  return {
    rangeObjRef,
    contentId,
  };
}
