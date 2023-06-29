// import classnames from 'classnames';
// import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
// import './index.less';
// import { BAR_MAP, off, on, renderThumbStyle } from './util';

// let cursorDown = false;
// let cursorLeave = false;

// const Bar = (props) => {
//   const {
//     vertical = false,
//     size,
//     move = 0,
//     ratio = 0,
//     always = false,
//     scrollbarWrap,
//   } = props;

//   const thumb = useRef<HTMLDivElement>(); // elem元素
//   const instance = useRef(null); // elem元素
//   const [visible, setVisible] = useState(false);
//   const [offsetRatio, setOffsetRatio] = useState(0);
//   const [barStore, setBarStore] = useState({});

//   const onselectstartStore = useRef(null);

//   const bar = useMemo(() => {
//     return BAR_MAP[vertical ? 'vertical' : 'horizontal'];
//   }, [vertical]);

//   useEffect(() => {
//     const _offsetRatio =
//       instance.current[bar.offset] ** 2 /
//       scrollbarWrap.current[bar.scrollSize] /
//       ratio /
//       thumb.current[bar.offset];

//     setOffsetRatio(_offsetRatio);
//   }, [ratio]);

//   const thumbStyle = useMemo(() => {
//     return renderThumbStyle({
//       size: size,
//       move: move,
//       bar: bar,
//     });
//   }, []);

//   useLayoutEffect(() => {
//     cursorDown = false;
//     cursorLeave = false;
//     return () => {
//       cursorDown = null;
//       cursorLeave = null;
//     };
//   }, []);

//   const mouseMoveDocumentHandler = (e) => {
//     if (cursorDown === false) return;
//     const prevPage = barStore[bar.axis];

//     if (!prevPage) return;

//     const offset =
//       (instance.current.getBoundingClientRect()[bar.direction] -
//         e[bar.client]) *
//       -1;

//     const thumbClickPosition = thumb.current[bar.offset] - prevPage;
//     const thumbPositionPercentage =
//       ((offset - thumbClickPosition) * 100 * offsetRatio) /
//       instance.current[bar.offset];
//     scrollbarWrap.current[bar.scroll] =
//       (thumbPositionPercentage * scrollbarWrap.current[bar.scrollSize]) / 100;
//   };
//   const mouseUpDocumentHandler = () => {
//     cursorDown = false;

//     setBarStore({
//       [bar.axis]: 0,
//     });

//     off(document, 'mousemove', mouseMoveDocumentHandler);
//     off(document, 'mouseup', mouseUpDocumentHandler);
//     document.onselectstart = onselectstartStore.current;
//     if (cursorLeave) {
//       // visible = false;
//       setVisible(false);
//     }
//   };

//   const startDrag = (e) => {
//     e.stopImmediatePropagation();
//     cursorDown = true;
//     on(document, 'mousemove', mouseMoveDocumentHandler);
//     on(document, 'mouseup', mouseUpDocumentHandler);
//     onselectstartStore.current = document.onselectstart;
//     document.onselectstart = () => false;
//   };

//   const clickTrackHandler = (e) => {
//     const offset = Math.abs(
//       e.target.getBoundingClientRect()[bar.direction] - e[bar.client],
//     );

//     const thumbHalf = thumb.current[bar.offset] / 2;

//     const thumbPositionPercentage =
//       ((offset - thumbHalf) * 100 * offsetRatio) / instance[bar.offset];

//     scrollbarWrap.current[bar.scroll] =
//       (thumbPositionPercentage * scrollbarWrap.current[bar.scrollSize]) / 100;
//   };

//   const clickThumbHandler = (e) => {
//     // prevent click event of middle and right button
//     e.stopPropagation();

//     if (e.ctrlKey || [1, 2].includes(e.button)) {
//       return;
//     }
//     window.getSelection().removeAllRanges();
//     startDrag(e);
//     const _axis =
//       e.currentTarget[bar.offset] -
//       (e[bar.client] - e.currentTarget.getBoundingClientRect()[bar.direction]);

//     setBarStore({
//       [bar.axis]: _axis,
//     });
//   };

//   return (
//     <div
//       ref={instance}
//       className={classnames(['mel-scrollbar__bar', `is-${bar.key}`])}
//       onMouseDown={clickTrackHandler}
//       hidden={!(always || visible)}
//     >
//       <div
//         ref={thumb}
//         className="mel-scrollbar__thumb"
//         style={thumbStyle}
//         onMouseDown={clickThumbHandler}
//       />
//     </div>
//   );
// };

// export default Bar;
