import type { RateProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemRateProps extends LFormItemProps, Pick<LFormProps, 'disabled'> {
  count?: number;
  allowHalf?: boolean;
  character?: RateProps['character'];
  rateProps?: RateProps;
}
