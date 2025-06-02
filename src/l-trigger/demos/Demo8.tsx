import { LTrigger } from 'lighting-design';

export default function Demo8() {
  return (
    <div>
      <h5>无线滚动</h5>
      <LTrigger>
        {(props) => {
          // console.log('==props====>', props);
          return (
            <div
              style={{
                height: '100px',
              }}
            >
              这里也可以配合虚拟列表实现大量数据{' '}
            </div>
          );
        }}
      </LTrigger>
    </div>
  );
}
