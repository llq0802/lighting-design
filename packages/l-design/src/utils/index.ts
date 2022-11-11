/**
 * 获取Form组价的label名称
 * @export
 * @param {Record<string, any>} props
 * @return {*}  {string}
 */
export function getFormItemLabel(props: Record<string, any>): string {
  const { label, messageVariables = {} } = props;
  if (messageVariables?.label) {
    return messageVariables.label;
  }
  const ret = typeof label === 'string' ? label : '';
  return ret;
}
