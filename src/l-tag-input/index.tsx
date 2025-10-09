import { useMount, useRafState } from 'ahooks';
import { memo, useImperativeHandle, useRef } from 'react';
import type { LTagInputProps } from './interface';
import { useStyles } from './styles';
import useSelectionChange from './use-selection-change';

const regex1 = /<i(?=[^>]*\bdata-label="([^"]+)")(?=[^>]*\bdata-value="([^"]+)")[^>]*>.*?<\/i>/g;
const regex2 = /{{#([^#]+)\.([^#]+)#}}/g;

const LTagInput = memo(function (props: LTagInputProps) {
  const {
    defaultValue,
    onChange,
    placeholder = '请输入',
    style,
    className,
    tagClassName,
    actionRef,
    inputStyle,
    inputClassName,
    placeholderStyle,
    onEnter,
    disabled,
    ...restProps
  } = props;

  const { styles, cx } = useStyles();
  const inputRef = useRef<HTMLDivElement>(null!);
  const [state, setState] = useRafState<string>(defaultValue ?? '');
  const [showPlaceholder, setshowPlaceholder] = useRafState(!state);
  const { rangeObjRef, contentId } = useSelectionChange(disabled);

  const handleInput = (e) => {
    if (disabled) return;
    const inputDom = e.target;
    const textContent = inputDom.textContent;
    const innerHTML = inputDom.innerHTML;
    const replacedStr = innerHTML.replace(regex1, (match, p1: string, p2: string) => `{{#${p1}.${p2}#}}`);
    inputDom.dataset.value = replacedStr;
    setState(replacedStr);
    setshowPlaceholder(!textContent?.length);
  };

  const addTag = (taglabel: string, tagvalue: string) => {
    if (disabled) return;
    const node = document.createElement('i');
    if (tagClassName) node.classList.add(tagClassName);
    node.dataset['label'] = taglabel;
    node.dataset['value'] = tagvalue;
    node.innerHTML = taglabel;
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
  const getValue = () => {
    if (disabled) return;
    return inputRef.current.dataset.value;
  };
  useImperativeHandle(actionRef, () => ({
    addTag,
    focus: () => {
      if (disabled) return;
      inputRef.current?.focus();
    },
    blur: () => {
      if (disabled) return;
      inputRef.current?.blur();
    },
    clear: () => {
      if (disabled) return;
      inputRef.current.dataset.value = '';
      inputRef.current.innerHTML = '';
      setshowPlaceholder(true);
    },
    getValue,
  }));

  useMount(() => {
    if (!state) return;
    inputRef.current.dataset.value = state;
    inputRef.current.innerHTML = state.replace(regex2, (match, p1, p2) => {
      return tagClassName
        ? `<i class=${tagClassName} data-label="${p1}" data-value="${p2}">${p1}</i>`
        : `<i data-label="${p1}" data-value="${p2}">${p1}</i>`;
    });
    setshowPlaceholder(false);
  });

  return (
    <div className={cx(styles.container, className)} style={style}>
      <div
        {...restProps}
        tabIndex={-1}
        style={inputStyle}
        id={contentId}
        className={cx(styles.content, inputClassName)}
        ref={inputRef}
        onInput={handleInput}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter') {
            e.preventDefault();
            onEnter?.(e);
          }
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
