import type { RateProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemRateProps extends LFormItemProps, Pick<LFormProps, 'size' | 'disabled' | 'variant'> {
  /**
   *总共的星数
   */
  count?: number;
  /**
   *是否需要半心
   */
  allowHalf?: boolean;
  character?: RateProps['character'];
  rateProps?: RateProps;
}
