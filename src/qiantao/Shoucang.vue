<template>
  <div>
    <Toubu></Toubu>
    <div class="main" v-for="(item, index) in getList" :key="index">
      <div class="left">
        <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
      </div>
      <div class="right">
        <div class="name1">{{ item.title }}</div>
        <span>{{ item.desc }}</span>
        <van-button class="niu" size="mini">{{ item.tags[0] }}</van-button>
        <div class="qian">{{ item.price }}<span>元/月</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import Toubu from '@/components/Toubu'
import { getlist } from '@/api'
export default {
  data () {
    return {
      getList: []
    }
  },
  components: {
    Toubu
  },
  created () {
    this.getlist()
  },
  methods: {
    async getlist () {
      this.$toast.success('加载中...')
      try {
        const res = await getlist()
        console.log(res.data.body)
        this.getList = res.data.body
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 120px;
  display: flex;
  .left {
    padding-top: 18px;
    margin-right: 10px;
    img {
      width: 106px;
      height: 80px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    padding-top: 18px;
    .name1 {
      font-size: 14px;
    }
    span {
      margin: 6px 0 6px;
      font-size: 12px;
      color: #afb9ce;
    }
    .qian {
      font-size: 16px;
      color: #fa5741;
      span {
        color: #fa5741;
        margin-left: 5px;
      }
    }
    .niu {
      background-color: #e1f5f8;
      color: #69d2e8;
    }
  }
}
.van-button--default {
  width: 50px;
}
</style>
