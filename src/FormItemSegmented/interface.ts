import type { SegmentedProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';

export interface LFormItemSegmentedoProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'spin'
      | 'request'
      | 'requestOptions'
      | 'actionRef'
      | 'autoRequest'
      | 'refreshDeps'
      | 'fieldNames'
    > {
  options?: SegmentedProps['options'] | Record<string, any>[];
  segmentedProps?: SegmentedProps;
  block?: SegmentedProps['block'];
}
