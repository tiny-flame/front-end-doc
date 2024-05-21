---
layout: home

title: 技术手札
titleTemplate: 前端知识总结

hero:
  name: 技术手札
  text: 欢迎来到小火苗的个人博客，相逢皆是缘，salute！
  tagline: 点滴积累终将汇聚成为江河湖海
  actions:
    - theme: brand
      text: 技术手札主页
      link: /front-end-docs/知识模型
    - theme: alt
      text: 前端知识总结
      link: /front-end-docs/README
  image:
    src: /logo.png
    alt: 技术手札

features:
  - icon: 🥩
    title: 技术文章
    details: 不定期更新，助你保持对技术发展的了解
    link: /interview-docs/index
    linkText: 开始阅读
  - icon: 🍔
    title: 前端面试
    details: 收录前端面试常见问题及解答，助你备战面试
    link: /interview-docs/index
    linkText: 开始学习
  - icon: 🍪
    title: 实用代码片段
    details: 封装常用且实用代码片段，提高开发效率
    link: /front-end-docs/实用工具与库/decorateComponentWithProps
    linkText: 提高效率
  - icon: 🍟
    title: 我的开源
    details: 拥抱开源，开发有趣的东西
    link: /open-source/index
    linkText: 了解更多
  - icon: 🍳
    title: 今天学了什么
    details: 记录每天学到的新知识和经验分享
    link: /new-learn/index
    linkText: 记新知识
  - icon: 🌭
    title: 小笔记
    details: 记录零零碎碎的知识点
    link: /daily-logs/index
    linkText: 去瞅瞅
---

<style>
:root {
  --vp-home-hero-name-color: transparent; 
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #a8071a 30%, #f7841e);


  --vp-home-hero-image-background-image: linear-gradient(-45deg, #c12127 50%, #f7841e 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
