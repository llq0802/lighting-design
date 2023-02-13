/**
 * title: 显示颜色
 * desc: 设置 `showText` 显示颜色值
 */

import { LColor } from 'lighting-design';

export default () => {
  return (
    <>
      <LColor value="#e60000" size="small" />
      <br />
      <br />
      <LColor value="#e60000" showText />
      <br />
      <br />
      <LColor value="#888888" showText />
      <br />
      <br />
      <LColor value="#000000" size="large" showText />
    </>
  );
};
