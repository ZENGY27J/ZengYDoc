import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'ZengY\'s document',
  description: 'live and life',

  // base: '/vuepress-starter/',

  theme: defaultTheme({

    logo: 'https://vuejs.press/images/hero.png',
 
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
  }),

  bundler: viteBundler(),
})
