/**
 *  模拟请求
 */
export function awaitTime(time = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

export const getRandomNumber = (min: number = 1, max: number = 300) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
