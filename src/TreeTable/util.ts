/**
 * 获取树形结构最大的层级
 * @param arr {any[]}
 * @return maxLevel{number}
 */
export const getTreeMaxLevel = (arr) => {
  let maxLevel = 1;

  (function callBack(arr, level) {
    level++;
    maxLevel = Math.max(level, maxLevel);
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.children && item.children.length) {
        callBack(item.children, level);
      } else {
        continue;
      }
    }
  })(arr, 0);

  return maxLevel;
};

export function transformTreeToList(
  data: TreeTableData,
  lastColumnMerged = false,
  fieldNames: TreeTableFieldNames,
  lastColumnIndex: number,
) {
  const { value: valueKey, children: childrenKey } = fieldNames;

  const list = [];

  // 合并行数缓存
  let rowSpanCache = {};

  function recursion(
    childs: TreeTableData,
    prevData = {},
    parentValue = null,
    index = 0,
  ) {
    childs.forEach((item) => {
      const newValue: any = {
        ...prevData,
        [`col-${index}`]: {
          [valueKey]: item[valueKey],
          parent: parentValue,
          data: [{ ...item, [childrenKey]: void 0 }],
        },
      };

      if (!rowSpanCache[item[valueKey]]) {
        rowSpanCache[item[valueKey]] = {
          name: item[valueKey],
          len: item[childrenKey]?.length || 1,
          parent: parentValue,
        };
      }

      // 在最后一层的时候
      if (!item[childrenKey]?.length) {
        list.push({ ...newValue });
        rowSpanCache[item[valueKey]].hasChildren = false;
      } else if (lastColumnMerged && lastColumnIndex - 1 === index) {
        rowSpanCache[item[valueKey]].len = 1;
        rowSpanCache[item[valueKey]].hasChildren = false;

        list.push({
          ...newValue,
          [`col-${index + 1}`]: {
            [valueKey]: item[valueKey],
            parent: parentValue,
            data: item[childrenKey],
          },
        });
      } else {
        rowSpanCache[item[valueKey]].hasChildren = true;
        recursion(item[childrenKey], newValue, item[valueKey], index + 1);
      }
    });
  }

  recursion(data);

  console.log('rowSpanCache---', rowSpanCache);
  // rowSpanCache = processRowSpan(rowSpanCache);

  const rowSpanCache1 = processRowSpan(rowSpanCache);

  console.log('rowSpanCache1+++', rowSpanCache1);

  // 记录需要合并的行数
  const recordRowSpanValues = [];

  // 列数据
  const columns = [];

  // 防止不同层级数据错误
  for (let i = 0; i <= lastColumnIndex; i++) {
    columns.push({ dataIndex: `col-${i}` });

    for (let j = 0; j < list.length; j++) {
      if (!list[j][`col-${i}`]) {
        list[j][`col-${i}`] = {
          [valueKey]: null,
          data: [],
          rowSpan: 1,
        };
      } else {
        const currValue = list[j][`col-${i}`][valueKey];
        let currRowSpan = 1;

        if (!recordRowSpanValues.includes(currValue)) {
          recordRowSpanValues.push(currValue);
          currRowSpan = rowSpanCache[currValue].len;
        } else if (rowSpanCache[currValue].len > 1) {
          currRowSpan = 0;
        }
        list[j][`col-${i}`] = {
          ...list[j][`col-${i}`],
          rowSpan: currRowSpan,
        };
      }
    }
  }

  console.log('recordRowSpanValues', recordRowSpanValues);
  console.log('list', list);

  // console.log('columns', columns);
  // console.log('list', list);
  // return { columns, list };
}

// 处理合并行数
function processRowSpan(data: object) {
  const cloneData = JSON.parse(JSON.stringify(data));
  const childNodes = []; // 保存所有没有children的项
  // 记录已加过的值
  const recordAddChildNodes = new Set();

  for (const key in cloneData) {
    // cloneData[key].name = key;
    if (!cloneData[key].hasChildren) {
      childNodes.push(cloneData[key]);
    }
  }
  // console.log('childNodes', childNodes);

  function recursion(dataItem: any) {
    if (dataItem.parent && cloneData[dataItem.parent]) {
      cloneData[dataItem.parent].len +=
        dataItem.len -
        (recordAddChildNodes.has(dataItem.name)
          ? cloneData[dataItem.name].len
          : 1);

      recordAddChildNodes.add(dataItem.name);

      if (cloneData[dataItem.parent].parent) {
        recursion(cloneData[dataItem.parent]);
      }
    }
  }

  childNodes.forEach((item) => {
    recursion(item);
  });

  return cloneData;
}
