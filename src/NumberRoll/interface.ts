import type { CSSProperties } from 'react';

export interface LNumberRollProps {
  /**
   * 组件的高度 尽量同 fontSize一致
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number | string}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.29
   */
  height: number | string;
  /**
   * 字体的大小 尽量同 height一致
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number | string}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.29
   */
  fontSize: number | string;
  /**
   * 值
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number | string}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.29
   */
  value: number | string;
  /**
   * 最小位数（个位数起）
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   *@version 2.1.29
   **/
  minLength: number;
  /**
   * 分割符号（禁用 "."） 1,000,000,000
   */
  symbol: string;
  /**
   * 动画速度 ms
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   * */
  speed: number;
  /**
   * 保留几位小数
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  dot: number;
  /**
   * 组件的类型
   *@author 李岚清 <https://github.com/llq0802>
   *@type {'number' | 'date' }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  type: 'number' | 'date';
  /**
   * 缩放大小
   *@author 李岚清 <https://github.com/llq0802>
   *@type {number }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  scale: number;
  /**
   * 样式
   *@author 李岚清 <https://github.com/llq0802>
   *@type {React.CSSProperties }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  style: CSSProperties;
  /**
   * 每一项数值类型滚动的样式
   *@author 李岚清 <https://github.com/llq0802>
   *@type {React.CSSProperties }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  itemNumStyle: CSSProperties;
  /**
   * 每一项不是数值类型滚动的样式 比如value中包函 '.' ':' '-' '/'
   *@author 李岚清 <https://github.com/llq0802>
   *@type {React.CSSProperties }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  itemCharStyle: CSSProperties;
  /**
   * 分隔符的的样式
   *@author 李岚清 <https://github.com/llq0802>
   *@type {React.CSSProperties }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  symbolStyle: CSSProperties;
  /**
   * 类名
   *@author 李岚清 <https://github.com/llq0802>
   *@type {string }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  className: string;
  /**
   * 动画结束的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@type { (value: number | string) => void }
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LNumberRollProps
   */
  onFinish: (value: number | string) => void;
}

export type LNumberRollActionRef = {
  /** 更新数字错位 */
  loadAnimate: () => void;
};
