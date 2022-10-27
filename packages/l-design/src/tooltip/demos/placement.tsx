import { Button } from 'antd';
import { Tooltip } from 'lighting-design';
import type { CSSProperties, FC } from 'react';

const flexSpace: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: 10,
};
const Index: FC = () => {
  return (
    <>
      <div style={flexSpace}>
        <Tooltip
          placement="top"
          title={<div style={{ height: 100, background: 'red' }}> 哈哈哈</div>}
        >
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topLeft" color="red" title="topLeft">
          <Button>topLeft</Button>
        </Tooltip>
        <Tooltip placement="topRight" title="topRight">
          <Button>topRight</Button>
        </Tooltip>
        <Tooltip placement="left" title="left">
          <Button>left</Button>
        </Tooltip>
        <Tooltip placement="leftTop" title="leftTop">
          <Button>leftTop</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title="leftBottom">
          <Button>leftBottom</Button>
        </Tooltip>
      </div>
      <div style={flexSpace}>
        <Tooltip placement="right" title="right">
          <Button>right</Button>
        </Tooltip>
        <Tooltip placement="rightTop" title="rightTop">
          <Button>rightTop</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title="rightBottom">
          <Button>rightBottom</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomLeft" title="bottomLeft">
          <Button>bottomLeft</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title="bottomRight">
          <Button>bottomRight</Button>
        </Tooltip>
      </div>
    </>
  );
};

export default Index;
