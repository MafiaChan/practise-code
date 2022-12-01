module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 把Eslint的这个规则给关闭掉（函数名和小括号之间不需要有空格）
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
