import { LFileViewer } from 'lighting-design';
import TestWord from './assets/test.docx';
import TestImage from './assets/test.jpg';
import TestAudio from './assets/test.mp3';
import TestVideo from './assets/test.mp4';
import TestPdf from './assets/test.pdf';
import TestExcel from './assets/test.xlsx';
import TestZip from './assets/test.zip';

const fileList = [
  { url: TestImage, fileName: 'test.jpg', fileType: 'image' },
  { url: TestAudio, fileName: 'test.mp3', fileType: 'audio' },
  { url: TestVideo, fileName: 'test.mp4', fileType: 'video' },
  { url: TestPdf, fileName: 'test.pdf', fileType: 'pdf' },
  { url: TestWord, fileName: 'test.docx', fileType: 'docx' },
  { url: TestExcel, fileName: 'test.xlsx', fileType: 'xlsx' },
  { url: TestZip, fileName: 'test.zip', fileType: 'zip' },
];

const Demo3 = () => {
  return (
    <div>
      <LFileViewer.PictureCard fileList={fileList} />
    </div>
  );
};

export default Demo3;
