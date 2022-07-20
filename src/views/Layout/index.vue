<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 子路由出口 -->
    <!-- 标签导航栏 -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/ ">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/zhaofang">
        <i slot="icon" class="iconfont icon-sousuo"></i>
        <span>找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/zixun">
        <i slot="icon" class="iconfont icon-yuedu"></i>
        <span>资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/myde">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 标签导航栏 -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.iconfont {
      font-size: 20px;
    }
  }
}
</style>
