/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-10 01:10:50
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-21 21:59:40
 * @FilePath: \front-end-doc\docs\.vitepress\theme\utils\index.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { globby } from "globby";
import matter from "gray-matter";
import fs from "fs-extra";

export async function getPosts() {
  let paths = await getPostMDFilePaths();
  let posts = await Promise.all(
    paths.map(async (item) => {
      const fileContent = await fs.readFile(item, "utf-8");
      const { data, content } = matter(fileContent);
      const readTime = calculateReadTime(content.length)
      const parseTitle = capitalizeFirstLetter(data.title)

      return {
        frontMatter: { ...data, title: parseTitle, readTime },
        // 处理docs开头，导致无法跳转404
        regularPath: `/${item.replace(".md", ".html")}`,
      };
    })
  );

  return posts;
}
function calculateReadTime(wordCount, wordsPerMinute = 200) {
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes); // 四舍五入到最接近的整数，表示阅读时长
}

async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"],
  });

  return paths.filter((item) => item.includes("front-end-docs/杂项") && !item.endsWith('index.md'));
}

function capitalizeFirstLetter(str: string = '') {
  return str.charAt(0).toUpperCase() + str.slice(1);
}