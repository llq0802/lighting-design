export type ATagInputActionRef = {
  addTag: (tagvalue: string, taglabel: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  clear: () => void;
};

export type ATagInputProps = {
  value?: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  tagClassName?: string;
  actionRef?: React.MutableRefObject<ATagInputActionRef | undefined>;
  inputStyle?: React.CSSProperties;
  inputClassName?: string;
  placeholderStyle?: React.CSSProperties;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
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
