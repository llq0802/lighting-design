import type { MentionProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemMentionsProps
  extends LFormItemProps,
    Pick<LFormProps, 'variant' | 'disabled' | 'size'>,
    Pick<LFormItemSelectProps, 'spin' | 'request' | 'requestOptions' | 'actionRef' | 'options' | 'fieldNames'> {
  placeholder?: string;
  autoSize?: MentionProps['autoSize'];
  /**
   * antd.Mentions 的其他属性
   */
  mentionsProps?: MentionProps;
}
