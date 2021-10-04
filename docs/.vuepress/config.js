/*
 * @Description: 配置文件
 * @Date: 2021-09-21 18:19:51
 * @FilePath: /blog/docs/.vuepress/config.js
 * @LastEditors: LiJiapeng
 * @LastEditTime: 2021-10-04 21:48:21
 */
module.exports = {
  lang: 'zh-CN',
  title: '前端进阶积累',
  description: '靡不有初，鲜克有终',
  base: '/blog/',
  markdown: {
    lineNumbers: true // 代码行数
  },
  themeConfig: {
    darkMode: false,
    repo: 'Lee-Jp/blog',
    lastUpdated: true, // 是否显示最后更新时间
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
      { text: '算法', link: '/algorithm/' },
      { text: '关于', link: '/about/' }
    ],
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: [
      {
        text: 'algorithm',
        link: '/algorithm/',
        children: [
          {
            text: '链表',
            link: '/链表/',
            children: [
              {
                text: '141. 环形链表',
                link: '/algorithm/链表/001-141. 环形链表.md',
              },
              {
                text: '142. 环形链表 II',
                link: '/algorithm/链表/002-142. 环形链表 II.md',
              },
              {
                text: '202. 快乐数',
                link: '/algorithm/链表/003-202. 快乐数.md',
              },
              {
                text: '206. 反转链表',
                link: '/algorithm/链表/004-206. 反转链表.md',
              },
              {
                text: '92. 反转链表 II',
                link: '/algorithm/链表/005-92. 反转链表 II.md',
              },
            ],
          },
        ],
      },
      // '/algorithm/': [
        
      //   '/algorithm/',
      //   {
      //     text: '链表',
      //     children: ['/LeetCode刷题/链表/001-141. 环形链表.md', '/guide/getting-started.md'],
      //   },
      // ],
      
      // '/reference/': [
      //   {
      //     text: 'Reference',
      //     children: ['/reference/cli.md', '/reference/config.md'],
      //   },
      // ],
    ],
    sidebarDepth: 2,// sidebar深度
    editLink: false, // 编辑链接
    // editLinkText: '帮助我改善这个页面', // 链接字段
    contributors: false, // 是否启用 贡献者列表
  },
}