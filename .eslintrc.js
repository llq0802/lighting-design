module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 2, // react函数组件名必须大写
    '@typescript-eslint/consistent-type-imports': 2, // ts类型引入
    'spaced-comment': [2, 'always'], // 注释后面2个空格
    '@typescript-eslint/ban-types': 0,
    'react-hooks/rules-of-hooks': 0,
    // 'react/react-in-jsx-scope': 2,
  },
};
