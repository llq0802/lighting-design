export type LTagInputActionRef = {
  addTag: (tagvalue: string, taglabel: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export type LTagInputProps = {
  defaultValue?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  tagClassName?: string;
  actionRef?: React.MutableRefObject<LTagInputActionRef | undefined>;
  inputStyle?: React.CSSProperties;
  inputClassName?: string;
  placeholderStyle?: React.CSSProperties;
  onEnter?: React.KeyboardEventHandler<HTMLDivElement>;
  /**
   *
   * @param tagvalue
   * @param taglabel
   * @returns 字符串类型标签
   * @example
   * const ret = '<span class='class-xxx' style='xxxx'>标签</span>'
   */
  renderTag?: (tagvalue: string, taglabel: string) => string;
  [x: string]: any;
} & React.HTMLAttributes<HTMLDivElement>;
