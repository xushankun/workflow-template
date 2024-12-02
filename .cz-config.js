'use strict'
module.exports = {
  // types: 定义可用的提交类型，如 feat、fix、docs 等。
  // messages: 自定义提示信息，用于引导开发者输入提交信息。
  // scopes: 如果项目很大，可以定义不同的提交范围，如 button、modal 等。
  // allowCustomScopes: 是否允许用户输入自定义的范围。
  // allowBreakingChanges: 是否允许用户在提交中包含破坏性变更。
  // subjectLimit: 主题的字符限制。
  // warnOnFail: 如果提交消息不符合规范，是否警告用户。
  types: [
    { value: 'upd', name: '📌 upd:        更新' },
    { value: 'feat', name: '✨ feat:       新功能' },
    { value: 'fix', name: '🐛 fix:        修复问题' },
    { value: 'docs', name: '📝 docs:       文档变更' },
    { value: 'style', name: '💄 style:      代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: '♻️  refactor:   重构 (既不增加feature, 也不是修复bug)'
    },

    { value: 'perf', name: '⚡️ perf:       性能优化' },
    { value: 'test', name: '✅ test:       增加测试' },
    { value: 'chore', name: '🔧 chore:      构建过程或辅助工具的变动' },
    { value: 'revert', name: '⏪ revert:     回退' },
    { value: 'build', name: '🚀 build:      打包' }
  ],
  messages: {
    type: '请选择提交的类型：',
    subject: '请简洁明了地描述你提交的主要内容（不超过50个字符）:',
    confirmCommit: '确认要使用以上信息提交？(y/n)'
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['特性', '修复'],
  skipQuestions: ['scope', 'body', 'footer'],
  // limit subject length
  subjectLimit: 100
}
