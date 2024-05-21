/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 21:24:23
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-21 23:12:30
 * @FilePath: \front-end-doc\docs\.vitepress\config\base.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 21:24:23
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-21 19:50:34
 * @FilePath: \vitepress\docs\.vitepress\config\en.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const config = defineConfig({
  lang: 'zh-Hans',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/front-end-docs': { base: '/', items: getSidebar({ contentRoot: '/', contentDirs: ['front-end-docs',], collapsible: false, collapsed: false }), },
      '/new-learn': { base: '/', items: getSidebar({ contentRoot: '/', contentDirs: ['new-learn'], collapsible: true, collapsed: false }), },
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Tiny Flame'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guilde',
      link: '/front-end-docs/README',
      activeMatch: '/guide/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

