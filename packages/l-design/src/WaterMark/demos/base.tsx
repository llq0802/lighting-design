import WaterMark from '..';

const Index = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <WaterMark offsetLeft={40} rotate={30} content="测试水印" />
    </div>
  );
};

export default Index;
