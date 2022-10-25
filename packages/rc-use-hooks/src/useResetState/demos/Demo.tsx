import { Button } from 'antd';
import { useResetState } from 'rc-use-hooks';

interface State {
  hello: string;
  count: number;
}

export default () => {
  const [state, setState, resetState] = useResetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <Button
          style={{ marginRight: '8px' }}
          onClick={() => setState({ hello: 'world', count: 1 })}
        >
          set hello and count
        </Button>

        <Button onClick={resetState}>resetState</Button>
      </p>
    </div>
  );
};
