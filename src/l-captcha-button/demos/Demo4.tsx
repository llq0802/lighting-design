import { Card, Spin } from 'antd';
import './Demo4.css';
const Indicator = () => {
  return (
    <div className="loading-wave">
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
    </div>
  );
};

export default function SPins() {
  return (
    <Spin indicator={<Indicator></Indicator>}>
      <Card title="标题">gfasd</Card>
    </Spin>
  );
}
