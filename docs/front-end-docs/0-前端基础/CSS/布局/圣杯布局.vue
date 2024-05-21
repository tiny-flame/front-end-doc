
  <template>
  <div class="container">
    <div class="main">main</div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>


<style scoped>
/*基本样式*/
.left,
.right,
.main {
  min-height: 300px;
}
.left {
  width: 200px;
  background-color: thistle;
}
.main {
  background-color: #999;
}
.right {
  width: 300px;
  background-color: violet;
}
/* 圣杯布局关键代码 */
.left,
.main,
.right {
  float: left;
  position: relative;
}
.main {
  width: 100%;
}
.container {
  width: 100%;
  overflow: hidden;
  padding-left: 100px;
  padding-right: 160px;
}
.left {
  margin-left: -100%;
  left: -200px;
}
.right {
  margin-left: -300px;
  right: -300px;
}
</style>
