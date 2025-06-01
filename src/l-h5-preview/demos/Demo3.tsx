import { LH5Preview } from 'lighting-design';

const Demo3 = () => {
  return (
    <>
      <LH5Preview scale={0.9} deviceColor="gold" className="my-h5-preview-2">
        <iframe
          src="https://m.baidu.com/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </LH5Preview>
    </>
  );
};

export default Demo3;
