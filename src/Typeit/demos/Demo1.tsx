import { LTypeit } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const Index: FC = () => {
  const [value] = useState(
    '基于React、TypeScript、Ant Design、UmiJs、ahook等开发的后台模板组件。',
  );

  return (
    <>
      <LTypeit
        style={{
          fontFamily: 'cursive',
          fontSize: 26,
          lineHeight: '40px',
          textIndent: '2em',
        }}
        options={{
          speed: 30,
          cursor: false,
        }}
        getBeforeInit={(instance) => {
          instance
            .type(value)
            .type('<strong style="color: #5d84f9">Lighting Design</strong>', {
              speed: 100,
            })
            .type(
              '是基于 Ant Design UI 而开发的业务常用模板组件，提供了更高级别的抽象支持，开箱即用。可以显著的提升制作 CRUD 页面的效率，更加专注于页面开发。🌈',
            );
          return instance;
        }}
      />
    </>
  );
};

export default Index;
