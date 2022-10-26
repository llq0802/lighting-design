import { useState } from 'react';

/**
 * 并发请求函数
 * @param {*} urls
 * @param {*} max
 * @return {*}
 */
export default function useConcurrentRequest(urls: string, max: number = 2) {
  const [loading, setLoading] = useState(false);

  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }

    const result: any[] = [];
    let index = 0,
      count = 0;

    async function request() {
      if (index === urls.length) return;
      const i = index,
        curURL = urls[index];
      index++;
      try {
        setLoading(true);
        const ret = await fetch(curURL);
        result[i] = ret;
      } catch (err) {
        result[i] = err;
      } finally {
        count++;
        if (count === urls.length) {
          setLoading(false);
          resolve(result);
        }
        request();
      }
    }

    const num = Math.min(max, urls.length);
    for (let s = 0; s < num; s++) {
      request();
    }
  });
}
