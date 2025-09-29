import { useControllableValue, useMount, useRafState } from 'ahooks';
import { memo, useImperativeHandle, useRef } from 'react';
import type { ATagInputProps } from './interface';
import { useStyles } from './styles';
import useSelectionChange from './use-selection-change';

const regex1 = /<i(?=[^>]*\bdata-tagvalue="([^"]+)")(?=[^>]*\bdata-taglabel="([^"]+)")[^>]*>.*?<\/i>/g;
const regex2 = /{{#([^.]+)\.([^#]+)#}}/g;

const LTagInput = memo(function (props: ATagInputProps) {
  const {
    value,
    onChange,
    placeholder = '请输入',
    style,
    className,
    actionRef,
    inputStyle,
    inputClassName,
    placeholderStyle,
    onKeyDown,
    tagClassName,
    readOnly,
    renderTag,
    ...restProps
  } = props;

  const { styles, cx } = useStyles();
  const inputRef = useRef<HTMLDivElement>(null!);
  const [state, setState] = useControllableValue<string>(props, { defaultValue: '' });
  const [showPlaceholder, setshowPlaceholder] = useRafState(!state);
  const { rangeObjRef, contentId } = useSelectionChange(readOnly);

  const handleInput = (e) => {
    if (readOnly) return;
    const inputDom = e.target;
    const textContent = inputDom.textContent;
    const innerHTML = inputDom.innerHTML;
    const replacedStr = innerHTML.replace(regex1, (match, p1: string, p2: string) => `{{#${p1}.${p2}#}}`);
    requestAnimationFrame(() => {
      setState(replacedStr);
      inputDom.dataset.value = replacedStr;
    });
    setshowPlaceholder(!textContent?.length);
  };

  // 添加标签
  const addTag = (tagvalue: string, taglabel: string) => {
    if (readOnly) return;
    const node = document.createElement('i');
    if (tagClassName) node.classList.add(tagClassName);
    node.dataset['tagvalue'] = tagvalue;
    node.dataset['taglabel'] = taglabel;
    node.innerHTML = renderTag ? renderTag(tagvalue, taglabel) : taglabel;
    if (rangeObjRef.current) {
      rangeObjRef.current.deleteContents();
      rangeObjRef.current.insertNode(node);
      rangeObjRef.current?.collapse(false);
    } else {
      inputRef.current?.appendChild(node);
    }
    inputRef.current?.focus();
    handleInput({ target: inputRef.current });
  };

  useImperativeHandle(actionRef, () => ({
    addTag,
    focus: () => {
      if (readOnly) return;
      inputRef.current?.focus();
    },
    blur: () => {
      if (readOnly) return;
      inputRef.current?.blur();
    },
    clear: () => {
      if (readOnly) return;
      inputRef.current.dataset.value = '';
      inputRef.current.innerHTML = '';
      setshowPlaceholder(true);
    },
  }));

  useMount(() => {
    if (!state) return;
    const newStr = state.replace(regex2, (match, p1, p2) => {
      return `<i ${tagClassName ? `class=${tagClassName}` : ''} data-tagvalue="${p1}" data-taglabel="${p2}" >${
        renderTag ? renderTag(p1, p2) : p2
      }</i>`;
    });
    inputRef.current!.innerHTML = newStr;
    inputRef.current.dataset.value = newStr;
    setshowPlaceholder(!inputRef.current?.textContent?.length);
  });

  return (
    <div className={cx(styles.container, className)} style={style}>
      <div
        {...restProps}
        tabIndex={-1}
        data-tag-input-id={contentId}
        id={contentId}
        className={styles.content}
        ref={inputRef}
        style={inputStyle}
        onInput={handleInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
          onKeyDown?.(e);
        }}
      />
      {showPlaceholder && (
        <div className={styles.placeholder} style={placeholderStyle}>
          {placeholder}
        </div>
      )}
    </div>
  );
});
export default LTagInput;
export * from './interface';
