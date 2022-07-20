<template>
  <div class="my-wode">
    <div class="beijing">
      <img
        :src="
          isLogin
            ? `http://liufusong.top:8080${userList.avatar}`
            : `http://liufusong.top:8080/img/profile/bg.png
`
        "
        alt="背景图"
      />
      <div v-if="isLogin" class="tanchu">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        <div class="youke">{{ userList.nickname }}</div>
        <van-button
          class="btn"
          round
          size="small"
          to="/login"
          color="#21b97a"
          @click="logout"
          >退出</van-button
        >
        <span class="zi">
          编辑个人资料
          <van-icon name="play" />
        </span>
      </div>
      <!--  隐藏-->
      <div v-else class="tanchu1">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        <div class="youke">游客</div>
        <van-button class="btn" round size="small" to="/login" color="#21b97a"
          >登录</van-button
        >
      </div>
      <!-- 隐藏 -->
    </div>
    <div class="zhongbu">
      <router-link :to="isLogin?'/shoucang':'/login'">
        <i class="iconfont icon-shoucang"></i>
        <span>我的收藏</span>
      </router-link>
      <router-link :to="isLogin?'/chuzu':'/login'">
        <i class="iconfont icon-shouye"></i>
        <span>我的出租</span>
      </router-link>
      <a href="#">
        <i class="iconfont icon-lishi"></i>
        <span>看房记录</span>
      </a>
    </div>
    <div class="zhongbu2">
      <a href="#">
        <i class="iconfont icon-fenxiang"></i>
        <span>成为房主</span>
      </a>
      <a href="#">
        <i class="iconfont icon-wode"></i>
        <span>个人资料</span>
      </a>
      <a href="#">
        <i class="iconfont icon-shouji"></i>
        <span>联系我们</span>
      </a>
    </div>
    <div class="renshi">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { userApi } from '@/api'
export default {
  data () {
    return {
      userList: {}
    }
  },
  created () {
    this.userApi()
  },
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    async logout () {
      try {
        this.$dialog
          .confirm({
            title: '提示',
            message: '是否确认退出'
          })
          .then(() => {
            this.$store.commit('setUser', {})
          })
          .catch(() => {
            // on cancel
          })
      } catch (error) {}
    },
    async userApi () {
      if (this.isLogin) {
        try {
          const res = await userApi()
          console.log(res)
          this.userList = res.data.body
        } catch (error) {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-wode {
  .beijing {
    position: relative;
    width: 100%;
    height: 4.53333rem;
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 188%;
  }
  .tanchu {
    position: absolute;
    width: 310px;
    height: 4.33333rem;
    background-color: #fff;
    top: 158px;
    left: 33px;
    box-shadow: 0 0 10px 3px #ddd;
    img {
      position: absolute;
      height: 70px;
      width: 70px;
      border: 5px solid #f5f5f5;
      border-radius: 50%;
      top: -36px;
      left: 117px;
    }
    .youke {
      position: absolute;
      font-size: 14px;
      top: 55px;
      left: 117px;
    }
    .btn {
      position: absolute;
      left: 128px;
      top: 88px;
      width: 52px;
      height: 20px;
    }
    .zi {
      position: absolute;
      font-size: 12px;
      top: 124px;
      left: 112px;
      color: #a69999;
    }
  }
  .zhongbu {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 375px;
    height: 70px;
    // background-color: red;
    margin-top: 4.26667rem;
    padding-left: 30px;
    padding-right: 30px;
    span {
      margin-top: 5px;
      display: block;
      font-size: 13px;
      color: #333;
    }
    i {
      font-size: 20px;
      color: #333;
    }
  }

  .zhongbu2 {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 375px;
    height: 70px;
    // background-color: pink;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 28px;
    margin-bottom: 10px;
    span {
      margin-top: 5px;
      display: block;
      font-size: 13px;
      color: #333;
    }
    i {
      font-size: 20px;
      color: #333;
    }
  }
  .renshi {
    width: 345px;
    margin: 0 auto;
  }
}
.tanchu1 {
  position: absolute;
  width: 310px;
  height: 4.33333rem;
  background-color: #fff;
  top: 158px;
  left: 33px;
  box-shadow: 0 0 10px 3px #ddd;
  img {
    position: absolute;
    height: 70px;
    width: 70px;
    border: 5px solid #f5f5f5;
    border-radius: 50%;
    top: -36px;
    left: 117px;
  }
  .youke {
    position: absolute;
    font-size: 14px;
    top: 55px;
    left: 141px;
  }
  .btn {
    position: absolute;
    left: 128px;
    top: 88px;
    width: 52px;
    height: 20px;
  }
}
</style>
