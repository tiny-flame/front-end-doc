<template>
  <div class="wrapper"> 
    <div class="main">
      <div class="main-inner">中心区</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 250px;

}
.left,
.right,
.main {
  min-height: 250px;
}

.left {
  width: 200px;
  background-color: thistle;
}

.main {
  background: #999;
}

.right {
  width: 300px;
  background-color: violet;
}

/* 双飞翼布局重点 */
.left,
.main,
.right {
  float: left;
}

.main {
  width: 100%;
}

.main-inner {
  margin-left: 200px;
  margin-right: 300px;
}

.left {
  margin-left: -100%;
}

.right {
  margin-left: -300px;
}
</style>
