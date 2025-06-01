import { Tooltip } from 'antd';
import { useRef, useState } from 'react';
// 待使用
function EllipsisCell({ value }) {
  const boxRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  // 当文本超出宽度时，显示tooltip
  function onOpenChange(flag) {
    if (flag) {
      // 判断文本是否超出
      if (boxRef.current!.offsetWidth < boxRef.current!.scrollWidth) {
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

export default EllipsisCell;
