import type { RateProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemRateProps extends LFormItemProps {
  /**
   *总共的星数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
   */
  count?: number;
  /**
   *是否需要半心
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemRateProps
   */
  allowHalf?: boolean;
  character?: RateProps['character'];
  rateProps?: RateProps;
}
