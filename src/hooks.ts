import { useRequest } from 'ahooks';
import type { Result } from 'ahooks/lib/useRequest/src/types';
import type { FormInstance, FormItemProps } from 'antd';
import { useMemo } from 'react';
import type { LFormItemSelectProps } from './FormItemSelect';
import type { SelectWrapperProps } from './FormItemSelect/base/SelectWrapper';
import useDeepUpdateEffect from './useDeepUpdateEffect';

/**
 * 更新依赖项的值并重新请求
 */
export const useDependencies = ({
  dependencies,
  dependenciesObj,
  request,
  run,
  form,
  name,
}: {
  dependencies: string[];
  dependenciesObj?: Record<string, any>;
  request: SelectWrapperProps['request'];
  form: FormInstance;
  name: FormItemProps['name'];
  run: Result<any, any>['run'];
}): {
  dependValues: any[];
} => {
  const dependValues = useMemo(() => {
    if (!request || !dependencies?.length || !dependenciesObj) return [];
    return dependencies
      ?.map((k: string) => dependenciesObj[k])
      .filter((it: any) => it !== void 0 && it !== null && it !== '');
  }, [dependencies, dependenciesObj]);

  useDeepUpdateEffect(() => {
    if (!request || !dependencies?.length || !dependenciesObj) return;
    form.setFieldValue(name, void 0);
    run(...dependValues);
  }, [dependenciesObj]);

  return {
    dependValues,
  };
};

/**
 * 获取请求的options
 */
export const useRequestOptions = ({
  options,
  request,
  requestOptions,
}: {
  options?: any[];
  request?: SelectWrapperProps['request'];
  requestOptions?: LFormItemSelectProps['requestOptions'];
}) => {
  const requestRes = useRequest(
    async (...args) => {
      if (request) {
        const result = await request(...args);
        return result;
      }
      return [];
    },
    { manual: !!options?.length, ...requestOptions },
  );

  return requestRes;
};
