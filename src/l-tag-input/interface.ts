export type LTagInputActionRef = {
  inset: (taglabel: string, value: string) => void;
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
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  [x: string]: any;
} & React.HTMLAttributes<HTMLInputElement>;
