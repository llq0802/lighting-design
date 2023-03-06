---
title: LTreeTable
order: 2
nav:
  order: 2
  path: /components
---

# LTreeTable

LTreeTable

## 代码演示

```
onst trreData = [
  {
    label: '首页',
    value: 'HOME',
  },
  {
    label: '商户管理',
    value: 'MERCHANT',
    children: [
      {
        label: '商户列表',
        value: 'MERCHANT_LIST',
        children: [
          {
            label: '商户修改',
            value: 'MERCHANT_EDIT',
          },
          {
            label: '查看商户详情',
            value: 'MERCHANT_DETAIL',
          },
          {
            label: '新增商户',
            value: 'MERCHANT_ADD',
            // children: [
            //   {
            //     label: '新增',
            //     value: 'ADD',
            //   },
            // ],
          },
        ],
      },
      {
        label: '商户仓库',
        value: 'MERCHANT_Chang',
      },
    ],
  },
]
```

### 基础用法

<code src="./demos/Demo1.tsx"/>

---

```ts
import { LTreeTable } from 'lighting-design';
```
