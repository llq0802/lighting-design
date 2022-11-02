/**
 * title: 显示颜色
 * desc: 设置 `showText` 显示颜色值
 */

import { Color } from 'lighting-design';

export default () => {
  return (
    <>
      <Color value="#e60000" />
      <br />
      <br />
      <Color value="#e60000" showText />
      <br />
      <br />
      <Color value="#e60000" size="middle" />
      <br />
      <br />
      <Color value="#e60000" size="middle" showText />
    </>
  );
};
