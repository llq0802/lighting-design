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
 * 通过异步请求获取组件的 options
 */
export const useRequestOptions = ({
  options,
  request,
  requestOptions,
  refreshDeps,
  autoRequest = true,
}: {
  options?: any[];
  request?: LFormItemSelectProps['request'];
  requestOptions?: LFormItemSelectProps['requestOptions'];
  refreshDeps?: any[];
  autoRequest?: boolean;
}) => {
  // 是否手动请求
  const isManual = () => {
    if (options?.length) {
      return true;
    }
    return !autoRequest;
  };
  const requestRes = useRequest(
    async (...args) => {
      if (request) {
        const result = await request(...args);
        return result;
      }
      return [];
    },
    { manual: isManual(), refreshDeps, ...requestOptions },
  );

  return requestRes;
};
