import { usePenpalParent } from '@weblivion/react-penpal';
import type { Reply } from 'penpal';
import { useEffect, useState } from 'react';

type ParentMethods = {
  hello(msg: string): Reply<string>;
};

function App() {
  const [message, setMessage] = useState('');
  const { parentMethods, connection } = usePenpalParent<ParentMethods>(
    {
      methods: {
        hi(message: string) {
          setMessage(message);
        },
      },
    },
    ['*'],
  );

  useEffect(() => {
    if (connection) {
      parentMethods.hello('Hello from usePenpalParent');
    }
  }, [connection, parentMethods]);

  return (
    <div>
      <h1>parent.hi(): {message}</h1>
    </div>
  );
}

export default App;
