module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 2, // react函数组件名必须大写
    '@typescript-eslint/consistent-type-imports': 2, // ts类型引入
    'spaced-comment': [2, 'always'], // 注释后面2个空格
  },
};
