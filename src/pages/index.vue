// 全局入口文件
<template>
  <div class="indexPage">
    <el-container>
      <el-header>
        <!-- 上部分 -->
        <div class="pubilc-top"></div
      ></el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="220px"
          ><div class="leftBox">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              router
              :uniqueOpened="true"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="/">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>首页</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/homePage">首页</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/news">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>新闻管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/newsList">新闻列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div></el-aside
        >
        <el-main>
          <!-- 中间内容区域 -->
          <div class="public-center">
            <!-- 右侧内容部分 -->
            <div>
              <!-- 路由出口 -->
              <router-view />
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 菜单关闭事件
    handleClose() {},

    // 菜单打开事件
    handleOpen() {},
  },
};
</script>

<style lang="scss" scoped>
.indexPage {
  width: 100%;
  height: 100%;
  .pubilc-top {
    height: 60px;
    width: 100%;
    background: rebeccapurple;
  }

  .leftBox {
    width: 220px;
    height: 100%;
    background: #545c64;
    position: absolute;
  }
  .public-center {
    position: absolute;
    left: 220px;
  }
}
// 顶部导航
.indexPage ::v-deep(.el-header) {
  padding: 0px;
  height: 60px;
  flex-shrink: 0;
}
</style>