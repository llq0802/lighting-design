import { LSkeleton } from 'lighting-design';

const demo1 = () => {
  return (
    <div>
      <LSkeleton
        vertical={false}
        topSkeleton={{
          margin: '0 0 16px 0',
          justify: 'center',
          width: 200,
          height: 50,
        }}
        bottomSkeleton
        itemHeight={100}
      ></LSkeleton>
    </div>
  );
};

export default demo1;
