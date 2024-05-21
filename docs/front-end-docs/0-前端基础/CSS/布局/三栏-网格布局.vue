
  <template>
  <div class="wrapper">
    <aside class="left"></aside>
    <main class="center">
      <h1>表格布局</h1>
      <p>父元素display: table;并且宽度为100%</p>
      <p>每一个子元素display: table-cell;</p>
      <p>左右两侧添加宽度，中间不加宽度</p>
    </main>
    <aside class="right"></aside>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 网格布局 */
.wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: 100px 1fr 100px;
}

.left {
  background-color: red;
}
.center {
  background-color: orange;
}
.right {
  background-color: blue;
}
</style>
