import { Button, Space } from 'antd';
import { LFileViewer } from 'lighting-design';
import { useState } from 'react';

const isDev = process.env.NODE_ENV === 'development';
const version = 'latest';
const publicPath = !isDev ? `/lighting-design/${version}/` : '/';

const data = {
  audio: {
    url: `${publicPath}test.mp3`,
    fileName: 'test.mp3',
    fileType: 'audio',
  },
  video: {
    url: `${publicPath}test.mp4`,
    fileName: 'test.mp4',
    fileType: 'video',
  },
  pdf: {
    url: `${publicPath}test.pdf`,
    fileName: 'test.pdf',
    fileType: 'pdf',
  },
  word: {
    url: `${publicPath}test.docx`,
    fileName: 'test.docx',
    fileType: '',
  },
  excel: {
    url: `${publicPath}test.xlsx`,
    fileName: 'test.xlsx',
    fileType: '',
  },
};

function Demo2() {
  const [open, setOpen] = useState(false);
  const [previewInfo, setPreviewInfo] = useState<{
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
      <Button type="primary" onClick={() => preview('audio')}>
        预览音频
      </Button>
      <Button type="primary" onClick={() => preview('video')}>
        预览视频
      </Button>
      <Button type="primary" onClick={() => preview('pdf')}>
        预览pdf
      </Button>
      <Button type="primary" onClick={() => preview('word')}>
        预览word
      </Button>
      <Button type="primary" onClick={() => preview('excel')}>
        预览excel
      </Button>
      <LFileViewer
        {...previewInfo}
        open={open}
        onCancel={() => setOpen(false)}
      />
    </Space>
  );
}

export default Demo2;
