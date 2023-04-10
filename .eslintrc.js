module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    'react-hooks/rules-of-hooks': 2, // React函数组件名必须大写
    '@typescript-eslint/consistent-type-imports': 2, // TS类型单独引入
    'spaced-comment': [2, 'always'], // 注释后面跟2个空格
    'prefer-template': 2, // 强制使用模板字符串
    'no-console': 1, // 警告允许console
  },
};
