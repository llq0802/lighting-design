import type { TreeSelectProps } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import {
  LForm,
  LFormItemAddress,
  LFormItemAutoComplete,
  LFormItemCaptcha,
  LFormItemCascader,
  LFormItemCheckbox,
  LFormItemColor,
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemNumberRange,
  LFormItemPassword,
  LFormItemRadio,
  LFormItemRate,
  LFormItemSegmented,
  LFormItemSelect,
  LFormItemSlider,
  LFormItemSwitch,
  LFormItemTextArea,
  LFormItemTimePicker,
  LFormItemTransfer,
  LFormItemTreeSelect,
  LFormItemUpload,
} from 'lighting-design';
import { useState } from 'react';
import { addressOptions, mockVal, upload } from './service';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ]);

  const transferMockData: any[] = Array.from({ length: 10 }).map((_, i) => ({
    key: i.toString(),
    title: `content--${i}`,
  }));

  const genTreeNode = (parentId: number, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };

  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });

  return (
    <LForm
      labelWidth={90}
      submitter={{ buttonAlign: 90 }}
      form={form}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="LFormItemInput1" required label="输入框1" tooltip="禁止输入空格" />
      <LFormItemNumber
        name="LFormItemNumber1"
        required
        label="输入框2"
        contentAfter={<div>$</div>}
      />
      <LFormItemNumberRange
        name="LFormItemNumberRange1"
        label="数字范围"
        placeholder={['请输入开始值', '请输入结束值']}
      />
      <LFormItemPassword name="LFormItemPassword1" required label="密码框" />
      <LFormItemTextArea name="LFormItemTextArea1" required label="备注" />
      <LFormItemCaptcha
        name="LFormItemCaptcha1"
        required
        label="验证码"
        type="inline"
        cacheKey="LFormItemCaptcha11"
      />
      <LFormItemAutoComplete
        name="LFormItemAutoComplete1"
        required
        label="自动联想"
        options={autoCompleteOptions}
        onSearch={(searchText) =>
          setAutoCompleteOptions(
            !searchText
              ? []
              : [mockVal(searchText, 1), mockVal(searchText, 2), mockVal(searchText, 3)],
          )
        }
      />
      <LFormItemSelect
        label="下拉选择"
        name="LFormItemSelect1"
        all
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />

      <LFormItemTreeSelect
        label="树形选择"
        name="LFormItemTreeSelect1"
        required
        treeData={treeData}
        loadData={onLoadData}
        treeCheckable
        treeSelectProps={{
          treeDataSimpleMode: true,
        }}
      />

      <LFormItemCascader label="级联选择" name="cascader" required options={addressOptions} />
      <LFormItemAddress label="地址选择" name="location1" required options={addressOptions} />
      <LFormItemDatePicker
        label="日期选择"
        name="LFormItemDatePicker1"
        required
        disabledDateBefore={1}
      />
      <LFormItemDatePicker
        label="范围选择"
        name="LFormItemDatePicker2"
        required
        disabledDateAfter={1}
        rangePicker
      />
      <LFormItemTimePicker label="时间选择" name="LFormItemTimePicker1" required />
      <LFormItemTimePicker label="范围选择" name="LFormItemTimePicker2" required rangePicker />
      <LFormItemSlider
        name="LFormItemSlider1"
        label="滑块选择"
        required
        contentAfter={<div>后面</div>}
      />

      <LFormItemSegmented
        label="分段器"
        required
        name="LFormItemSegmented1"
        options={[
          { label: 'List', value: 'List' },
          { label: 'Kanban', value: 'Kanban' },
          { label: 'item', value: 'item' },
        ]}
      />

      <LFormItemCheckbox
        label="多选框"
        name="LFormItemCheckbox1"
        beforeAll
        required
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
      />
      <LFormItemRadio
        label="单选框"
        name="LFormItemRadio1"
        all
        required
        options={[
          { label: 'Unresolved', value: 'Unresolved' },
          { label: 'Resolved', value: 'Resolved' },
          { label: 'Resolving', value: 'Resolving' },
        ]}
      />
      <LFormItemUpload
        name="LFormItemUpload1"
        label="默认上传"
        accept=".jpg, .jpeg"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        required
      />
      <LFormItemRate label="评分" name="LFormItemRate1" initialValue={3} required />
      <LFormItemColor name="LFormItemColor1" label="颜色选择" required />
      <LFormItemSwitch name="LFormItemSwitch" label="开关" tooltip="开关按钮" />
      <LFormItemUpload
        name="LFormItemUpload2"
        required
        onUpload={upload}
        uploadType="avatar"
        label="头像上传"
      />
      <LFormItemUpload
        name="LFormItemUpload3"
        label="图片上传"
        required
        uploadType="image"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      />

      <LFormItemUpload
        required
        uploadType="dragger"
        name="LFormItemUpload4"
        label="拖动上传"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      />

      <LFormItemTransfer required options={transferMockData} label="穿梭框" name="transfer" />
    </LForm>
  );
};

export default Demo1;
