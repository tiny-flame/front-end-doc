/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 18:19:18
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-10 00:57:21
 * @FilePath: \docs\.vitepress\config\index.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { config } from './base'


export default defineConfig({
  ...shared,
  markdown: {
    attrs: { disable: true }
  },
  locales: {
    root: { label: 'Chinese', ...config }
  }
})
