import {
  BANCK_CARD_REG,
  CHINESE_REG,
  EMAIL_REG,
  ID_CARD_REG,
  PHONE_REG,
  URL_REG,
} from 'lighting-design/constants';

export default function useRules(
  type: string,
  required: boolean,
  placeholder?: string,
) {
  let rules: any[] | undefined = undefined;
  if (type === 'phone') {
    rules = [
      {
        required,
        message: placeholder || `请输入正确的手机号格式!`,
        pattern: PHONE_REG,
      },
    ];
  }
  if (type === 'idCard') {
    rules = [
      {
        required,
        message: placeholder || '请输入正确的身份证格式!',
        pattern: ID_CARD_REG,
      },
    ];
  }
  if (type === 'url') {
    rules = [
      {
        required,
        message: placeholder || '请输入正确的URL网址格式!',
        pattern: URL_REG,
      },
    ];
  }

  if (type === 'bankCard') {
    rules = [
      {
        required,
        message: placeholder || '请输入正确的银行卡格式!',
        pattern: BANCK_CARD_REG,
      },
    ];
  }
  if (type === 'email') {
    rules = [
      {
        required,
        message: placeholder || '请输入正确的邮箱格式!',
        pattern: EMAIL_REG,
      },
    ];
  }

  if (type === 'chinese') {
    rules = [
      {
        required,
        message: placeholder || '请输入中文汉字!',
        pattern: CHINESE_REG,
      },
    ];
  }

  return rules;
}
