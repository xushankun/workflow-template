module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 要求类型字段
    'type-enum': [
      2,
      'always',
      [
        'upd',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'chore',
        'perf',
        'test',
        'revert',
        'build'
      ]
    ]
    // 其他规则...
  }
}
