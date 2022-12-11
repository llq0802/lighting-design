import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

type SizeType = TableProps<any>['size'];

export type TableContextProps = {
  size?: SizeType;
  setSize?: Dispatch<SetStateAction<'small' | 'middle' | 'large'>>;
  columns?: TableProps<any>['columns'];
  setColumns?: Dispatch<SetStateAction<ColumnsType<Record<string, any>>>>;
  reload?: () => void;
};

const TableContext = createContext<TableContextProps>({});

export default TableContext;
