import { LScrollBar } from 'lighting-design';

const Demo1 = () => {
  const list = new Array(30).fill(0);

  return (
    <LScrollBar height={300} mode="hover">
      {list.map((_, index) => {
        return (
          <p
            key={index}
            style={{
              backgroundColor: '#209cee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50px',
              margin: '10px 0px',
            }}
          >
            {index + 1}
          </p>
        );
      })}
    </LScrollBar>
  );
};

export default Demo1;
