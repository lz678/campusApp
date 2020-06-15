<template>
  <div class="bbox">
    <!-- <div class="nav">历史</div> -->
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">设置</div>
    </van-nav-bar>
    <div class="list">
      <!-- <div class="title">学号</div>
      <van-field v-model="setNickName" placeholder="重置昵称" />
      <div></div>-->
      <div class="inputbox">
        <div class="title">重置昵称：</div>
        <van-field v-model="setNickName" placeholder="请输入新的昵称" />
        <!-- <div class="title">验证码</div>
        <van-field v-model="value" placeholder="请输入您的验证码" />-->
        <!-- <div class="title">登录密码</div>
        <van-field v-model="pwd" type="password" placeholder="请输入您的密码" />-->
      </div>
      <div class="btn" @click="reset">重置</div>
      <!-- <van-field v-model="user" placeholder="请输入您的学号" /> -->
    </div>
  </div>
</template>

<script>
import { getStore } from "@/utils/index.js";
export default {
  data() {
    return {
      setNickName: ""
    };
  },
  methods: {
    getResetNickName() {
     
      this.$api.getResetNickName({
        nickname:this.setNickName,
        id:getStore('id')
      }).then(data=>{
        this.$toast(data.Msg)
        if(data.code==1){
          this.setNickName=''
        }
      })
    },
    reset(){
      if(!this.setNickName){
        this.$toast('重置昵称不能为空！')
        return
      }
      this.getResetNickName()
    }
  },
  // created() {}
};
</script>

<style lang="scss" scoped>
.bbox {
  // position: fixed;
  height: 100vh;
  background-color: #fff;
  overflow: scroll;
  .nav {
    width: 100%;
    height: 6vh;
    line-height: 6vh;
    color: #fff;
    font-weight: 600;
    background: linear-gradient(
      to right,
      rgb(198, 255, 221),
      rgb(251, 215, 134),
      rgb(247, 121, 125)
    );
    .navtitle {
      color: #fff;
      font-weight: 600;
    }
  }
  .list {
    width: 100%;
    height: 94vh;
    position: absolute;
    .inputbox {
      width: 80%;
      margin: 20px auto;
      .title {
        width: 88%;
        margin: 2rem auto;
        font-size: 12px;
        text-align: left;
        // color: #fff;
      }
    }
     .btn {
    width: 74%;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 4px;
    padding: 6px;
    // color: #fff;
    background-color: #ffcc03;
  }
  }
  
}
</style>