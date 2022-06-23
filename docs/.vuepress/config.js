const { getSidebar } = require('./utils.js');

module.exports = {
  base: '/',
  title: 'hyunjungLog',
  description: "Hyunjung's Dev Blog",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/phhhhhj' }
    ],
    sidebar: getSidebar(),
    smoothScroll: true
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ["@vuepress/last-updated"],
    ["vuepress-plugin-code-copy"],
  ],
  markdown: {
    lineNumbers: true
  }
};