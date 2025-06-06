/**
 * 获取表格列的每一项唯一 key 值
 * @param col -当前列
 * @param i 索引
 * @returns key数组
 */
export const getTableColumnsKey = (col: Record<string, any>, i: number) =>
  `${col?.dataIndex || ''}-${col.key || ''}-${i}`;
