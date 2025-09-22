import type { RcFile } from 'antd/lib/upload';

// 检查文件类型
export function checkFileType(file: File, accept?: string) {
  // 支持所有类型
  if (!accept || !accept.trim() || accept === '*') {
    return true;
  }
  let ret = false;
  // 第一种方法
  // const types = accept
  // .toLowerCase()
  // .split(/,(\s+)?/)
  // .map((item) => item.trim())
  // .filter(Boolean);

  // 第二种方法 (?:x)表示不存储匹配的值x(只匹配不捕获) 在正则分割字符串为数组的时候()，可以使用/(?:)/来分隔单个字符
  const types = accept.toLowerCase().split(/,(?:\s+)?/);
  // .doc .docx .jpg .png
  types.some((type) => {
    if (
      file.type === type ||
      (type.indexOf('.') === 0 && file.name.toLowerCase().slice(file.name.length - type.length) === type)
    ) {
      ret = true;
    } else if (type.includes('/*') && file.type.includes('/')) {
      //  image/* 匹配所有图片类型
      const match = type.match(/(.*)\/\*/);
      const fileParentType = file.type.split('/')[0];
      if (match && match[1] === fileParentType) {
        ret = true;
      }
    }
    return ret;
  });

  return ret;
}

// 检查文件大小
export function checkFileSize(file: File, size: number) {
  return file.size > size;
}

// 图片转base64
export const getBase64 = (img: RcFile): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result as string));
    reader.readAsDataURL(img);
  });
};

// 缓存 URL.createObjectURL 清理内存
const urlCache: Record<string, Record<string, string>> = {};

export const createFileUrl = (ukey: string, uid: string, file: File): string => {
  if (!urlCache[ukey]) {
    urlCache[ukey] = {};
  }
  if (!urlCache[ukey][uid]) {
    urlCache[ukey][uid] = URL.createObjectURL(file);
  }
  return urlCache[ukey][uid];
};

export const removeFileUrl = (ukey: string, uid?: string): void => {
  if (!urlCache[ukey]) return;
  setTimeout(() => {
    if (uid) {
      if (urlCache[ukey][uid]) {
        URL.revokeObjectURL(urlCache[ukey][uid]);
      }
      delete urlCache[ukey][uid];
    } else {
      const uids = Object.keys(urlCache[ukey]);
      uids.forEach((item) => {
        URL.revokeObjectURL(urlCache[ukey][item]);
      });
      delete urlCache[ukey];
    }
  }, 100);
};
