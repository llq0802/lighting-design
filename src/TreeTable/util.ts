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
      if (item.children?.length > 0) {
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

  const list: Record<string, any> = [];

  // 合并行数缓存
  let rowSpanCache: Record<
    string,
    {
      hasChildren?: boolean;
      len: number;
      parentValue: string | null;
      value: string;
    }
  > = {};

  function recursion(
    childList: TreeTableData,
    prevData = {},
    parentValue = null,
    index = 0,
  ) {
    childList.forEach((item: Record<string, any>, i) => {
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
        recursion(children, newValue, id, index + 1);
      }
    });
  }

  recursion(data);

  // console.log('***rowSpanCache***', rowSpanCache);
  const rowSpanCache1 = processRowSpan1(rowSpanCache);

  // const rowSpanCache1 = processRowSpan1(rowSpanCache);

  // console.log('rowSpanCache1+++', rowSpanCache1);

  // 记录需要合并的行数
  const recordRowSpanValues = [];

  // 列数据
  const columns: Record<string, any> = [];

  // 防止不同层级数据错误
  // for (let i = 0; i <= lastColumnIndex; i++) {
  //   columns.push({ dataIndex: `col-${i}` });

  //   for (let j = 0; j < list.length; j++) {
  //     const itemData = list[j][`col-${i}`];

  //     if (!itemData) {
  //       list[j][`col-${i}`] = {
  //         [valueKey]: null,
  //         data: [],
  //         rowSpan: 1,
  //       };
  //     } else {
  //       const currValue = list[j][`col-${i}`][valueKey];
  //       let currRowSpan = 1;

  //       if (!recordRowSpanValues.includes(currValue)) {
  //         recordRowSpanValues.push(currValue);
  //         currRowSpan = rowSpanCache[currValue].len;
  //       } else if (rowSpanCache[currValue].len > 1) {
  //         currRowSpan = 0;
  //       }
  //       list[j][`col-${i}`] = {
  //         ...list[j][`col-${i}`],
  //         rowSpan: currRowSpan,
  //       };
  //     }
  //   }
  // }

  // console.log('recordRowSpanValues', recordRowSpanValues);
  // console.log('list', list);

  // console.log('columns', columns);
  // console.log('list', list);
  return { columns, list };
}

function processRowSpan1(data) {
  const cloneData = JSON.parse(JSON.stringify(data));
  console.log('cloneData', cloneData);
  const childNodes = []; // 保存所有没有children的项

  for (const key in cloneData) {
    if (cloneData.hasOwnProperty(key)) {
      if (!cloneData[key].hasChildren) {
        childNodes.push(cloneData[key]);
      }
      // childNodes.push(cloneData[key]);
    }
  }
  const recordAddChildNodes = new Set();

  console.log('childNodes', childNodes);
  // 3+1-1
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

  console.log('recordAddChildNodes', recordAddChildNodes);

  childNodes.forEach((item) => {
    recursion(item);
  });

  // const newChildNodes = childNodes.reduce((prev, cur, index) => {
  //   console.log('cur', cur);

  //   if (!cur.parentValue) {
  //     prev[cur.value] = [];
  //   }

  //   if (cloneData[cur.parentValue].parentValue) {
  //     recursion(cloneData[cur.parentValue]);
  //   }

  //   if (!cur.hasChildren) {
  //     prev[cur.parentValue]?.push(cur);
  //   }

  //   return prev;
  // }, {});

  // console.log('newChildNodes', newChildNodes);
  // childNodes.forEach((item) => {
  //   let count = 0;
  //   for (const key in cloneData) {
  //     // if (cloneData[key].parentValue && !cloneData[key].hasChildren) {
  //     //   count += 1;
  //     //   cloneData[item.value].len = count;
  //     // }
  //   }
  // });

  // console.log('count', count);
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
