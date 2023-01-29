import { Button } from 'antd';
import { LFileViewer } from 'lighting-design';
import * as React from 'react';

function Demo1() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>预览图片</Button>
      <LFileViewer
        url="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        fileName="美女头像"
        fileType="image"
        open={open}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}

export default Demo1;
