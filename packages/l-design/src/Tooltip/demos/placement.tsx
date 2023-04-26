import { Button } from 'antd';
import { LTooltip } from 'lighting-design';
import type { FC } from 'react';
import style from './index1.less';

const Index: FC = () => {
  return (
    <>
      <div className={style.box}>
        <div className={style.top}>
          <LTooltip title="Top Left 提示文字" placement="topLeft">
            <Button className={style.item}>上左</Button>
          </LTooltip>
          <LTooltip title="Top Center 提示文字" placement="top">
            <Button className={style.item}>上边</Button>
          </LTooltip>
          <LTooltip title="Top Right 提示文字" placement="topRight">
            <Button className={style.item}>上右</Button>
          </LTooltip>
        </div>
        <div className={style.left}>
          <LTooltip title="Left Top 提示文字" placement="leftTop">
            <Button className={style.item}>左上</Button>
          </LTooltip>
          <LTooltip title="Left Center 提示文字" placement="left">
            <Button className={style.item}>左边</Button>
          </LTooltip>
          <LTooltip title="Left Bottom 提示文字" placement="leftBottom">
            <Button className={style.item}>左下</Button>
          </LTooltip>
        </div>

        <div className={style.right}>
          <LTooltip title="Right Top 提示文字" placement="rightTop">
            <Button className={style.item}>右上</Button>
          </LTooltip>
          <LTooltip title="Right Center 提示文字" placement="right">
            <Button className={style.item}>右边</Button>
          </LTooltip>
          <LTooltip title="Right Bottom 提示文字" placement="rightBottom">
            <Button className={style.item}>右下</Button>
          </LTooltip>
        </div>
        <div className={style.bottom}>
          <LTooltip title="Bottom Left 提示文字" placement="bottomLeft">
            <Button className={style.item}>下左</Button>
          </LTooltip>
          <LTooltip title="Bottom Center 提示文字" placement="bottom">
            <Button className={style.item}>下边</Button>
          </LTooltip>
          <LTooltip title="Bottom Right 提示文字" placement="bottomRight">
            <Button className={style.item}>下右</Button>
          </LTooltip>
        </div>
      </div>
    </>
  );
};

export default Index;
