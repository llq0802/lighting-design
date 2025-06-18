import type { SegmentedProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemSegmentedProps
  extends LFormItemProps,
    Pick<LFormProps, 'disabled' | 'size'>,
    Pick<LFormItemSelectProps, 'spin' | 'request' | 'requestOptions' | 'actionRef' | 'fieldNames'> {
  options?: SegmentedProps['options'] | Record<string, any>[];
  segmentedProps?: SegmentedProps;
  block?: SegmentedProps['block'];
  vertical?: SegmentedProps['vertical'];
  shape?: SegmentedProps['shape'];
  /** 是否默认高亮第一个选项 (只高亮,不代表有值) */
  isHighlightFirst?: boolean;
}
