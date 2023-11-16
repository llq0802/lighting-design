import { useRequest } from 'ahooks';
import { Mentions } from 'antd';
import LForm from 'lighting-design/Form';

import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext, useEffect } from 'react';

export interface LFormItemMentionsProps extends LFormItemProps {
  /**
   *输入框类型对antd输入框扩展了一些类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  type?: InputWrapperProps['type'];
  /**
   * - 是否禁止输入空格
   *
   * - 在 mac 笔记本上使用原生输入法时不建议设置
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.24
   */
  options?: any[];
  /**
   * antd.Input 的其他属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  mentionsProps?: MentionsProps;
}

const LFormItemMentions: FC<LFormItemMentionsProps> = ({
  size,
  disabled,
  required,
  placeholder,
  options: outOptions,
  mentionsProps = emptyObject,
  spin = emptyObject,
  request,
  refreshDeps = emptyArray,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const form = LForm.useFormInstance();

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  const { run, loading, data } = useRequest(request || (async () => []), {
    ...requestOptions,
    manual: true,
  });

  useEffect(() => {
    if (request && !outOptions?.length) {
      form.setFieldValue(restProps?.name, void 0);
      run(refreshDeps);
    }
  }, refreshDeps);

  return (
    <LFormItem
      placeholder={messageLabel}
      required={required}
      validateTrigger="onBlur"
      {...restProps}
    >
      {/* <Spin spinning={loading} style={publicSpinStyle} {...spin}> */}
      <Mentions
        disabled={disabled || formDisabled}
        autoComplete="off"
        placeholder={messageLabel}
        options={outOptions || data || []}
        {...mentionsProps}
        style={{ width: '100%', ...mentionsProps?.style }}
      />
      {/* </Spin> */}
    </LFormItem>
  );
};

export default LFormItemMentions;
