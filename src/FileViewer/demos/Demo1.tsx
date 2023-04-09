import { Button, Space } from 'antd';
import { LFileViewer } from 'lighting-design';
import { useState } from 'react';
const isDev = process.env.NODE_ENV === 'development';
const publicPath = isDev ? '/' : '/lighting-design/';
const urls = [
  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
];

function Demo1() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <Space>
      <Button onClick={() => setOpen(true)}>预览单张图片</Button>
      <Button onClick={() => setOpen2(true)}>预览多张图片</Button>
      <LFileViewer
        fileType="image"
        url={[`${publicPath}test.jpg`]}
        open={open}
        onOpenChange={setOpen}
      />
      <LFileViewer
        fileType="image"
        url={urls}
        open={open2}
        onOpenChange={setOpen2}
      />
    </Space>
  );
}

export default Demo1;
