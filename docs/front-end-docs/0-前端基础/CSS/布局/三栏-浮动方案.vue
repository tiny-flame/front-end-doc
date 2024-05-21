<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 22:51:18
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-21 21:59:51
 * @FilePath: \front-end-doc\docs\front-end-docs\0-前端基础\CSS\布局\三栏-浮动方案.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->

  <template>
  <aside class="left"></aside>
  <aside class="right"></aside>
  <main class="center">
    <h1>浮动解决方案</h1>
    <p>方法：left和right写在center前面，并且分别左右浮动；</p>
    <p>中间的这个div因为是块级元素，所以在水平方向上按照他的包容块自动撑开。</p>
    <p>简单，但是中心部分过长下面会溢出，然后文字就会跑到两边去。</p>
  </main>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
.left,
.right,
.center {
  min-height: 100px;
}
.left {
  background-color: red;
  width: 200px;
  float: left;
}
.right {
  background-color: blue;
  width: 200px;
  float: right;
}
.center {
  background-color: orange;
  width: 100%;
}
</style>
