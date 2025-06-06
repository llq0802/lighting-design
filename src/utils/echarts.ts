import { emptyArray } from 'lighting-design/constants';

/**
 * rem 宽度适配计算
 */
export const autoFontSize = (size: number, designWidth = 1920) => {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return size;
  const widthRate = clientWidth / designWidth;
  if (!window.isNaN(size)) {
    return +size * widthRate;
  }
  return 14;
};

/**
 * 转化echarts的 option 找到能 resize 的字段
 * @param option echarts option
 * @param changeFields 需要转换的字段
 * @param designWidth 设计宽度
 * @returns 新的 option
 */
export const transformEchartsOption = (
  option: Record<string, any>,
  changeFields: string[] = [],
  designWidth = 1920,
) => {
  if (!changeFields?.length) {
    return option;
  }
  Object.keys(option).forEach((key) => {
    if (changeFields.includes(key)) {
      if (typeof option[key] === 'number') {
        option[key] = autoFontSize(option[key], designWidth);
      }
      if (typeof option[key] === 'string' && !window.isNaN(option[key])) {
        option[key] = autoFontSize(option[key], designWidth);
      }
    }

    if (typeof option[key] === 'object' && option[key] !== null) {
      if (Array.isArray(option[key])) {
        option[key].forEach((item: Record<string, any>) => {
          transformEchartsOption(item, changeFields, designWidth);
        });
      } else {
        transformEchartsOption(option[key], changeFields, designWidth);
      }
    }
  });
  return option;
};

/**
 * 获取组件的 options 属性
 */
export const getOptions = (opt1: any[] = [], opt2: any[] = [], opt3?: any[] | undefined) => {
  if (opt1?.length) return opt1;
  if (opt2?.length) return opt2;
  if (opt3?.length) return opt3;
  return emptyArray;
};
