import { useControllableValue, useMount, useRafState } from 'ahooks';
import clx from 'classnames';
import { memo, useImperativeHandle, useRef } from 'react';
import styles from './index.less';
import type { ATagInputProps } from './interface';
import useSelectionChange from './useSelectionChange';

const regex1 = /<i(?=[^>]*\bdata-tagvalue="([^"]+)")(?=[^>]*\bdata-taglabel="([^"]+)")[^>]*>.*?<\/i>/g;
const regex2 = /{{#([^.]+)\.([^#]+)#}}/g;

export const ATagInput = memo(function (props: ATagInputProps) {
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
    prefix,
    suffix,
    allowClear,
    tagClassName,
    readOnly,
    renderTag,
    ...restProps
  } = props;
  const inputRef = useRef<HTMLDivElement>(null!);
  const [state, setState] = useControllableValue<string>(props, { defaultValue: '' });
  const [showPlaceholder, setshowPlaceholder] = useRafState(true);
  const { rangeObjRef, contentId } = useSelectionChange(readOnly);

  const handleInput = (e) => {
    if (readOnly) return;
    const inputDom = e.target;
    const textContent = inputDom.textContent;
    const innerHTML = inputDom.innerHTML;
    let replacedStr = innerHTML.replace(regex1, (match, p1: string, p2: string) => `{{#${p1}.${p2}#}}`);
    if (replacedStr === '<br>' || replacedStr === '' || replacedStr === '<br/>') {
      replacedStr = '';
    }
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
    onFocus: () => {
      if (readOnly) return;
      inputRef.current?.focus();
    },
    onBlur: () => {
      if (readOnly) return;
      inputRef.current?.blur();
    },
    clear: () => {
      if (readOnly) return;
      inputRef.current.innerHTML = '';
      setshowPlaceholder(true);
    },
  }));

  useMount(() => {
    if (!state) return;
    const newStr = state.replace(regex2, (match, p1, p2) => {
      return `<i ${tagClassName ? `class=${tagClassName}` : ''} data-tagvalue="${p1}" data-taglabel="${p2}" >${renderTag ? renderTag(p1, p2) : p2}</i>`;
    });
    inputRef.current!.innerHTML = newStr;
    inputRef.current.dataset.value = newStr;
    setshowPlaceholder(!inputRef.current?.textContent?.length);
  });
  return (
    <div
      className={clx(styles.a_tag_input_wrapper, readOnly ? styles.a_tag_input_readonly_wrapper : '', className)}
      style={style}
    >
      {prefix}
      <div className={styles.a_tag_input_body}>
        <div
          // contentEditable
          {...restProps}
          data-tag-input
          id={contentId}
          className={clx(styles.a_tag_input, readOnly ? styles.a_tag_input_readonly : '', inputClassName)}
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
      {suffix}
    </div>
  );
});

export * from './interface';
