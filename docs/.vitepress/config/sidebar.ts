/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 21:24:23
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-22 05:11:43
 * @FilePath: \front-end-doc\docs\.vitepress\config\sidebar.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

const sidebar = {
  '/front-end-docs': { items: getSidebar({ contentDirs: ['front-end-docs'], collapsed: false }), },
  '/new-learn': { items: getSidebar({ contentDirs: ['new-learn'], collapsed: false }), },
  '/interview-docs': { items: getSidebar({ contentDirs: ['interview-docs'], collapsed: false }), },
  '/daily-logs': { items: getSidebar({ contentDirs: ['daily-logs'], collapsed: false, useFrontmatter: true }), },
  '/technical-article': { items: getSidebar({ contentDirs: ['technical-article'], collapsed: false, useFrontmatter: true }), },
}

export default sidebar