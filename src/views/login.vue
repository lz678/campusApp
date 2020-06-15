<template>
  <div class="bbox">
    <div class="type">登录</div>
    <div class="logobox">
      <img src="@/assets/logo.png" alt />
    </div>
    <!-- <van-cell-group> -->
    <div class="inputbox">
      <div class="title">学号</div>
      <van-field v-model="user" placeholder="请输入您的学号" />
      <!-- <div class="title">验证码</div>
      <van-field v-model="value" placeholder="请输入您的验证码" />-->
      <div class="title">登录密码</div>
      <van-field v-model="pwd" type="password" placeholder="请输入您的密码" />
      <div class="foot">
        <div class="register" @click="$router.push('/register')">注册</div>
        <div class="forget" @click="$router.push('/forgetpd')">忘记密码？</div>
      </div>
    </div>
    <!-- </van-cell-group> -->
    <div class="btn" @click="login">登录</div>
  </div>
</template>

<script>
import { setStore } from "@/utils/index.js";
export default {
  data() {
    return {
      user: "",
      pwd: "",
      bgimg: "url(" + require("@/assets/BJ.png") + ")"
    };
  },
  methods: {
    login() {
      let username = this.user;
      let password = this.pwd;
      this.$api
        .userLogin({
          // get方法
          account: this.user,
          password: this.pwd
        })
        .then(data => {
          console.log(data);
          this.$toast({
            message: data.Msg,
            duration: 1000
          });
          if (data.code == 1) {
            // this.$toast(data.Msg)
            setStore("token", 123);
            setStore("id", username);
            this.$router.push("/tabbar/campus");
          }
          // this.$toast(data.Msg)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  //  background-image: url(require('~@/assets/BJ.png'));
  // background-image: url("~@/assets/BJ.png");
  // background-repeat: no-repeat;
  // background-position: center;
  background-size: cover;
  background-color: #fff;
  //  background-image: 'url('+require('@/assets/BJ.png')+')';
  // :style="{backgroundImage:'url('+require('@/assets/BJ.png')+')'}"
  .type {
    width: 60%;
    margin: 0 auto;
    margin-top: 60px;
    text-align: right;
    font-size: 1.25rem;
    color: orange;
    font-weight: 600;
  }
  .logobox {
    width: 24%;
    margin: 0px auto;
    margin-top: 3rem;
    // margin-top: 100px;
    img {
      width: 100%;
    }
  }
  .van-cell {
    // width: 80%;
    background: transparent;
  }
  .inputbox {
    width: 80%;
    margin: 0 auto;
    .title {
      width: 88%;
      margin: 10px auto;
      font-size: 12px;
      text-align: left;
      // color: #fff;
    }
    .foot {
      display: flex;
      justify-content: space-around;
      .register {
        width: 40%;
        padding: 6px 0px;
        // margin: 10px auto;
        font-size: 12px;
        text-align: left;
        color: orange;
      }
      .forget {
        width: 40%;
        padding: 6px 0px;
        // margin: 10px auto;
        font-size: 12px;
        text-align: right;
        color: orange;
      }
    }
  }
  .btn {
    width: 74%;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 4px;
    padding: 6px;
    color: #fff;
    background-color: #ffcc03;
  }
}
</style>