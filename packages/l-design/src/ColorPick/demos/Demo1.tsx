/**
 * title: 显示颜色
 * desc: 设置 `showText` 显示颜色值
 */

import { LColor } from 'lighting-design';

export default () => {
  return (
    <>
      <LColor value="#e60000" size="small" disabled />
      <br />
      <br />
      <LColor value="#e60000" showText disabled />
      <br />
      <br />
      <LColor value="#e60000" />
      <br />
      <br />
      <LColor value="#e60000" size="large" showText />
    </>
  );
};
