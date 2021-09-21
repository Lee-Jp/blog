module.exports = {
  lang: 'zh-CN',
  title: '前端进阶积累',
  description: '靡不有初，鲜克有终',
  base: 'blig',
  markdown: {
    lineNumbers: true // 代码行数
  },
  themeConfig: {
    darkMode: false,
    repo: 'Lee-Jp/blog',
    lastUpdated: true, // 是否显示最后更新时间
    lastUpdatedText: '最后更新时间', // 最后更新时间文案
    notFound: ['你来到了无人之境'], // 404显示的文案
    backToHome: '返回首页', // 404返回首页文案
    navbar: [
      // {
      //   text: 'GitHub',
      //   children: [
      //     {
      //       text: '前端进阶积累',
      //       link: 'https://github.com/Lee-Jp/'
      //     },
      //   ]
      // },
      { text: 'article', link: '/article/' },
      { text: '关于', link: '/about/' }
    ],
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
    sidebarDepth: 2,// sidebar深度
    editLinks: false, // 编辑链接
    // editLinkText: '帮助我改善这个页面', // 链接字段
  },
}