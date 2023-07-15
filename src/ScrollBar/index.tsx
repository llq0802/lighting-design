// import { List } from 'antd';
// import React from 'react';

// const data = [
//   {
//     label: '商户管理',
//     value: 'MERCHANT',
//     children: [
//       {
//         label: '商户查询',
//         value: 'MERCHANT_LIST',
//         children: [
//           { label: '商户查询-1', value: 'MERCHANT_QUERY' },
//           { label: '查看商户-3', value: 'MERCHANT_DETAIL' },
//           { label: '新增商户-2', value: 'MERCHANT_ADD' },
//         ],
//       },
//     ],
//   },
// ];

// const newData = [
//   [
//     {
//       label: '商户管理',
//       value: 'MERCHANT',
//     },
//   ],
//   [
//     {
//       label: '商户查询',
//       value: 'MERCHANT_LIST',
//     },
//   ],
//   [
//     {
//       label: '商户查询-1',
//       value: 'MERCHANT_QUERY',
//     },
//     {
//       label: '查看商户-3',
//       value: 'MERCHANT_DETAIL',
//     },
//     {
//       label: '新增商户-2',
//       value: 'MERCHANT_ADD',
//     },
//   ],
// ];

// // function flatten(tree, arr = []) {
// //   tree.forEach((item) => {
// //     const { children, ...props } = item;
// //     // 添加除了children的属性
// //     arr.push(props);

// //     if (children) {
// //       // 递归将所有节点加入到结果集中
// //       flatten(children, arr);
// //     }
// //   });
// //   return arr;
// // }

// function flatten(tree) {
//   const list = [];
//   tree.forEach((item) => {
//     const arr = [];
//     const { children, ...props } = item;

//     // 添加除了children的属性

//     list.push(arr.push(props));
//   });
// }

// const list = flatten(data);

// const LTreeCheckbox: React.FC = () => (
//   <List
//     itemLayout="horizontal"
//     dataSource={data}
//     renderItem={(item, index) => {
//       // console.log('item', item);
//       // const list = flatten([item]);
//       // console.log('list', list);

//       return (
//         <div style={{ display: 'flex', gap: 16 }}>
//           789
//           {/* {list.map((it, index) => {
//             return (
//               <div key={index}>
//                 <Checkbox>{it.label}</Checkbox>
//               </div>
//             );
//           })} */}
//         </div>
//       );
//     }}
//   />
// );

// export default LTreeCheckbox;

// import { useLatest } from 'ahooks';
// import classnames from 'classnames';
// import { useEffect, useMemo, useRef, useState } from 'react';
// import Bar from './Bar';
// import './index.less';
// import {
//   addResizeListener,
//   addUnit,
//   debugWarn,
//   GAP,
//   isNumber,
//   removeResizeListener,
//   SCOPE,
// } from './util';

// const LScrollBar = (props) => {
//   const {
//     height,
//     maxHeight,
//     native = false,
//     wrapStyle = {},
//     wrapClass,
//     viewClass,
//     viewStyle,
//     noresize = false,
//     always = true,
//     minSize = 20,
//   } = props;

//   const scrollbar = useRef();
//   const wrap = useRef();
//   const resize = useRef();
//   const [sizeWidth, setSizeWidth] = useState('0');
//   const [sizeHeight, setSizeHeight] = useState('0');
//   const [moveX1, setMoveX] = useState(0);
//   const [moveY1, setMoveY] = useState(0);
//   const moveX = useLatest(moveX1);
//   const moveY = useLatest(moveY1);
//   const [ratioX1, setRatioX] = useState(1);
//   const [ratioY1, setRatioY] = useState(1);
//   const ratioX = useLatest(ratioX1);
//   const ratioY = useLatest(ratioY1);

//   const renderWrapStyle = useMemo(() => {
//     const style = {
//       ...wrapStyle,
//     };
//     style.height = addUnit(height);
//     style.maxHeight = addUnit(maxHeight);
//     return style;
//   }, [height, maxHeight]);

//   const handleScroll = () => {
//     if (wrap.current) {
//       const offsetHeight = wrap.current.offsetHeight - GAP;
//       const offsetWidth = wrap.current.offsetWidth - GAP;
//       const _moveX =
//         ((wrap.current.scrollLeft * 100) / offsetWidth) * ratioX.current;
//       const _moveY =
//         ((wrap.current.scrollTop * 100) / offsetHeight) * ratioY.current;

