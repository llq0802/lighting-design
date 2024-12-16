import { useMemoizedFn } from 'ahooks';
import { useEffect, useRef, useState } from 'react';

function generateRandomString(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

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

  useEffect(() => {
    document.addEventListener('selectionchange', selecthandler);
    return () => {
      document.removeEventListener('selectionchange', selecthandler);
    };
  }, []);

  return {
    rangeObjRef,
    contentId,
  };
}
