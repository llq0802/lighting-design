// 检查文件类型
export function checkFileType(file: File, accept?: string) {
  // 支持所有类型
  if (!accept || !accept.trim() || accept === '*') {
    return true;
  }
  let ret = false;
  const types = accept.toLowerCase().split(/,(?:\s+)?/);
  // .doc .docx .jpg .png
  types.some((type) => {
    if (
      file.type === type ||
      (type.indexOf('.') === 0 &&
        file.name.toLowerCase().substring(file.name.length - type.length) === type)
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
  return file.size < size;
}

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
};
