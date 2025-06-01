import { LScrollBar } from 'lighting-design';

const Demo1 = () => {
  const list = new Array(20).fill(0);

  return (
    <LScrollBar
      maxHeight={300}
      style={{
        '--lightd-scrollbar-bg-color': '#555',
        '--lightd-scrollbar-width': '15px',
        '--lightd-scrollbar-border-radius': '9px',
      }}
    >
      {list.map((_, index) => {
        return (
          <div
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
          </div>
        );
      })}
    </LScrollBar>
  );
};

export default Demo1;
