import * as clientConfig0 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-active-header-links/lib/client/config.js'
import * as clientConfig1 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-back-to-top/lib/client/config.js'
import * as clientConfig2 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-copy-code/lib/client/config.js'
import * as clientConfig3 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-medium-zoom/lib/client/config.js'
import * as clientConfig4 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-nprogress/lib/client/config.js'
import * as clientConfig5 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/plugin-theme-data/lib/client/config.js'
import * as clientConfig6 from 'D:/zengyBlog/vuepress-starter/node_modules/@vuepress/theme-default/lib/client/config.js'

export const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
].map((m) => m.default).filter(Boolean)
