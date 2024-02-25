import { useRequest } from 'ahooks';
import { useRef } from 'react';
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
}: {
  options?: any[];
  request?: LFormItemSelectProps['request'];
  requestOptions?: LFormItemSelectProps['requestOptions'];
  refreshDeps?: any[];
  autoRequest?: boolean;
}) => {
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

// /**
//  * 更新依赖项的值并重新请求
//  */
// export const useDependencies = ({
//   dependencies,
//   dependenciesObj,
//   request,
//   run,
//   form,
//   name,
// }: {
//   dependencies: string[];
//   dependenciesObj?: Record<string, any>;
//   request: SelectWrapperProps['request'];
//   form: FormInstance;
//   name: FormItemProps['name'];
//   run: Result<any, any>['run'];
// }): {
//   dependValues: any[];
// } => {
//   const dependValues = useMemo(() => {
//     if (!request || !dependencies?.length || !dependenciesObj) return [];
//     return dependencies
//       ?.map((k: string) => dependenciesObj[k])
//       .filter((it: any) => it !== void 0 && it !== null && it !== '');
//   }, [dependencies, dependenciesObj]);

//   useDeepUpdateEffect(() => {
//     if (!request || !dependencies?.length || !dependenciesObj) return;
//     form.setFieldValue(name, void 0);
//     run(...dependValues);
//   }, [dependenciesObj]);

//   return {
//     dependValues,
//   };
// };
