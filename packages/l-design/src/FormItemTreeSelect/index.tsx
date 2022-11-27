import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import { getFormItemLabel } from '../utils';
import type { TreeSelectWrapperProps } from './base/TreeSelectWrapper';
import TreeSelectWrapper from './base/TreeSelectWrapper';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<
      TreeSelectWrapperProps,
      'treeData' | 'request' | 'treeSelectProps' | 'debounceTime' | 'treeCheckable'
    > {
  dependencies?: string[];
}

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  required,
  treeData = [],
  treeCheckable = false,
  request,
  debounceTime,
  treeSelectProps = {},
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  return (
    <LFormItem
      required={required}
      isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value || value?.length === 0) {
              errMsg = required ? `请选择${messageLabel}!` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <TreeSelectWrapper
        dependencies={restProps?.dependencies}
        treeData={treeData}
        treeCheckable={treeCheckable}
        request={request}
        debounceTime={debounceTime}
        treeSelectProps={treeSelectProps}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
