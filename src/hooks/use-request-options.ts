import { useRequest } from 'ahooks';
import { useRef } from 'react';

/**
 * 是否为第一次渲染组件
 */
export const useIsFirstRender = (): boolean => {
  const isFirst = useRef<boolean>(true);
  const { current } = isFirst;
  // 如果是第一次，改变状态并返回true
  if (current) {
    isFirst.current = false;
    return true;
  }
  return current;
};

/**
 * 通过异步请求获取组件的 options
 */
export const useRequestOptions = ({
  request,
  requestOptions,
}: {
  request?: Parameters<typeof useRequest>[0];
  requestOptions?: Parameters<typeof useRequest>[1];
}) => {
  const res = useRequest<
    {
      label: string;
      value: string;
    }[],
    any
  >(
    // @ts-ignore
    async (...args) => {
      if (request) {
        const result = await request(...args);
        return result;
      }
      return [];
    },
    { manual: !request, ...requestOptions },
  );
  return res;
};
