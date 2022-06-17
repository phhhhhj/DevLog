module.exports = {
  base: '/', // base url을 설정합니다.
  title: '개발블로그',
  head: [
    ['link', { rel: 'icon', href: '/images/logo_192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {        // VuePress 기본 테마에 필요한 설정
    logo: '/images/moonstar.png', // title옆에 나타날 로고 이미지
    nav: [            // 페이지 우측 상단에 보여질 nav들
      {
        text: 'Menu',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Sample', link: '/sample.html' }
        ]
      }
    ],
    sidebar: [
      '/', '/sample', ['/sample', '새앰프을']
    ],
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  markdown: {
    lineNumbers: true
  }
};