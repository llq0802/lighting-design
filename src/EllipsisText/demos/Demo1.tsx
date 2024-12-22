import { LEllipsisText } from 'lighting-design';
import { useEffect, useRef } from 'react';

const Demo1 = () => {
  const boxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log('boxRef', boxRef);
  }, []);

  return (
    <div>
      <h3>通过最大宽度省略</h3>
      <LEllipsisText ref={boxRef} maxWidth={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet
        expedita dolor! Ipsa inventore aperiam vero quaerat, molestias esse
        voluptatibus quos fugiat delectus harum unde architecto eum, recusandae
        culpa distinctio?
      </LEllipsisText>

      <br />
      <br />
      <h3>通过最大字符数量省略</h3>
      <LEllipsisText maxLength={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet
        expedita dolor! Ipsa inventore aperiam vero quaerat, molestias esse
        voluptatibus quos fugiat delectus harum unde architecto eum, recusandae
        culpa distinctio?
      </LEllipsisText>

      <br />
      <br />
      <h3>通过固定宽度省略</h3>
      <LEllipsisText style={{ width: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet
        expedita dolor! Ipsa inventore aperiam vero quaerat, molestias esse
        voluptatibus quos fugiat delectus harum unde architecto eum, recusandae
        culpa distinctio?
      </LEllipsisText>

      <h3>修改 tooltip 的参数</h3>
      <LEllipsisText
        maxWidth={200}
        className="my-LEllipsisText"
        tooltip={{
          color: '#209cee',
          placement: 'right',
        }}
        style={{
          fontSize: 18,
          color: '#247fff',
          fontWeight: 700,
        }}
        onClick={() => {}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
      </LEllipsisText>

      <br />
      <br />
    </div>
  );
};

export default Demo1;
