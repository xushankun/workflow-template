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
    { value: 'upd', name: 'upd:     更新', emoji: '📌' },
    { value: 'feat', name: 'feat:     新功能', emoji: '✨' },
    { value: 'fix', name: 'fix:      修复问题', emoji: '🐛' },
    { value: 'docs', name: 'docs:     文档变更', emoji: '📝' },
    {
      value: 'style',
      name: 'style:    代码格式(不影响代码运行的变动)',
      emoji: '💄'
    },
    {
      value: 'refactor',
      name: 'refactor:    重构（既不涉及新功能，也不是修复问题）',
      emoji: '♻️'
    },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动', emoji: '🔧' },
    { value: 'perf', name: 'perf:     性能优化', emoji: '⚡️' },
    { value: 'test', name: 'test:     增加测试', emoji: '✅' },
    { value: 'revert', name: 'revert:     回退', emoji: '⏪' },
    { value: 'build', name: 'build:    打包' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    // subject: '短说明:\n',
    subject: '请简洁明了地描述你提交的主要内容（不超过50个字符）:',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  skipQuestions: ['scope', 'body', 'footer'],
  // limit subject length
  subjectLimit: 100
}
