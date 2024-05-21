/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 18:19:18
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-21 23:05:09
 * @FilePath: \front-end-doc\docs\.vitepress\config\shared.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { defineConfig } from 'vitepress'
import { getPosts } from "../theme/utils";
import UnoCSS from 'unocss/vite'
// import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export const shared = defineConfig({
  title: '技术手札', lang: 'zh-Hans',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  vite: {
    plugins: [
      // // @ts-ignore
      // AutoSidebar({
      //   ignoreIndexItem: true
      // }),
      // // @ts-ignore
      UnoCSS()
    ]
  },
  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-min.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-min.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo-min.png', width: 24, height: 24 },
    post: await getPosts(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress', 
    //   }
    // },

    carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
