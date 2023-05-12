module.exports = {
  title: 'Amos Tang',
  description: '也许代码是一门艺术。用心开发，才能无愧于满屏的bug.',
  port: 8088,
  //dest: '/blog/',
  base: '/',
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    plugins: {
      'markdown-it-mark': true,
      'markdown-it-footnote': true,
      'markdown-it-abbr': true,
      'markdown-it-task-lists': true
    }
  },
  theme: require.resolve('../../index'), // 使用本地主题
  themeConfig: require('./config/themeConfig')
}