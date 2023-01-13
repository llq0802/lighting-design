import { SpinProps } from 'antd';
import type { FC } from 'react';
import { usePlaceholder } from '../../../utils';
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
  /**
   * @name 自定义loading效果 具体参考(https://4x.ant.design/components/spin-cn/#API)
   */
  spin?: SpinProps;
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
  spin,
  treeSelectProps = {},

  ...restProps
}) => {
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
              errMsg = required ? `${messagePlaceholder}!` : '';
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
        outLoading={spin}
        debounceTime={debounceTime}
        loadData={loadData}
        treeSelectProps={treeSelectProps}
      />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
