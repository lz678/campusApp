<template>
  <div class="bbox">
    <div class="type">注册</div>
    <div class="logobox">
      <img src="@/assets/logo.png" alt />
    </div>
    <!-- <van-cell-group> -->
    <div class="inputbox">
      <div class="title">学号</div>
      <van-field v-model="count" placeholder="请输入您的学号">
        <!-- <template #button>
        <div class="codebtn">获取验证码</div>-->
        <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
        <!-- </template> -->
      </van-field>
      <div class="title">昵称</div>
      <van-field v-model="nickname" placeholder="请设置您的昵称" />
      <div class="title">密码</div>
      <van-field v-model="setPd" type="password"  placeholder="请设置您的密码" />
      <!-- <div class="title">邀请码</div>
      <van-field v-model="value" placeholder="请输入您的邀请码" />-->
      <div></div>
    </div>
    <!-- </van-cell-group> -->
    <div class="btn" @click="register">注册</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "",
      setPd: "",
      nickname:''
      // bgimg: "url(" + require("@/assets/BJ.png") + ")"
    };
  },
  methods: {
    register() {
      let code=this.count&&this.setPd&&this.nickname
      if(!code){
        return
      }
      this.$api.userRegister({
        count:this.count,
        pd:this.setPd,
        nickname:this.nickname
      })
      .then(data=>{
        this.$toast(data.Msg)
        if(data.code==1){
        // this.$toast("此帐号")
        this.$router.push('/login')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: absolute;
  //  background-image: url(require('~@/assets/BJ.png'));
  // background-image: url("~@/assets/BJ.png");
  // background-repeat: no-repeat;
  // background-position: center;
  background-size: cover;
  background-color: #fff;
  // background-size: contain;
  //  background-image: 'url('+require('@/assets/BJ.png')+')';
  // :style="{backgroundImage:'url('+require('@/assets/BJ.png')+')'}"
  .type {
    width: 60%;
    margin: 0 auto;
    margin-top: 60px;
    font-size: 1.25rem;
    color: orange;
    font-weight: 600;
    text-align: right;
    // font-size: 12px;
    // color: #fff;
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
    .codebtn {
      border-left: 1px solid #b5b5b5;
      font-size: 12px;
      // padding: 4px;
      padding-left: 6px;
      // color: #fff;
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