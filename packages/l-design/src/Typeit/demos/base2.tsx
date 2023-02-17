import { LTypeit } from 'lighting-design';
import type { FC } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import type { Container } from 'react-dom';
import { render } from 'react-dom';
let timer: NodeJS.Timeout;
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

  const onLoad = () => {
    timer = setTimeout(() => {
      const result = '这是一段异步调用文案。';
      render(TypertDom(result), domRef.current);
    }, 3000);
  };

  useEffect(() => {
    onLoad();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div ref={domRef}>加载中...</div>
    </>
  );
};

export default Index;
