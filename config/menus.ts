export default {
  // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  '/components': [
    {
      title: '组件总览',
      children: [
        // 'components/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        'components.md',
      ],
    },
    {
      title: '基础组件',
      children: [
        'Spin/index.md',
        'Tooltip/index.md',
        'Switch/index.md',
        'ColorPick/index.md',
        'Trigger/index.md',
        'WaterMark/index.md',
        'NumberRoll/index.md',
        'CaptchaButton/index.md',
        'useFormModal/index.md',
        'useFormDrawer/index.md',
      ],
    },
    {
      title: '数据展示',
      children: ['Table/index.md'],
    },
    {
      title: '数据录入',
      children: [
        'Form/index.md',
        'Form/components/MoadlForm/index.md',
        'Form/components/DrawerForm/index.md',
        'Form/components/QueryForm/index.md',
        'Form/components/StepsForm/index.md',
        'FormItem/index.md',
        'FormItem/components/FormItemInput/index.md',
        'FormItem/components/FormItemInput/LFormNumber.md',
        'FormItem/components/FormItemInput/LFormPassword.md',
        'FormItem/components/FormItemInput/LFormTextArea.md',
        'FormItem/components/FormItemCaptcha/index.md',
        'FormItem/components/FormItemAutoComplete/index.md',
        'FormItem/components/FormItemSelect/index.md',
        'FormItem/components/FormItemTreeSelect/index.md',
        'FormItem/components/FormItemRate/index.md',
        'FormItem/components/FormItemSegmented/index.md',
        'FormItem/components/FormItemRadio/index.md',
        'FormItem/components/FormItemCheckbox/index.md',
        'FormItem/components/FormItemSwitch/index.md',
        'FormItem/components/FormItemSlider/index.md',
        'FormItem/components/FormItemCascader/index.md',
        'FormItem/components/FormItemAddress/index.md',
        'FormItem/components/FormItemDatePicker/index.md',
        'FormItem/components/FormItemTimePicker/index.md',
        'FormItem/components/FormItemUpload/index.md',
        'FormItem/components/FormItemColor/index.md',
      ],
    },
  ],
  //  hooks
  '/hooks': [
    {
      title: 'rc-use-hooks',
      children: ['hooks/start.md'],
    },
    {
      title: 'state',
      children: [
        'useCallbackState/index.md',
        'useSetState/index.md',
        'useResetState/index.md',
        'useSafeState/index.md',
        'useLatest/index.md',
        'usePrevious/index.md',
      ],
    },
    {
      title: 'lifecycle',
      children: [
        'useMounted/index.md',
        'useUpdated/index.md',
        'useForceUpdate/index.md',
        'useUnmounted/index.md',
        'useIsMounted/index.md',
        'useIsUnmounted/index.md',
      ],
    },
    {
      title: 'effect',
      children: ['useDebounceFn/index.md', 'useThrottleFn/index.md'],
    },
    {
      title: 'dom',
      children: ['useClientRect/index.md'],
    },
    {
      title: 'other',
      children: [
        'useShow/index.md',
        'useLockAsyncFn/index.md',
        'useConcurrentRequest/index.md',
        'usePersistFn/index.md',
        'useCreate/index.md',
      ],
    },
  ],
};
