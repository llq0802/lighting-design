import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

type SizeType = TableProps<any>['size'];

export type TableContextProps = {
  rootRef?: RefObject<HTMLDivElement>;
  size?: SizeType;
  setSize?: Dispatch<SetStateAction<'small' | 'middle' | 'large' | undefined>>;
  columns?: TableProps<any>['columns'];
  setColumns?: Dispatch<SetStateAction<ColumnsType<Record<string, any>>>>;
  reload?: () => void;
  setFullScreen?: Dispatch<SetStateAction<boolean>>;
};

const TableContext = createContext<TableContextProps>({});

export default TableContext;
