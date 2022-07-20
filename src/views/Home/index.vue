<template>
  <div class="home-container">
    <van-search
      v-model="keywords"
      show-action
      label="地址"
      placeholder="请输入小区或地址"
      @click="$router.push('/city')"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch"><van-icon name="location-o" /></div>
      </template>
    </van-search>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/1.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/2.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/3.png" alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="main">
      <div class="main1">
        <div class="mini1"><van-icon name="shop-collect-o" /></div>
        <span>整租</span>
      </div>
      <div class="main1">
        <div class="mini1"><van-icon name="shop-collect-o" /></div>
        <span>合租</span>
      </div>
      <div class="main1">
        <div class="mini1"><van-icon name="shop-collect-o" /></div>
        <span>地图找房</span>
      </div>
      <div class="main1">
        <div class="mini1" @click="$router.push('/quchuzu')"><van-icon name="shop-collect-o" /></div>
        <span>去出租</span>
      </div>
    </div>
    <div class="fang">
      <p>租房小组</p>
      <span class="zi">更多</span>
    </div>
    <!-- 底部渲染 -->
    <div class="da">
      <div class="xiao" v-for="item in array" :key="item.id">
        <div class="tutu"><img :src="`http://liufusong.top:8080${item.imgSrc}`" alt=""></div>
        <div class="zizi">
          <span>{{item.title}}</span>
          <i>{{item.desc}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getzufang } from '@/api'
export default {
  data () {
    return {
      keywords: '',
      array: []
    }
  },
  created () {
    this.getzufang()
  },
  methods: {
    onSearch () {},
    async getzufang () {
      const res = await getzufang()
      this.array = res.data.body
    }
  }
}
</script>

<style lang="less" scoped>
.van-search__label {
  color: #7b7b7b;
}
:deep(.van-field__left-icon .van-icon, .van-field__right-icon .van-icon) {
  color: #a0a3a5;
}
.van-search__action {
  font-size: 24px;
  color: black;
}
body {
  position: relative;
  overflow: hidden;
  display: flex;
  .van-search {
    overflow: hidden;
    position: fixed;
    top: 19px;
    left: 27px;
    z-index: 99;
    padding: unset;
    border-radius: 5px;
  }
  .van-swipe {
    height: 212px;
  }
  .van-swipe-item {
    img {
      height: 212px;
    }
  }
  .van-grid {
    margin-top: 10px;
  }
}
.main {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 122px;
  padding-left: 10px;
  padding-right: 10px;
  .main1 {
    box-sizing: border-box;
    justify-content: space-evenly;
    width: 88px;
    height: 122px;
    padding-left: 14px;
    padding-top: 10px;
    font-size: 14px;
    .mini1 {
      width: 60px;
      height: 60px;
      background-color: #f2fbf7;
      border-radius: 50%;
      .van-icon {
        font-size: 40px;
        padding-left: 10px;
        padding-top: 10px;
        color: #00ae66;
      }
    }
    span {
      display: block;
      margin-top: 10px;
      margin-left: 14px;
    }
  }
}
.fang {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: #f6f5f6;
  font-size: 15px;
  p {
    margin-left: 15px;
  }
  .zi {
    line-height: 50px;
    color: #787d82;
    margin-right: 10px;
  }
}
.da {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  width: 375px;
  height: 150px;
  background-color:#f6f5f6;
  padding: 10px;
  .xiao {
    display: flex;
    width: 173px;
    height: 60px;
    background-color:#fff;
    .tutu{
      width: 70px;
      height: 50px;
      // background-color:gold;
      img{
        width: 70px;
        height: 50px;
      }
    }
    .zizi{
      padding-top:10px;
      width: 70px;
      height: 50px;
      // background-color: red;
      font-size:14px;
    }
  }
}
</style>
