export function getFormItemLabel(props: Record<string, any>): string {
  const { label, messageVariables = {} } = props;
  const ret = typeof label === 'string' ? label : null;
  return ret || messageVariables?.label || '';
}
