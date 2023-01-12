/**
 *  模拟请求
 * @param time
 * @param data
 * @returns
 */
export function awaitTime(time = 2000, data?: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
