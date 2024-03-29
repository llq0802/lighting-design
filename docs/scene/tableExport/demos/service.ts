export const columns: any[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
];

export const originData: any[] = [];

for (let index = 0; index < 12; index++) {
  originData.push({
    key: index.toString(),
    name: `Jack ${index + 1}`,
    age: Math.floor(Math.random() * 60) + 20,
    address: `London Park no-${index}`,
  });
}

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}
const data: Item[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i + 1}`,
    age: Math.floor(Math.random() * 60) + 20,
    address: `London Park no-${i}`,
  });
}

export function apiGetUserList(time = 1000): Promise<Record<string, any>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: data,
        total: data.length,
        success: true,
      });
    }, time);
  });
}
