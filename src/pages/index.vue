// 全局入口文件
<template>
  <div class="indexPage">
    <!-- 上部分 -->
    <div class="pubilc-top"></div>
    <!-- 左侧导航栏 -->
    <div class="leftBox">
      <p>
        <router-link to="/homePage">首页</router-link>
      </p>
      <p>
        <router-link to="/newsList">新闻</router-link>
      </p>
    </div>
    <div class="public-center">
      <!-- 右侧内容部分 -->
      <div class="rightBox">
        <!-- 路由出口 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.indexPage {
  width: 100%;
  height: 100%;
  .pubilc-top {
    height: 50px;
    width: 100%;
    background: rebeccapurple;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .leftBox {
    width: 220px;
    height: 90vh;
    background:white;
    position: absolute;
    left: 0px;
    top: 50px;
  }
  .public-center {
    position: absolute;
    top: 50px;
    padding: 10px 10px;
    .rightBox {
      width: 300px;
      height: 300px;
    }
  }
}
</style>