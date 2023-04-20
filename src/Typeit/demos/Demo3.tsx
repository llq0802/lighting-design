import { LTypeit } from 'lighting-design';
import type { FC } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import type { Container } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { awaitTime } from '../../_test';

const Index: FC = () => {
  const domRef = useRef<Container | any>(<></>);

  const TypertDom = useCallback((val: string): any => {
    return (
      <LTypeit
        getBeforeInit={(instance) => {
          instance.type(val);
          return instance;
        }}
      />
    );
  }, []);

  useEffect(() => {
    (async () => {
      await awaitTime(3000);
      if (domRef.current) {
        createRoot(domRef.current).render(TypertDom('这是一段异步调用文案。'));
      }
    })();
  }, []);

  return (
    <>
      <div ref={domRef}>加载中...</div>
    </>
  );
};

export default Index;
