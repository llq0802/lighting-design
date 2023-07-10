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
