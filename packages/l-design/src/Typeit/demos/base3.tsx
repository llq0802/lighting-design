import { LTypeit } from 'lighting-design';
import type { FC } from 'react';

const Index: FC = () => {
  const promiseSum = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 3000);
    });
  };

  return (
    <>
      <LTypeit
        style={{ fontFamily: 'cursive' }}
        options={{
          afterComplete: (instance: { destroy: () => void }) => {
            instance.destroy();
          },
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .type('正在变身中...')
            .exec(async () => await promiseSum())
            .delete(null, { instant: true })
            .type('<strong style="color: #f95d5d;font-size:80px">只因你太美</strong>', {
              instant: true,
            })
            .pause(3000);
          return instance;
        }}
      />
    </>
  );
};

export default Index;
