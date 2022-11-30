// 标准化输入非空白符
export const normalizeWhiteSpace = (value: string) => {
  return value.replace(/\s/g, '');
};
