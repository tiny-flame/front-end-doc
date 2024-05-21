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
    // {
    //   text: 'Guilde',
    //   link: '/front-end-docs/README',
    //   activeMatch: '/guide/'
    // },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

