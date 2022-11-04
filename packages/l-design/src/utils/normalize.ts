// // 标准化输入非空白符
// export const normalizeWhiteSpace = (value: string) => {
//   // return normalizeString(value).replace(/\s/g, '');
// };

// // 标准化输入银行卡号
// export const normalizeBankCard = (value: string, format = true) => {
//   // const valueStr = normalizeString(value);
//   const reg = /[^\d]/g;
//   const ret = valueStr.replace(reg, '');
//   // return format ? formatBankCard(ret) : ret;
// };

// // 标准化输入身份证号
// export const normalizeIdCard = (value, format = true) => {
//   // const valueStr = normalizeString(value);
//   const reg = /[^\dx]/gi;
//   const ret = valueStr.replace(reg, '').substring(0, 18);
//   return format ? ret.toUpperCase() : ret;
// };

// // 标准化输入手机号码
// export const normalizeMobile = (value, format = true) => {
//   // const valueStr = normalizeString(value);
//   const reg = /[^\d]/g;
//   const ret = valueStr.replace(reg, '');
//   // return format ? formatMobile(ret) : ret;
// };
