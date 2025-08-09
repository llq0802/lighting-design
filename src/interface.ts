import type { Result } from 'ahooks/lib/useRequest/src/types';

export type LValueType = string | number | (string | number)[] | undefined;

export type LFormItemActionRef<D = any, P extends any[] = any[]> = Result<D, P>;
