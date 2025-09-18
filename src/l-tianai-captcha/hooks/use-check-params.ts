import { useRequest } from 'ahooks';

export function useCheckParams(
  fn: (...angs: any[]) => Promise<{
    data?: any;
    success?: boolean;
    code: number;
    msg?: string;
  }>,
  opts,
) {
  const res = useRequest(
    async (...args: any[]) => {
      const res = await fn?.(...args);
      if (!res) return Promise.reject(res);
      return res;
    },
    {
      manual: true,

      ...opts,
    },
  );
  return res;
}
