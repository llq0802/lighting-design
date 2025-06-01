import { useRequest, useUpdateEffect } from 'ahooks';
import { useRef } from 'react';
import LForm, { useLFormContext } from './Form';
import type { LFormItemSelectProps } from './FormItemSelect';

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

// 是否手动请求
const isManual = (options: any[] | undefined, autoRequest: boolean) => {
  if (options?.length) {
    return true;
  }
  return !autoRequest;
};
/**
 * 通过异步请求获取组件的 options
 */
export const useRequestOptions = ({
  options,
  request,
  requestOptions,
  refreshDeps,
  autoRequest = true,
  initialValue,
  name,
}: {
  options?: any[];
  request?: LFormItemSelectProps['request'];
  requestOptions?: LFormItemSelectProps['requestOptions'];
  refreshDeps?: any[];
  autoRequest?: boolean;
  initialValue?: any;
  name: string;
}) => {
  const from = LForm.useFormInstance();
  const { initialValues } = useLFormContext();
  useUpdateEffect(() => {
    if (refreshDeps && refreshDeps?.length > 0) {
      from.setFieldValue(name, initialValue ?? initialValues?.[name] ?? void 0);
    }
  }, [...(refreshDeps || [])]);

  const requestRes = useRequest(
    async (...args) => {
      if (request) {
        const result = await request(...args);
        return result;
      }
      return [];
    },
    { manual: isManual(options, autoRequest), refreshDeps, ...requestOptions },
  );
  return requestRes;
};
