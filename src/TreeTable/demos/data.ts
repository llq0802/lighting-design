export const data1 = [
  {
    label: '一级目录-1',
    value: '1',
    children: [
      {
        label: '二级目录-1-1',
        value: '1-1',
        children: [
          { label: '三级目录-1-1-1', value: '1-1-1' },
          { label: '三级目录-1-1-2', value: '1-1-2' },
          { label: '三级目录-1-1-3', value: '1-1-3' },
        ],
      },
      { label: '二级目录-1-2', value: '1-2' },
    ],
  },
  {
    label: '一级目录-2',
    value: '2',
    children: [
      {
        value: '2-1',
        label: '二级目录-2-1',
        children: [
          { value: '2-1-1', label: '三级目录-2-1-1' },
          { value: '2-1-2', label: '三级目录-2-1-2' },
          { value: '2-1-3', label: '三级目录-2-1-3', disabled: true },
        ],
      },
      {
        value: '2-2',
        label: '二级目录-2-2',
        disabled: true,
        children: [
          { value: '2-2-1', label: '三级目录-2-2-1' },
          { value: '2-2-2', label: '三级目录-2-2-2' },
        ],
      },
      {
        label: '二级目录-2-3',
        value: '2-3',
        children: [{ value: '2-3-1', label: '三级目录-2-3-1' }],
      },
    ],
  },
];

export const data2 = [
  {
    label: '一级目录-1',
    value: '1',
    children: [
      {
        label: '二级目录-1-1',
        value: '1-1',
        children: [
          { label: '三级目录-1-1-1', value: '1-1-1' },
          {
            label: '三级目录-1-1-2',
            value: '1-1-2',
            children: [{ label: '四级目录-1-1-1-1', value: '1-1-1-1' }],
          },
          { label: '三级目录-1-1-3', value: '1-1-3' },
        ],
      },
      { label: '二级目录-1-2', value: '1-2' },
    ],
  },
  {
    label: '一级目录-2',
    value: '2',
    children: [
      {
        value: '2-1',
        label: '二级目录-2-1',
        children: [
          { value: '2-1-1', label: '三级目录-2-1-1' },
          { value: '2-1-2', label: '三级目录-2-1-2' },
          { value: '2-1-3', label: '三级目录-2-1-3' },
        ],
      },
      {
        value: '2-2',
        label: '二级目录-2-2',
        children: [
          { value: '2-2-1', label: '三级目录-2-2-1' },
          { value: '2-2-2', label: '三级目录-2-2-2' },
        ],
      },
      {
        label: '二级目录-2-3',
        value: '2-3',
        children: [{ value: '2-3-1', label: '三级目录-2-3-1' }],
      },
      {
        label: '二级目录-2-4',
        value: '2-4',
        children: [{ value: '2-4-1', label: '三级目录-2-4-1' }],
      },
    ],
  },
];

export const data3 = [
  {
    name: '一级目录-1',
    id: '1',
    childs: [
      {
        name: '二级目录-1-1',
        id: '1-1',
        childs: [
          { name: '三级目录-1-1-1', id: '1-1-1' },
          { name: '三级目录-1-1-2', id: '1-1-2' },
          { name: '三级目录-1-1-3', id: '1-1-3' },
        ],
      },
      { name: '二级目录-1-2', id: '1-2' },
    ],
  },
  {
    name: '一级目录-2',
    id: '2',
    childs: [
      {
        id: '2-1',
        name: '二级目录-2-1',
        childs: [
          { id: '2-1-1', name: '三级目录-2-1-1' },
          { id: '2-1-2', name: '三级目录-2-1-2' },
        ],
      },
      {
        id: '2-2',
        name: '二级目录-2-2',
        childs: [{ id: '2-2-1', name: '三级目录-2-2-1' }],
      },
    ],
  },
];

export const data4 = [
  {
    label: '一级目录-1',
    value: '1',
    children: [
      {
        label: '二级目录-1-1',
        value: '1-1',
        children: [
          {
            label: '三级目录-1-1-1',
            value: '1-1-1',

            children: [
              { label: '操作-1', value: '1-1-1-1' },
              { label: '操作-2', value: '1-1-1-2' },
            ],
          },
          { label: '三级目录-1-1-2', value: '1-1-2' },
          { label: '三级目录-1-1-3', value: '1-1-3' },
        ],
      },
      { label: '二级目录-1-2', value: '1-2' },
    ],
  },
  {
    label: '一级目录-2',
    value: '2',
    children: [
      {
        value: '2-1',
        label: '二级目录-2-1',
        children: [
          { value: '2-1-1', label: '三级目录-2-1-1' },
          { value: '2-1-2', label: '三级目录-2-1-2' },
        ],
      },
      {
        value: '2-2',
        label: '二级目录-2-2',
        children: [
          { value: '2-2-1', label: '三级目录-2-2-1' },
          { value: '2-2-2', label: '三级目录-2-2-2' },
        ],
      },
    ],
  },
];
