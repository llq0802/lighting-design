import type { DependencyList } from 'react';
import { useRef } from 'react';
import { depsSame } from '../utils';

/**
 * 代替useRef useMemo useCallback的缓存依赖钩子
 * @param factory
 * @param deps
 * @returns
 */
export default function useCreate<T>(factory: () => T, deps: DependencyList) {
  const { current } = useRef({
    deps,
    data: undefined as undefined | T,
    isFirstRender: true,
  });
  if (current.isFirstRender || !depsSame(current.deps, deps)) {
    current.deps = deps;
    current.data = factory();
    current.isFirstRender = false;
  }
  return current.data as T;
}
