module.exports = {
  siteName: 'Amos Tang',
  logo: '/logo.jpg',
  siteDesc: '也许代码是一门艺术。用心开发，才能无愧于满屏的bug.',
  nav: [
    { text: '🏠 首页 Home', link: '/' },
    { text: '🏖️ 说说 Life', link: '/categories/life/' },
    { text: '💻 开发 Develop', link: '/categories/develop/' },
    { text: '📝 学习 Study', link: '/categories/study/' },
    { text: '👰🏻‍♀️ 她 Darling', link: '/categories/aboutHer/' },
    { text: '🔗 友链 Friends', link: '/friend-links/' },
  ],
  searchPlaceholder: 'Search',
  searchMaxSuggestions: 10,
  social: [
    {
      type: 'email',
      link: 'mr.amos@njtech.edu.cn'
    },
    {
      type: 'github',
      link: 'MrTang23'
    },
    {
      type: 'qq',
      link: '//qm.qq.com/cgi-bin/qm/qr?k=d9nYek-6HboIHGkeBH73XOAsk5YUAWfZ&noverify=0&personal_qrcode_source=3'
    },
    {
      type: 'feed',
      link: '/rss.xml'
    }
  ],
  copyright: 'Copyright © 2023 Amos Tang.<br>All rights reserved',
  blog: {
    directories: [
      {
        id: 'post',
        dirname: '_post',
        path: '/',
        itemPermalink: '/post/:year/:month/:day/:slug.html',
        frontmatter: { title: '' },
        pagination: {
          perPagePosts: 10,
          prevText: '',
          nextText: ''
        },
      }
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tags/',
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      },
      {
        id: "category",
        keys: ['category', 'categories'],
        path: '/categories/',
        frontmatter: { title: 'Category' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      }
    ],
    sitemap: {
      hostname: 'http://fly.amostang.ltd',
      exclude: ['/404.html']
    },
    feed: {
      canonical_base: 'http://fly.amostang.ltd',
    },
    palette: {},
    comment: {}
  }
}