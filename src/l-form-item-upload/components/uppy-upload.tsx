import { UploadOutlined } from '@ant-design/icons';
import Uppy from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import { Button, Upload } from 'antd';
import { useEffect, useRef } from 'react';

const UppyUploader = () => {
  const uppyRef = useRef(null);

  // 在组件挂载时初始化 Uppy 实例
  useEffect(() => {
    uppyRef.current = new Uppy({
      autoProceed: true, // 配置 autoProceed 选项
      restrictions: {
        maxFileSize: 1024 * 1024 * 1024, // 限制最大文件大小为1GB
      },
    }).use(XHRUpload, {
      endpoint: 'https://your-server.com/upload', // 替换为你的服务器地址
      fieldName: 'files[]',
    });

    return () => uppyRef.current.close(); // 清理函数，在组件卸载时关闭 Uppy
  }, []);

  const handleBeforeUpload = (file) => {
    uppyRef.current
      .addFile({
        name: file.name,
        type: file.type,
        data: file,
      })
      .then((result) => {
        console.log('Upload complete', result);
      })
      .catch((err) => {
        console.error('Upload error', err);
      });

    return false; // 返回 false 阻止默认上传行为
  };

  return (
    <>
      <Upload beforeUpload={handleBeforeUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
      {/* 可选：显示 Uppy 的 Dashboard */}
      <Dashboard uppy={uppyRef.current} />
    </>
  );
};

export default UppyUploader;
