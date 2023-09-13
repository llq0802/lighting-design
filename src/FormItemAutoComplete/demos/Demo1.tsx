import TextArea from 'antd/lib/input/TextArea';
import { LForm, LFormItemAutoComplete } from 'lighting-design';
import { useState } from 'react';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});
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

const Demo1 = () => {
  const [form] = LForm.useForm();
  const [options1, setOptions1] = useState<{ value: string; label: string }[]>(
    [],
  );
  const onSearch = (searchText: string) => {
    setOptions1(
      !searchText
        ? []
        : [
            mockVal(searchText, 1),
            mockVal(searchText, 2),
            mockVal(searchText, 3),
          ],
    );
  };

  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const updateOptions = (val?: string) => {
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
    <LForm
      name="FormItemAutoComplete"
      form={form}
      // labelWidth={100}
      // labelWrap
      labelCol={{ flex: '110px' }}
      submitter={{
        buttonAlign: 110,
      }}
    >
      <LFormItemAutoComplete
        label="自动联想"
        required
        name="LFormItemAutoComplete1"
        onSearch={onSearch}
        options={options1}
      />

      <LFormItemAutoComplete
        label="邮箱联想"
        required
        name="LFormItemAutoComplete2"
        validateTrigger="onBlur"
        options={options}
        onSearch={updateOptions}
        onFocus={(e) => updateOptions((e.target as HTMLInputElement).value)}
      />

      <LFormItemAutoComplete
        label="自定义输入框"
        required
        name="LFormItemAutoComplete3"
        onSearch={onSearch}
        options={options}
        inputRender={() => <TextArea />}
      />
    </LForm>
  );
};
export default Demo1;
