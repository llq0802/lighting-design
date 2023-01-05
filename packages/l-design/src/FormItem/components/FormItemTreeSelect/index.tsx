import type { FC } from 'react';
import { useMemo } from 'react';
import { getFormItemLabel, usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { TreeSelectWrapperProps } from './base/TreeSelectWrapper';
import TreeSelectWrapper from './base/TreeSelectWrapper';

export interface LFormItemTreeSelectProps
  extends LFormItemProps,
    Pick<
      TreeSelectWrapperProps,
      'treeData' | 'request' | 'treeSelectProps' | 'debounceTime' | 'treeCheckable' | 'loadData'
    > {
  dependencies?: string[];
}

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  required,
  treeData = [],
  treeCheckable = false,
  loadData,
  request,
  disabled,
  placeholder,
  debounceTime,
  treeSelectProps = {},
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  return (
    <LFormItem
      required={required}
      isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value || !value?.length) {
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
        disabled={disabled}
        placeholder={messagePlaceholder}
        dependencies={restProps?.dependencies}
        treeData={treeData}
        treeCheckable={treeCheckable}
        request={request}
        debounceTime={debounceTime}
        loadData={loadData}
        treeSelectProps={treeSelectProps}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
