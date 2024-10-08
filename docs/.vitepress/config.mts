import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QQDecrypt",
  description: "解密QQ聊天数据库",
  head: [
    ['link', { rel: 'icon', href: '/icons/logo.jpg' }],
  ],  
  vite: {
    plugins: [
      // add plugin directly as an object property
      AutoSidebar({ deletePrefix: 'index', ignoreIndexItem: true })
    ]
  },
  markdown: {
    // 行号显示
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/icons/logo.png", // 页面上显示的logo
    lastUpdated: {
      text: '最后更新于'
    },    
    nav: [ // 页面右上角的导航
      { text: '主页', link: '/' },
      { text: '致谢', link: '/thanks/' },
      { text: '文件', link: '/files' }         
    ],
    footer: {
      message: ' CC BY-NC-SA 4.0 <a href="https://github.com/QQBackup/qq-win-db-key/blob/master/LICENSE"> License</a>.', 
      copyright: 'Copyright © 2024'
    },
    editLink: {
      pattern: 'https://github.com/QQBackup/QQDecrypt/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    prev: '上一页',
    next: '下一页',
    darkModeSwitchLabel: '亮/暗模式',
    lightModeSwitchTitle: '调整为亮色模式',
    darkModeSwitchTitle: '调整为暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QQBackup/QQDecrypt' },
    ]
  }
})
