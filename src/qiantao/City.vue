<template>
  <div class="toubu">
    <van-nav-bar
      class="bar"
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 当前城市 -->
    <van-index-bar>
      <van-index-anchor index="当前城市" />
      <van-cell title="文本" />
    </van-index-bar>
    <!-- 热门城市 -->
    <van-index-bar>
      <van-index-anchor index="热门城市" />
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotcity"
        :key="index"
      />
    </van-index-bar>
    <!-- 暂无城市 -->
    <van-index-bar>
      <van-index-anchor index="暂无城市" />
      <van-cell
        :title="item.label"
        v-for="(item, index) in citylist"
        :key="index"
      />
    </van-index-bar>
  </div>
</template>

<script>
import { gethot, getcity } from '@/api'
export default {
  data () {
    return {
      hotcity: [],
      citylist: []
    }
  },
  created () {
    // this.getcity()
    this.gethot()
    this.getcity()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async gethot () {
      try {
        const res = await gethot()
        console.log(res)
        this.hotcity = res.data.body
      } catch (error) {}
    },
    async getcity () {
      try {
        const res = await getcity()
        console.log(res)
        this.citylist = res.data.body
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__title) {
  color: #fff;
}
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
</style>
