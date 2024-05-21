<template>
  <div class="">
    <div
      v-for="item of repositories"
      :key="item.name"
      class="text-lg mb-5 cursor-pointer"
    >
      <span
        @click="goto(item.repo)"
        class="tracking-wider hover:text-[var(--vp-home-hero-name-color)]"
        >{{ item.name }}</span
      >
      <br />
      <span class="text-sm op60 tracking-wider" v-show="item.subtitle">{{
        item.subtitle
      }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const repositories = [
  {
    name: 'react-workflows',
    repo: 'https://github.com/tiny-flame/react-workflows',
    subtitle: '一个react版的workflows编辑器'
  },
  {
    name: 'front-end-doc',
    repo: 'https://github.com/tiny-flame/front-end-doc',
    subtitle: '一个基于Vitepress的前端文档库'
  },
  {
    name: 'Vite-plugin-utools',
    repo: 'https://github.com/QC2168/vite-plugin-utools',
    subtitle: '高性能构建Utools依赖文件'
  },
  {
    name: 'UseCharts',
    repo: 'https://github.com/tiny-flame/vue3-gantt',
    subtitle: '一个vue3版的甘特图组件'
  },
  {
    name: 'Code Snippets',
    repo: 'https://github.com/QC2168/snippets',
    subtitle: '这些实用的代码片段，使您在开发中得心应手，犹如鱼在水中般自如'
  }
]

const goto = (url) => {
  window.open(url)
}
</script>
<style lang="less" scoped></style>
