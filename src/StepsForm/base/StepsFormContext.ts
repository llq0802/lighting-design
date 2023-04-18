import type { FormInstance } from 'antd';
import type { Dispatch, MutableRefObject } from 'react';
import { createContext } from 'react';

export type StepsFormContextProps = {
  /** 当前步骤 */
  current: number;
  /** 步骤总长度 */
  total: number;
  /** 所有form实例数组 */
  formInstanceListRef: MutableRefObject<FormInstance<any>[]>;
  formInitialValues: MutableRefObject<any[]>;
  /** 获取单个form的数据 */
  onFormFinish: (name: string, values: Record<string, any>) => void;
  /** 下一步 */
  next: () => void;
  /** 上一步 */
  submit: () => void;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  forgetUpdate: () => void;
};

export default createContext<StepsFormContextProps>({});
