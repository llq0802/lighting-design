import { Button, Space } from 'antd';
import { LFileViewer } from 'lighting-design';
import * as React from 'react';

const data = {
  image: {
    url: '/test.jpg',
    fileName: 'test.jpg',
    fileType: 'image',
  },
  audio: {
    url: '/test.mp3',
    fileName: 'test.mp3',
    fileType: 'audio',
  },
  video: {
    url: '/test.mp4',
    fileName: 'test.mp4',
    fileType: 'video',
  },
  pdf: {
    url: '/test.pdf',
    fileName: 'test.pdf',
    fileType: 'pdf',
  },
  word: {
    url: '/test.docx',
    fileName: 'test.docx',
    fileType: '',
  },
  excel: {
    url: '/test.xlsx',
    fileName: 'test.xlsx',
    fileType: '',
  },
};

function Demo2() {
  const [open, setOpen] = React.useState(false);
  const [previewInfo, setPreviewInfo] = React.useState<{
    url: string;
    fileName: string;
    fileType: string;
  }>({
    url: '',
    fileName: '',
    fileType: '',
  });
  const preview = (type: string) => {
    setPreviewInfo(data[type]);
    setOpen(true);
  };

  return (
    <Space>
      <Button onClick={() => preview('image')}>预览图片</Button>
      <Button onClick={() => preview('audio')}>预览音频</Button>
      <Button onClick={() => preview('video')}>预览视频</Button>
      <Button onClick={() => preview('pdf')}>预览pdf</Button>
      <Button onClick={() => preview('word')}>预览word</Button>
      <Button onClick={() => preview('excel')}>预览excel</Button>
      <LFileViewer {...previewInfo} open={open} onCancel={() => setOpen(false)} />
    </Space>
  );
}

export default Demo2;
