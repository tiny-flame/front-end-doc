  <template>
  <div class="wrapper">
    <aside class="left"></aside>
    <aside class="right"></aside>
    <main class="center">
      <h1>绝对定位解决方案</h1>
      <p>左右区域分别postion：absolute，固定到左右两边</p>
      <p>中间区域postion：absolute；left：100px; right: 100px</p>
      <p>给总的宽度加一个min-width，不然缩小窗口会有毛病</p>
    </main>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 200px;
}
aside {
  position: absolute;
  width: 100px;
  min-height: 200px;
}
aside.left {
  left: 0;
  background-color: red;
}
aside.right {
  right: 0;
  background-color: blue;
}
main.center {
  position: absolute;
  left: 100px;
  right: 100px;
  background-color: orange;
}
</style>
