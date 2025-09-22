import { LForm, LFormItemAutoComplete } from 'lighting-design';
import React, { useState } from 'react';
// 邮箱后缀
const EmailSuffix = [
  '@qq.com',
  '@126.com',
  '@163.com',
  '@sina.com',
  '@gmail.com',
  '@hotmail.com',
  '@yahoo.com',
  '@outlook.com',
];
type FieldType = {
  time1?: string;
  time2?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  const updateOptions = (val?: string) => {
    if (!val) {
      setOptions([]);
      return;
    }
    const [valPrefix, valSuffix] = val.split('@');
    const opts = val
      ? EmailSuffix.filter((suffix) => {
          if (!valSuffix) {
            return true;
          }
          return suffix.indexOf(valSuffix) > 0;
        }).map((suffix) => {
          const opt = valPrefix + suffix;
          return {
            label: opt,
            value: opt,
          };
        })
      : [];
    setOptions(opts);
  };

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemAutoComplete
        required
        name="time1"
        label="基础"
        options={[
          { id: 'open', name: 'open' },
          { id: 'closed', name: 'closed' },
          { id: 'processing', name: 'processing' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
        autoCompleteProps={{
          filterOption: (inputValue, option) => {
            return (option?.label ?? '')?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          },
        }}
      />
      <LFormItemAutoComplete
        label="邮箱联想"
        required
        name="time2"
        validateTrigger="onBlur"
        options={options}
        autoCompleteProps={{
          onFocus: (e) => updateOptions((e.target as HTMLInputElement).value),
          onSearch: updateOptions,
        }}
      />
    </LForm>
  );
};

export default App;
