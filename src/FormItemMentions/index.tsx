import type { MentionProps, SpinProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemActionRef } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import MentionsWrapper from './MentionsWrapper';

type LMentionsOptions = {
  value: string;
  label: string;
  key?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export interface LFormItemMentionsProps extends LFormItemProps {
  /**
   *配置request时自定义loading效果
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  spin?: SpinProps;
  /**
   *异步请求数据函数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  request?: (...depends: any[]) => Promise<LMentionsOptions[]>;
  /**
   *配置request的其他配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  requestOptions?: Record<string, any>;
  /**
   *request请求的依赖项数组 如果依赖项发生变化则会自动执行 request
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  refreshDeps?: any[];
  /**
   *数据项
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.25
   */
  options?: LMentionsOptions[];
  /**
   * antd.Mentions 的其他属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.25
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  mentionsProps?: MentionProps;
  /**
   *配置 request 时 useRequest 的返回值
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.25
   */
  actionRef?: React.MutableRefObject<LFormItemActionRef>;
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
  actionRef,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      placeholder={messageLabel}
      required={required}
      validateTrigger="onBlur"
      {...restProps}
    >
      <MentionsWrapper
        name={restProps?.name}
        dependencies={restProps?.dependencies}
        placeholder={messageLabel}
        actionRef={actionRef}
        spin={spin}
        request={request}
        requestOptions={requestOptions}
        mentionsProps={mentionsProps}
        outOptions={outOptions}
        refreshDeps={refreshDeps}
        disabled={disabled || formDisabled}
      />
    </LFormItem>
  );
};

export default LFormItemMentions;
