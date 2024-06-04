import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import sidebar from './sidebar'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const config = defineConfig({
  lang: 'zh-Hans',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),
    sidebar,
    editLink: {
      pattern: 'https://github.com/tiny-flame/front-end-doc/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
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
      link: '/front-end-docs/index',
      activeMatch: '/guide/'
    },
    {
      text: '面试',
      items: [
        {
          text: '面试题',
          link: '/interview-docs/'
        },
        {
          text: '手写题',
          link: '/fucking-algorithm/index'
        }
      ]
    }
  ]
}

