export type ValueType = string | number;

export type LTreeTableDataItem = {
  label?: React.ReactNode;
  value?: ValueType;
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
type RowSpanCache = Record<
  string,
  {
    hasChildren?: boolean;
    len: number;
    parentValue: string | null;
    value: string;
  }
>;
/**
 * 获取树形结构最大的层级
 * @param arr {any[]}
 * @return maxLevel{number}
 */
export const getTreeMaxLevel = (arrs: LTreeTableData) => {
  let maxLevel = 1;

  (function callBack(arr, level) {
    level++;
    maxLevel = Math.max(level, maxLevel);
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item?.children && item.children?.length > 0) {
        callBack(item?.children, level);
      } else {
        continue;
      }
    }
  })(arrs, 0);

  return maxLevel;
};

function transformList({ list, lastColumnIndex, valueKey, rowSpanCache }) {
  const columns = [];
  // 记录已经合并的行数
  const recordRowSpanValues = new Set();

  // 防止不同层级数据错误
  for (let i = 0; i <= lastColumnIndex; i++) {
    columns.push({ dataIndex: `col-${i}` }); // 设置列

    for (let j = 0; j < list.length; j++) {
      const itemData = list[j][`col-${i}`];

      if (!itemData) {
        list[j][`col-${i}`] = {
          [valueKey]: null,
          parentValue: null,
          data: [],
          rowSpan: 1,
        };
      } else {
        const currValue = list[j][`col-${i}`][valueKey];
        let currRowSpan = 1;

        if (!recordRowSpanValues.has(currValue)) {
          // 大部分会走这儿
          recordRowSpanValues.add(currValue);
          currRowSpan = rowSpanCache[currValue].len;
        } else if (rowSpanCache[currValue].len > 1) {
          // 走这儿说明已经重复添加过 所有是直接把后面的合并设为0
          currRowSpan = 0; //
        }
        // 重置设置项中的合并列的数量
        list[j][`col-${i}`] = {
          ...list[j][`col-${i}`],
          rowSpan: currRowSpan,
        };
      }
    }
  }

  return { columns, list };
}

function processRowSpan(data: RowSpanCache): RowSpanCache {
  const cloneData = JSON.parse(JSON.stringify(data));
  const childNodes = []; // 保存所有没有children的项

  for (const key in cloneData) {
    if (cloneData.hasOwnProperty(key)) {
      if (!cloneData[key].hasChildren) {
        childNodes.push(cloneData[key]);
      }
    }
  }
  const recordAddChildNodes = new Set();

  // 3+1-1

  // 2+3-1=4

  // 3+3-1=5
  function recursion(item: any) {
    if (item.parentValue && cloneData[item.parentValue]) {
      cloneData[item.parentValue].len +=
        item.len - (recordAddChildNodes.has(item.value) ? item.len : 1);
      recordAddChildNodes.add(item.value);
      if (cloneData[item.parentValue].parentValue) {
        recursion(cloneData[item.parentValue]);
      }
    }
  }

  childNodes.forEach((item) => {
    recursion(item);
  });

  return cloneData;
}

/**
 * 转化树结构
 * @param data
 * @param lastColumnMerged
 * @param fieldNames
 * @param lastColumnIndex
 * @returns
 */
export function transformTreeToList(
  data: LTreeTableData,
  lastColumnMerged = false,
  fieldNames: LTreeTableFieldNames,
) {
  const { value: valueKey, children: childrenKey } =
    fieldNames as Required<LTreeTableFieldNames>;

  // 合并行数缓存
  let rowSpanCache: RowSpanCache = {};

  const lastColumnIndex = getTreeMaxLevel(data) - 1;

  /**
   *
   * @param childList 树形数组
   * @param prevData 上一次的值
   * @param parentValue  上一次的id
   * @param index 上一次的层级索引
   */
  function recursion(
    childList: LTreeTableData,
    prevData = {},
    parentValue = null,
    index = 0,
    list: Record<string, any>[] = [],
  ) {
    childList.forEach((item: Record<string, any>) => {
      const id = item[valueKey];
      const children = item[childrenKey];
      const newValue: any = {
        ...prevData,
        [`col-${index}`]: {
          [valueKey]: id,
          parentValue,
          data: [{ ...item, [childrenKey]: void 0 }],
        },
      };

      if (!rowSpanCache[id]) {
        rowSpanCache[id] = {
          value: id,
          len: children?.length || 1,
          parentValue,
        };
      }

      // 在最后一层的时候
      if (!children?.length) {
        list.push({
          ...newValue,
          key: `row__${parentValue}__${id}`, // 为Table数据设置唯一key
        });
        rowSpanCache[id].hasChildren = false;
        // 当需要合并最后一行时
      } else if (lastColumnMerged && lastColumnIndex - 1 === index) {
        rowSpanCache[id].len = 1;
        rowSpanCache[id].hasChildren = false;
        list.push({
          ...newValue,
          [`col-${index + 1}`]: {
            [valueKey]: id,
            parent: parentValue,
            data: children,
          },
          key: `row__${parentValue}__${id}`, // 为Table数据设置唯一key
        });
      } else {
        rowSpanCache[id].hasChildren = true;
        recursion(children, newValue, id, index + 1, list);
      }
    });

    return list;
  }

  const dataList = recursion(data);

  const newRowSpanCache = processRowSpan(rowSpanCache);

  return transformList({
    list: dataList,
    lastColumnIndex,
    valueKey,
    rowSpanCache: newRowSpanCache,
  });
}
