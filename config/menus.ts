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
        'NumberRoll/index.md',
        'CaptchaButton/index.md',
        'useFormModal/index.md',
        'useFormDrawer/index.md',
      ],
    },
    {
      title: '数据录入',
      children: [
        'FormItem/index.md',
        'FormItemInput/index.md',
        'FormItemCaptcha/index.md',
        'FormItemAutoComplete/index.md',
        'FormItemSelect/index.md',
        'FormItemTreeSelect/index.md',
        'FormItemRate/index.md',
        'FormItemSegmented/index.md',
        'FormItemRadio/index.md',
        'FormItemCheckbox/index.md',
        'FormItemSwitch/index.md',
        'FormItemSlider/index.md',
        'FormItemCascader/index.md',
        'FormItemAddress/index.md',
        'FormItemDatePicker/index.md',
        'FormItemTimePicker/index.md',
        'FormItemUpload/index.md',
        'FormItemColor/index.md',
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
