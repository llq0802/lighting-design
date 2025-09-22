import { UploadOutlined } from '@ant-design/icons';
import Uppy from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Tus from '@uppy/tus';
import { Button, Upload, message } from 'antd';
import { useRef } from 'react';

const CustomUppyUploader = () => {
  const uppyRef = useRef(null);

  // 初始化 Uppy 实例
  const initializeUppy = () => {
    if (!uppyRef.current) {
      uppyRef.current = new Uppy({
        autoProceed: true,
        restrictions: {
          maxFileSize: 1024 * 1024 * 1024, // 限制最大文件大小为1GB
          maxNumberOfFiles: 5, // 最大文件数量
        },
        onProgress: (progress) => console.log(`整体进度: ${progress.percentage.toFixed(2)}%`),
      }).use(Tus, {
        endpoint: 'https://tusd.tusdemo.net/files/', // 替换为你自己的 tus server
        resume: true,
        retryDelays: [0, 1000, 3000, 5000],
      });

      // 监听上传完成事件
      uppyRef.current.on('complete', (result) => {
        console.log('Upload complete! We’ve uploaded these files:', result.successful);
        message.success('文件上传成功');
      });

      // 监听错误事件
      uppyRef.current.on('error', (err) => {
        console.error('Upload error:', err);
        message.error('文件上传失败，请重试');
      });
    }
  };

  // 处理文件选择
  const handleBeforeUpload = (file) => {
    initializeUppy();
    uppyRef.current.addFile({
      name: file.name,
      type: file.type,
      data: file,
    });

    return false; // 返回 false 阻止默认上传行为
  };

  return (
    <>
      {/* 使用 Ant Design 的 Upload 组件来触发文件选择 */}
      <Upload beforeUpload={handleBeforeUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>

      {/* 可选：显示 Uppy 的 Dashboard UI 组件 */}
      {/* <Dashboard uppy={uppyRef.current} /> */}
    </>
  );
};

export default CustomUppyUploader;
