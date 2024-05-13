import { Tooltip } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';

export const useIntersectionObserver = (domRef) => {
  const [intersecting, setIntersecting] = useState(false);

  const intersectionObserver = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        setIntersecting(entries.some((item) => item.isIntersecting));
      }),
    [],
  );

  useEffect(() => {
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (domRef.current) {
      intersectionObserver.observe(domRef.current);
    }
  }, [domRef.current]);

  return {
    intersecting,
    disconnect: () => {
      intersectionObserver.disconnect();
    },
  };
};

function TableEllipsisCell({ value }) {
  const boxRef = useRef();

  const [open, setOpen] = useState(false);

  // 当文本超出宽度时，显示tooltip
  function onOpenChange(flag) {
    if (flag) {
      // 判断文本是否超出
      if (boxRef.current.offsetWidth < boxRef.current.scrollWidth) {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  }

  return (
    <Tooltip open={open} onOpenChange={onOpenChange} title={value}>
      <div
        ref={boxRef}
        style={{
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </div>
    </Tooltip>
  );
}

export default TableEllipsisCell;
