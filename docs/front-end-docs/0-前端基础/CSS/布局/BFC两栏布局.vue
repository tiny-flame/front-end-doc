 
  <template>
  <!-- <div  class="wrapper"> -->
  <div class="left"></div>
  <div class="main">
    <h1>BFC 两栏布局</h1>
    <p>
      左侧块浮动到左边，但是因为是浮动块，右侧块高度一旦超过左侧块后文字就会出现在左侧的下方，因为没有块把它挡住。
    </p>
    <p>
      解决办法：
      让右侧块变为BFC文字就不会横过去。因为BFC元素不与Float元素相重叠。
    </p>
  </div>
  <!-- </div> -->
</template>


<style scoped>
/* .wrapper {
  display: flex;
} */
.left {
  width: 100px;
  height: 150px;
  float: left;
  background: #999;
}
.main {
  height: 200px;
  background: #aaa;
  overflow: auto;
  color: #fff;
}
</style>
