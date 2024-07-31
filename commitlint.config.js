module.exports = {
  // 采用 cz 自定义的提交规范, > .cz-config.js
  extends: ['cz'],
  rules: {
    // 自定义规则
    'type-enum': [
      // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
      2, // 当前验证的错误级别，2-表示错误级别的错误
      'always',
      [
        // 泛型内容
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    'type-case': [0, 'lowerCase'],
    'type-empty': [2, 'never']
  }
}
