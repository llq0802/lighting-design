/**
 *  模拟请求
 * @param time
 * @param data
 * @returns
 */

export function awaitTime(
  data?: any,
  time = 1000,
): Promise<{
  data?: any;
  success: boolean;
  code: string;
  msg: string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data, success: true, code: '200', msg: '' });
    }, time);
  });
}

export const getRandomNumber = (min: number = 1, max: number = 300) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
