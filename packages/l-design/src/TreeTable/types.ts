import type { ReactNode } from 'react';

export type LTreeTableDataItem = {
  label?: ReactNode;
  value?: string | number;
  disabled?: boolean;
  children?: LTreeTableDataItem[];
  [key: string]: any;
};

export type LTreeTableData = LTreeTableDataItem[];

export type LTreeTableFieldNames = {
  label?: string;
  value?: string;
  children?: string;
};
