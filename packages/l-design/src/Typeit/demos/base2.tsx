import { LTypeit } from 'lighting-design';
import type { FC } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import type { Container } from 'react-dom';
import { render } from 'react-dom';
import { awaitTime } from '../../_utils';
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

  const onLoad = async () => {
    await awaitTime(3000);
    render(TypertDom('这是一段异步调用文案。'), domRef.current);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <div ref={domRef}>加载中...</div>
    </>
  );
};

export default Index;
