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

//     提交信息规范 (冒号后面有个空格) 例如(test: 增加单元测试)
//     feat: 新功能（feature）
//     fix：修补bug 修改业务
//     docs：文档（documentation）
//     style： 格式（不影响代码运行的变动,空格缩进等）
//     refactor：重构代码（即不是新增功能，也不是修改bug的代码变动）
//     test：增加测试
//     chore：构建过程或辅助工具的变动(新增或者删除依赖包)
//     revert: 回退代码
//     perf: 代码优化性能优化