//       setMoveX(_moveX);
//       setMoveY(_moveY);

//       props?.Onscroll?.({
//         scrollTop: wrap.current.scrollTop,
//         scrollLeft: wrap.current.scrollLeft,
//       });
//     }
//   };

//   const setScrollTop = (value) => {
//     if (!isNumber(value)) {
//       debugWarn(SCOPE, 'value must be a number');
//       return;
//     }
//     wrap.current.scrollTop = value;
//   };
//   const setScrollLeft = (value) => {
//     if (!isNumber(value)) {
//       debugWarn(SCOPE, 'value must be a number');
//       return;
//     }
//     wrap.current.scrollLeft = value;
//   };

//   const update = () => {
//     if (!wrap.current) return;

//     const offsetHeight = wrap.current.offsetHeight - GAP;
//     const offsetWidth = wrap.current.offsetWidth - GAP;

//     const originalHeight = offsetHeight ** 2 / wrap.current.scrollHeight;
//     const originalWidth = offsetWidth ** 2 / wrap.current.scrollWidth;

//     const height = Math.max(originalHeight, minSize);
//     const width = Math.max(originalWidth, minSize);

//     const _ratioY =
//       originalHeight /
//       (offsetHeight - originalHeight) /
//       (height / (offsetHeight - height));

//     const _ratioX =
//       originalWidth /
//       (offsetWidth - originalWidth) /
//       (width / (offsetWidth - width));

//     setRatioY(_ratioY);
//     setRatioX(_ratioX);

//     const _sizeWidth = width + GAP < offsetWidth ? `${width}px` : '';
//     const _sizeHeight = height + GAP < offsetHeight ? `${height}px` : '';

//     setSizeWidth(_sizeWidth);
//     setSizeHeight(_sizeHeight);
//   };

//   useEffect(() => {
//     if (!native) {
//       update();
//     }

//     if (!noresize) {
//       addResizeListener(resize.current, update);
//       window.addEventListener('resize', update);
//     }

//     return () => {
//       if (!noresize) {
//         removeResizeListener(resize.current, update);
//         window.removeEventListener('resize', update);
//       }
//     };
//   }, []);

//   return (
//     <div ref={scrollbar} className="mel-scrollbar">
//       <div
//         ref={wrap}
//         style={renderWrapStyle}
//         className={classnames([
//           'mel-scrollbar__wrap',
//           wrapClass,
//           native ? '' : 'mel-scrollbar__wrap--hidden-default',
//         ])}
//         onScroll={handleScroll}
//       >
//         <div
//           ref={resize}
//           style={viewStyle}
//           className={classnames('mel-scrollbar__view', viewClass)}
//         >
//           {props.children}
//         </div>
//       </div>

//       {!native ? (
//         <>
//           <Bar
//             move={moveX}
//             ratio={ratioX}
//             size={sizeWidth}
//             always={always}
//             scrollbarWrap={wrap}
//           />
//           <Bar
//             scrollbarWrap={wrap}
//             move={moveY}
//             ratio={ratioY}
//             size={sizeHeight}
//             vertical
//             always={always}
//           />
//         </>
//       ) : null}
//     </div>
//   );
// };

import classnames from 'classnames';
import './index.less';

const prefixCls = 'lightd-scrollbar';

export type LScrollBarProps = {
  /**
   * 滚动条的模式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LScrollBarProps
   */
  mode?: 'show' | 'hide' | 'hover';
  /**
   *  容器高度 默认100%
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LScrollBarProps
   */
  height?: string | number;
  /**
   * 容器最大高度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LScrollBarProps
   */
  maxHeight?: string | number;
  /**
   *  容器样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LScrollBarProps
   */
  style?: React.CSSProperties;
  /**
   * 容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.6
   *@memberof LScrollBarProps
   */
  className?: string;
  children: React.ReactNode;
} & Record<string, any>;

const LScrollBar = (props: LScrollBarProps) => {
  const {
    height = '100%',
    maxHeight,
    className,
    style,
    mode = 'show',
    ...restProps
  } = props;

  return (
    <div
      className={classnames([
        prefixCls,
        {
          [`${prefixCls}-hide`]: mode === 'hide' ? true : false,
          [`${prefixCls}-hover`]: mode === 'hover' ? true : false,
        },
        className,
      ])}
      style={{ ...style, height, maxHeight }}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default LScrollBar;
