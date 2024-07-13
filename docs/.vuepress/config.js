import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'ZengY\'s document',
  description: 'live and life',

  base: '/vuepress-starter/',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' } // 如果你使用的是 .ico 格式的 favicon 文件
    ]
  ],

  theme: defaultTheme({

    logo: '/favicon.ico',
 
    navbar: [
      '/', 
      '/python',
      'java',
      {
        text: '机器学习',
        prefix:'/ml',
        children:['a','b']
      }
    ],
    search: false,
    searchMaxSuggestions: 10
  }),

  bundler: viteBundler(),
})
