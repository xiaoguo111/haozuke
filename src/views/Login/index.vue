<template>
  <div>
    <van-nav-bar title="账号登陆" left-arrow @click-left="onClickLeft" />
    <!-- 输入框 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="hi" style="padding-left: 110px">还没有账号去注册~</div>
  </div>
</template>

<script>
import { loginApi } from '@/api/user.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      const res = await loginApi(this.username, this.password)
      console.log('登录成功', res)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1cb676;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
.van-cell {
  padding: 30px 16px;
  border-bottom: 1px solid #eee;
  font-size: 19px;
}
.van-button--info {
  background-color: #1cb676;
}
.hi {
  font-size: 14px;
  color: #666;
}
</style>
