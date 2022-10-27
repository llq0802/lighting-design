import { useCallback, useState } from 'react';

type AsyncFnsType = (...args: any[]) => Promise<any>[];

/**
 * 并发请求函数
 * @param {*} asyncFns
 * @param {*} max
 * @return {*}
 */
export default function useConcurrentRequest(asyncFns: AsyncFnsType, max: number = 3) {
  const [loading, setLoading] = useState(false);
  const run = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (asyncFns.length === 0) {
        resolve([]);
        return;
      }
      const result: any[] = [];
      let index = 0, // 获取当前异步函数的索引
        count = 0; // 请求次数

      async function request() {
        if (index === asyncFns.length) return;

        const i = index,
          curFn = asyncFns[index];
        index++;
        try {
          setLoading(true);
          const ret = await curFn();
          result[i] = ret;
        } catch (err) {
          result[i] = err;
          setLoading(false);
          reject(err);
        } finally {
          count++;
          if (count === asyncFns.length) {
            setLoading(false);
            resolve(result);
          }
          request();
        }
      }
      const num = Math.min(max, asyncFns.length);
      for (let s = 0; s < num; s++) {
        request();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    run,
    loading,
  };
}
