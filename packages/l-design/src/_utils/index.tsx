/**
 *  模拟请求
 * @param time
 * @param data
 * @returns
 */

export function awaitTime(data?: any, time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
