export const getRandomNumber = (min: number = -10, max: number = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export enum LTianaiCaptchaStatus {
  INVALID = 4000,
  FAIL = 4001,
  SUCCESS = 200,
}
export const LTianaiCaptchaText = {
  [LTianaiCaptchaStatus.INVALID]: '滑块已失效',
  [LTianaiCaptchaStatus.FAIL]: '验证失败，请重新尝试',
  [LTianaiCaptchaStatus.SUCCESS]: '验证成功',
};
