<template>
  <div class="toubu">
    <van-nav-bar
      class="bar"
      :title="titles?titles:'收藏列表'"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    titles: {
      type: String
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
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
