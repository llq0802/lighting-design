import type { MentionProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';

export interface LFormItemMentionsProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'spin'
      | 'request'
      | 'requestOptions'
      | 'actionRef'
      | 'refreshDeps'
      | 'autoRequest'
      | 'options'
      | 'variant'
    > {
  /**
   * antd.Mentions 的其他属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  mentionsProps?: MentionProps;
}
