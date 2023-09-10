import { LForm } from 'lighting-design';
import LFromItemTransfer from '..';

const obj = {
  current: '李岚清',
  info: {
    a: 1,
    b: 2,
  },
  arr: [
    {
      id: 1,
      name: '111',
    },
    {
      id: 2,
      name: '222',
    },
  ],
};
const { info, arr } = obj;

info.a = 99;

arr.push({
  id: 3,
  name: '333',
});

console.log('obj', obj);

export default () => {
  return (
    <LForm
      labelCol={{ flex: '90px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
      // onValuesChange={(
      //   currentName: string,
      //   currentValue: any,
      //   allValues: Record<string, any>,
      // ) => {
      //   console.log('currentName', currentName);
      //   console.log('currentValue', currentValue);
      //   console.log('allValues', allValues);
      // }}
    >
      <LFromItemTransfer label="穿梭" name="name" />
    </LForm>
  );
};
