import type { LTriggerMode } from 'lighting-design';
import { LTagGroup } from 'lighting-design';

interface LTriggerChildProps {
  value?: any;
  onChange?: (value: any) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  labelInValue?: boolean;
  mode?: LTriggerMode;
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
  labelInValue,
  value: outValue,
  onChange: outOnChange,
  setOpen,
}: LTriggerChildProps) => {
  const isMultiple = mode === 'checkbox' || mode === 'checkboxTag';

  const innerValue = labelInValue ? outValue?.value : outValue;

  return (
    <LTagGroup
      options={options}
      multiple={isMultiple}
      value={innerValue}
      onChange={(val, cur, opts) => {
        console.log('===val===>', val, cur);
        let selectedNames;
        let selectedKeys;
        if (!isMultiple) {
          selectedNames = cur?.label;
          selectedKeys = cur?.value;
        } else {
          selectedNames = cur?.map((item) => item.label);
          selectedKeys = cur?.map((item) => item.value);
        }
        outOnChange!({
          label: selectedNames,
          value: selectedKeys,
        });
        if (!isMultiple) setOpen?.(false);
      }}
    />
  );
};

export default MyLCardGroup;
