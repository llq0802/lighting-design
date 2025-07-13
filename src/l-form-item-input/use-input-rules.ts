import { BANCK_CARD_REG, CHINESE_REG, EMAIL_REG, ID_CARD_REG, PHONE_REG, URL_REG } from 'lighting-design/constants';

export default function useInputRules({
  type = 'text',
  required,
  message,
  min,
  max,
}: {
  type?: string;
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
}) {
  if (type === 'text' && min && max) {
    return [
      {
        required: required ?? true,
        min,
        max,
        message: message || `请输入 ${min} 到 ${max} 位字符!`,
      },
    ];
  }

  if (type === 'phone') {
    return [
      {
        required,
        message: message || `请输入正确的手机号格式!`,
        pattern: PHONE_REG,
      },
    ];
  }
  if (type === 'idCard') {
    return [
      {
        required,
        message: message || '请输入正确的身份证格式!',
        pattern: ID_CARD_REG,
      },
    ];
  }
  if (type === 'url') {
    return [
      {
        required,
        message: message || '请输入正确的URL网址格式!',
        pattern: URL_REG,
      },
    ];
  }
  if (type === 'bankCard') {
    return [
      {
        required,
        message: message || '请输入正确的银行卡格式!',
        pattern: BANCK_CARD_REG,
      },
    ];
  }
  if (type === 'email') {
    return [
      {
        required,
        message: message || '请输入正确的邮箱格式!',
        pattern: EMAIL_REG,
      },
    ];
  }
  if (type === 'chinese') {
    return [
      {
        required,
        message: message || '请输入中文汉字!',
        pattern: CHINESE_REG,
      },
    ];
  }
  return void 0;
}
