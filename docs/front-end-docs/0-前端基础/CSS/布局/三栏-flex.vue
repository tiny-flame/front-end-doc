
 
  <template>
  <div class="wrapper">
    <aside class="left"></aside>
    <main class="center">
      <h1>flex布局解决方案</h1>
      <p>包裹这个3个块的父元素display: flex; 中间的元素flex: 1;</p>
    </main>
    <aside class="right"></aside>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.left,
.right,
.center {
  min-height: 100px;
}
.wrapper {
  display: flex;
}
.left {
  background-color: red;
  width: 100px;
}
.center {
  background-color: orange;
  flex: 1;
}
.right {
  background-color: blue;
  width: 100px;
}
</style>
