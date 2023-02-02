module.exports = {
  root: true, //当前eslint文件夹就是根目录
  env: {
    //表示在node环境下启动eslint
    node: true
  },
  plugins: ['prettier'],
  //eslint中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'prettier'],
  //解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启用规则以及对应的错误级别
  /**
   * 错误级别为三种
   * "off"或0 表示关闭规则
   * "warn"或1开启规则 使用警告级别的错误：warn(不会导致程序退出)
   * "error"或2 开启规则 使用错误级别的错误： error(当前被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'prettier/prettier': 'error'
  }
}
