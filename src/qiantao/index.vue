<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <!-- 热门城市 -->
      <div>
        <van-index-anchor index="热门城市">热门城市</van-index-anchor>
        <van-cell
          v-for="item in hotCityList"
          :key="item.value"
          :title="item.label"
          @click="checkCity(item)"
        />
      </div>
      <!-- 普通城市 -->
      <van-index-bar
        class="indexBar"
        :sticky="false"
        highlight-color="#AE853A"
        :index-list="indexList"
      >
        <van-index-anchor
          v-for="(item, index) in indexList"
          :key="index"
          :index="item"
        >
          <span class="indexWord">{{ item.toUpperCase() }}</span>

          <van-cell
            v-for="(citem, cindex) in cityList[item]"
            :key="cindex"
            :title="citem.label"
          />
        </van-index-anchor>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { getCityList, getHotCity } from '@/api/area'
export default {
  data () {
    return {
      hotCityList: [],
      cityList: {},
      indexList: []
    }
  },
  created () {
    this.getCityList()
    this.getHotCity()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async getHotCity () {
      const { data } = await getHotCity()
      this.hotCityList = data.body
    },
    async getCityList () {
      const { data } = await getCityList()
      this.cityList = this.getList(data.body).cityList
      this.indexList = this.getList(data.body).indexList
    },
    getList (data) {
      const cityList = {}
      let indexList = []
      data.map((item) => {
        const first = item.short.substr(0, 1)
        if (first in cityList) {
          cityList[first].push(item)
        } else {
          cityList[first] = [item]
        }
        indexList = Object.keys(cityList).sort()

        return { cityList, indexList }
      })
      return { cityList, indexList }
    },
    checkCity (value) {
      this.onClickLeft()
      this.$store.commit('getCity', value)
    }
  }
}
</script>

<style scoped lang="less">
.top {
  .van-nav-bar {
    background-color: #21b97a;
    :deep(.van-icon) {
      color: #fff;
    }
  }
  :deep(.van-nav-bar__title) {
    // font-size:18px
    color: #fff;
    font-size: 18px;
  }
}
</style>
