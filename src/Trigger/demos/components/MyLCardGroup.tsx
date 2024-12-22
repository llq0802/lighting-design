import type { LTriggerMode } from 'lighting-design';
import { LCardGroup } from 'lighting-design';

interface LTriggerChildProps {
  value?: any;
  onChange?: (value: any) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  labelInValue?: boolean;
  mode?: LTriggerMode;
  fieldNames?: { label: string; value: string };
  [key: string]: any;
}

const options = [
  { value: '1', label: '支付宝' },
  { value: '2', label: '微信' },
  { value: '3', label: '云闪付' },
];

const MyLCardGroup = ({
  open,
  mode,
  fieldNames,
  labelInValue: outLabelInValue,
  value: outValue,
  onChange: outOnChange,
  setOpen,
}: LTriggerChildProps) => {
  const isMultiple = mode === 'checkbox' || mode === 'checkboxTag';
  const innerValue = outLabelInValue ? outValue?.[fieldNames?.value] : outValue;
  return (
    <LCardGroup
      options={options}
      fieldNames={fieldNames}
      labelInValue
      multiple={isMultiple}
      value={innerValue}
      onChange={(val) => {
        let selectedNames;
        let selectedKeys;
        if (!isMultiple) {
          selectedNames = val?.[fieldNames!.label];
          selectedKeys = val?.[fieldNames!.value];
        } else {
          selectedNames = val?.map((item) => item[fieldNames!.label]);
          selectedKeys = val?.map((item) => item[fieldNames!.value]);
        }
        outOnChange!({
          [fieldNames!.label]: selectedNames,
          [fieldNames!.value]: selectedKeys,
        });
        if (!isMultiple) setOpen?.(false);
      }}
    />
  );
};

export default MyLCardGroup;
