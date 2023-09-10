import type { TableProps } from 'antd';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

type SizeType = TableProps<any>['size'];

export type TableContextProps = {
  rootRef?: RefObject<HTMLDivElement>;
  size?: SizeType;
  setSize?: Dispatch<SetStateAction<'small' | 'middle' | 'large' | undefined>>;
  columns?: TableProps<any>['columns'];
  columnKeys: string[];
  setColumnKeys: React.Dispatch<React.SetStateAction<string[]>>;
  reload?: () => void;
  setFullScreen?: Dispatch<SetStateAction<boolean>>;
};

const TableContext = createContext<TableContextProps>({});

export default TableContext;
