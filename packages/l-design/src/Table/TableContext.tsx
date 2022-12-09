import type { TableProps } from 'antd';
import { createContext } from 'react';

type SizeType = TableProps<any>['size'];

export type TableContextProps = {
  size?: SizeType;
  setSize?: (size: SizeType) => void;
  reload?: () => void;
  rootRef?: React.RefObject<HTMLDivElement>;
  columns?: TableProps<any>['columns'];
  setColumns?: (columns: TableProps<any>['columns']) => void;
};

const TableContext = createContext<TableContextProps>({});

export default TableContext;
