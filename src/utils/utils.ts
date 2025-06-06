import { version } from 'antd';
import { compare } from 'compare-versions';
import { isPlainObject } from 'lodash-es';
import rfdc from 'rfdc';

/**
 * 是否为偶数
 */
export const isEvenNumber = (n: number) => n % 2 === 0;
/**
 * 是否 number
 */
export const isNumber = (val: any) => !window.isNaN(parseFloat(val));

/**
 * 快速深克隆函数
 */
export const fastDeepClone = rfdc();
/**
 * 判断一个值是不是真值 `( 0 算真值 )`
 */
export const isValueTrue = (v: any) => {
  if (v === 0) return true;
  return !!v;
};

/**
 * 验证值是否为合法值
 * @description`'' NaN false undefined null [] {} {a:''}` 均不合法,  `0 合法 {num:0}`
 * @example isLegalValue(NaN) => false
 */
export const isLegalValue = (value: any) => {
  if (value === 0) return true;
  if (Array.isArray(value)) {
    if (!value?.length) return false;
    return value.filter((item: any) => !!item || item === 0)?.length > 0;
  }
  if (isPlainObject(value)) {
    return Object.values(value).filter((item: any) => !!item || item === 0)?.length > 0;
  }
  return !!value;
};

/**
 * 生成唯一 id
 */
export const uniqueId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 13; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const timestamp = Date.now();
  return `${result}-${timestamp}`;
};

/** 获取`antd`版本是否大于等于`5.14.0`*/
export const isAntdVersionMoreThan514 = compare(version, '5.14.0', '>=');
