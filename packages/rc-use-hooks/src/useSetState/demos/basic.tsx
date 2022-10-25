import { Button, Space } from 'antd';
import { useSetState } from 'rc-use-hooks';

function Demo() {
  const [state, setState] = useSetState<{
    foo: number;
    count: number;
    bar?: string;
  }>({
    foo: 0,
    count: 0,
  });

  return (
    <div>
      <p>* 设置相同的 foo/bar 值时还是会触发渲染</p>
      <p style={{ color: 'gray' }}>时间戳（监测是否触发渲染）：{Date.now()}</p>
      <Space>
        <Button type="primary" onClick={() => setState({ foo: 42 })}>
          设置 foo
        </Button>
        <Button type="primary" onClick={() => setState({ bar: 'biz' })}>
          设置 bar
        </Button>
        <Button type="primary" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
          count + 1
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            // 设置非对象数据，将不处理。 如： null, undefined, number, string, boolean 等
            // @ts-ignore
            setState(1324);
          }}
        >
          非对象数据不处理
        </Button>
      </Space>
      <br />
      <br />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Demo;
