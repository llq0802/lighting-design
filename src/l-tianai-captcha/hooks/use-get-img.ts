import { useRequest } from 'ahooks';

export function useGetImg(
  fn: () => Promise<{
    id: string;
    backgroundImage: string;
    templateImage: string;
    backgroundImageWidth: number;
    backgroundImageHeight: number;
    templateImageWidth: number;
    templateImageHeight: number;
  }>,
) {
  const res = useRequest(async () => {
    return await fn?.();
  });
  return res;
}
