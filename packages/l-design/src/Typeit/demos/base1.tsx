import { LTypeit } from 'lighting-design';
import type { FC } from 'react';

const Index: FC = () => {
  return (
    <>
      <LTypeit
        options={{
          cursor: true,
          loop: true,
        }}
        style={{
          fontFamily: 'cursive',
        }}
        getBeforeInit={(instance) => {
          instance
            .type('您好，')
            .pause(400)
            .type('我的名字叫 xxx.')
            .break()
            .pause(800)
            .type('我是一名')
            .type('爱编程的程序猿')
            .pause(600)
            .delete(3)
            .type('程序员')
            .pause(1000)
            .delete(7)
            .type('web 前端开发工程师')
            .pause(600)
            .move(-10)
            .delete(1)
            .type('W')
            .move(null, { to: 'END' })
            .pause(2000)
            .delete()
            .type('如果您喜欢Lighting Design，')
            .pause(600)
            .type('欢迎大家一起加入我们.')
            .pause(600)
            .type(':)')
            .pause(5000);
          return instance;
        }}
      />
    </>
  );
};

export default Index;
